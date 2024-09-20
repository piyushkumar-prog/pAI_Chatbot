import React from 'react'

export default function Header() {
    return (
      <>
      <div className="flex justify-between text-white py-2">
      <div>
         <p className="text-4xl md:text-6xl md:ml-16 ml-6 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Hello</p>
         <p className="text-slate-600 text-2xl ml-6 md:text-4xl md:ml-16">How can i help you?</p>
      </div>
      </div>
   </>
    )
  }