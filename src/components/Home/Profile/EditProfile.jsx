import React, { useEffect, useRef, useState } from 'react'
import Modal from '../../../utils/Modal'
import { RxCross2 } from "react-icons/rx";
import { toast } from 'react-toastify';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../../fireBase/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { Blog } from '../../../Context/Context';

const EditProfile = ({editModal, setEditModal, getUserData}) => {
    
    const imgRef = useRef(null)
    
    const [imgUrl, setImgUrl] = useState("")
    const [form, setForm] = useState({
        username : "",
        userImg : "",
        bio : ""
    })
    
    const openFile = () =>{
        imgRef.current.click();
    }
    const {allUsers} = Blog()
    const {currentUser} = Blog()    
    const [loading , setLoading] = useState(false)
    
    // const getUserData = allUsers.find((user) => user.id === currentUser?.uid)
    // checking whether data is present in the database
    useEffect(()=>{
        if(getUserData)
        {
        setForm(getUserData);
    }
    else{
        setForm(
            {
                username : "",
                bio : "",
                userImg : ""
            }
        )
    }
   }, [getUserData])
    

    

    const saveForm = async () =>{
        // console.log(form)
        if(form["username"] === "" || form['bio'] === "")
        {
            toast.error("All feilds are necessary")
            return 
        }

        setLoading(true)
        const storageRef = ref(storage, `image/${form.userImg.name}`)
        await uploadBytes(storageRef, form?.userImg);

        const imageUrl= await getDownloadURL(storageRef);

        try{
           const docRef = doc(db, "users", getUserData?.userId);
           await updateDoc(docRef, {
            bio : form.bio,
            username : form.username,
            userImg : imgUrl ? imageUrl : form.userImg,
            userId : getUserData?.userId,
           })
           {setLoading(false)}
           setEditModal(false)
           toast.success('successfully updated profile')
        }
        catch(err)
        {
           toast.error(err)
        }
    }


  return (
    <>
    <Modal modal={editModal} setModal={setEditModal}>
    </Modal>
        <div className='fixed center w-[95%] md:w-[45rem] bg-white rounded-2xl mx-auto shadows z-20 p-5'>
           {/* header */}
           <div className='flex items-center justify-between  '>
            <h2 className='font-medium text-2xl text-gray-600 '>Profile information</h2>
            <button onClick={()=>setEditModal(false)}><RxCross2/></button>
           </div>
           {/* **************************** body **************************** */}
           <section className='mt-5 '>
            {/* <p className='text-center'>Profile image</p> */}
            <div className='flex gap-10 '>

                {/* ********************************* image ******************************* */}
                <div className='w-10 flex flex-col gap-4 items-center'>
                    <img src={imgUrl?imgUrl: form.userImg ? form.userImg: "/profile2.png"} alt="" className='w-10 h-10 object-cover rounded-full border-2 border-gray-400'/>
                    <p className='text-center text-xs'>Profile image</p>
                    <input onChange={
                        (e)=>{setImgUrl(URL.createObjectURL(e.target.files[0]));
                         setForm({...form, userImg:e.target.files[0]})
                        }} accept='image/jpg, image/png, image/jpeg' ref={imgRef} type="file"  hidden/>
                </div>
                {/* upload buttons */}
                <div className='flex flex-col gap-4'>
                  <div className='flex gap-4 '>
                    <button onClick={openFile} className='px-3 py-1  text-blue-700 border-2 border-blue-700 rounded-md'>Update</button>
                    <button className='px-3 py-1  text-red-700 border-2 border-red-700 rounded-md'>Remove</button>
                  </div>
                  <p>
                    You can upload png, jpg, jpeg files.
                  </p>
                </div>

            </div>
           </section>
           {/* footer */}
           <section className='mt-5 flex flex-col gap-8'>
            <div className=''>
                {/* ************************* username ************************* */}
            <label htmlFor="" className='block'>Updated Username</label>
            <input className='outline-none bg-gray-100 w-full p-2 rounded-lg focus:border focus:border-blue-500'  type="text" placeholder='Username' maxLength={50}
            value={form.username}
            onChange={
                (e)=>{
                 setForm({...form, username:e.target.value})
                }}
            />
            </div>

            <div>
            <label htmlFor="" className='block'>Tell something about yourself</label>
            <input className='outline-none bg-gray-100 w-full p-2 rounded-lg focus:border focus:border-blue-500'  type="text" placeholder='Write here...'
             value={form.bio}
            onChange={
                (e)=>{
                 setForm({...form, bio:e.target.value})
                }}
            />
            </div>
           </section>
           <div className='flex gap-5 flex-row-reverse mt-8'>
            <button onClick={()=>saveForm()} className='bg-green-800 text-white rounded-full py-2 px-5' >Save</button>
            <button onClick={()=>setEditModal(false)} className='bg-gray-600 text-white rounded-full py-2 px-5'>Cancel</button>
           </div>
        </div>
    </>
  )
}

export default EditProfile