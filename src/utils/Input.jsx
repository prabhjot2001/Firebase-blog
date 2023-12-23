import React from 'react'

const Input = ({title, type, form ,setForm}) => {
  const handleChange = (e) =>{
      setForm({...form, [e.target.name] : e.target.value})
  }
  return (
    <div>
        <input
            type={type}
            placeholder={title}
            name={title}
            className="rounded-lg w-full p-2 border border-gray-300 focus:border-blue-600 focus:outline-none"
            onChange={handleChange}
          />
    </div>
  )
}

export default Input