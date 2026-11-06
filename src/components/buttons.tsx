import React from 'react'

export default function Buttons() {
  return (
    <div className='flex gap-3.5'>
      <button className='p-2 w-20 bg-transparent border-gray-800 text-gray-800 border-2 transition-colors rounded-2xl hover:bg-amber-50 hover:border-transparent'>Message</button>
      <button className='p-2 w-20 bg-amber-50 hover:border-none text-gray-800 border-2 transition-colors rounded-2xl hover:bg-transparent hover:border-gray-800'>Subscripe</button>
    </div>
  )
}
