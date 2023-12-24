import React, { useEffect, useRef, useState } from 'react'
import ReactQuill from 'react-quill';
import TagsInput from 'react-tagsinput';
import { Blog } from '../../../../Context/Context';
import { RxCross2 } from "react-icons/rx";
import { CiImageOn } from "react-icons/ci";
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../../fireBase/firebase';
import { storage } from '../../../../fireBase/firebase';
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";


const Preview = ({title, value}) => {
    const ImgRef = useRef();
    const handleUpload = () =>{
        ImgRef.current.click();
    }
    const [imageUrl, setImageUrl] = useState("")
    const [tags, setTags] = useState([])
    const {publish, setPublish} = Blog();
    const {currentUser} = Blog();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState({
        title : "",
        photo : "",
    });
    const [desc, setDesc] = useState('');
    useEffect(()=>{
        if(title || value)
        {
            setPreview({...preview, title : title})
            setDesc(value)
        }
        else
        {
            setPreview({...preview, title : ""})
            setDesc("")
        }
    },[title, value])

    const handlePublish =  async () =>{
        setLoading(true)
        try
        {
           if(preview.title==="" || desc ==="" || tags.length === 0)
           {
            toast.error("Title, Description and Tags can't be left empty")
            return
           }
           if(preview.title.length < 15)
           {
            toast.error("Please give a longer Title")
           }

           // ***  Posting a Post to datadbase logic goes here  ***

           const collections = collection(db, "posts");
           // ***  uploading an image and get back its url from database  ***
           const storageRef = ref(storage, `image/${preview.photo.name}`);
           await uploadBytes(storageRef, preview?.photo);
           const imageUrl = await getDownloadURL(storageRef);
           
           // ***  addDoc helps to add a new Doc to a firebase  ***
           await addDoc(collections, {
            userId : currentUser?.uid,
            title : preview.title,
            desc,
            tags,
            postImg : imageUrl,
            created : Date.now(),
            pageViews : 0,
           })
       toast.success('Successfully uploaded post')

       setPreview({
        title : "",
        photo : "",
       })
       setPublish(false)
       navigate('/')
        }
        catch(error)
        {
            toast.error(error.message)
        }
        finally
        {
            setLoading(false)
        }
    }


    return (
        <section className='absolute inset-0 bg-white z-30'>
     <div className='size my-[2rem]'>
        <span onClick={()=>setPublish(false)} className='absolute right-8 md:right-[5rem] top-[3rem] text-2xl cursor-pointer  '><RxCross2 /></span>
        <div className='mt-[8rem] flex flex-col md:flex-row gap-10'>

            {/* left part */}
            <div className='flex-1 '>
                <h3>Preview</h3>
                <div style={{backgroundImage : `url(${imageUrl})`}} onClick={handleUpload} className='w-full h-[200px] object-cover bg-gray-100 my-3 grid place-items-center cursor-pointer bg-cover bg-no-repeat  '>
                    {imageUrl?null : <span className='flex flex-col items-center'><CiImageOn className='text-4xl'/>Upload Image</span> }
                </div>
                
                <input onChange={(e)=>{setImageUrl(URL.createObjectURL(e.target.files[0]));  setPreview({...preview, photo : e.target.files[0] }) }} ref={ImgRef} type="file" hidden  />

                <input value={preview.title} onChange={(e)=>{setPreview({...preview, title: e.target.value})}} type="text" placeholder='Enter Title' className='outline-none  w-full'/>
                <ReactQuill theme="bubble" value={desc} onChange={setDesc} placeholder="Tell the World what's in your mind."
                className='mt-8'/>
            </div>

            {/* Right part */}
            <div className='flex-1 flex flex-col gap-4 mb-5 md:mb-0'>
                 <h3>sdjfklsadsdfasdf</h3>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus rem ipsa in explicabo aperiam repellendus expedita? Dolores tempora ipsum veritatis voluptatum deleniti dicta amet nihil inventore incidunt, molestiae quo!</p>
                 <TagsInput value={tags} onChange={setTags} />
                 <button onClick={handlePublish} className={`bg-blue-700 text-white ${loading ? "py-2" : "py-4"} px-5 rounded-full`}>{loading ? <span className='flex justify-between px-3 items-center'>Publishing post<img className='w-10 h-10' src='/upload5.gif'/></span> : "Publish now"}</button>
            </div>
        </div>
     </div>
    </section>
  )
}

export default Preview