import React from 'react'

const Input = ({title, type}) => {
  return (
    <div>
        <input
            type={type}
            placeholder={title}
            name={title}
            className="rounded-lg w-full p-2 border border-gray-300 focus:border-blue-600 focus:outline-none"
          />
    </div>
  )
}

export default Input