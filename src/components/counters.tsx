import React from 'react'

export default function Counters() {
  return (
    <div className='flex gap-4'>
      <div className='flex flex-col gap-0.5'>
        <h5 className='text-xl'>125</h5>
        <span className='text-sm text-gray-500'>Subscriptions</span>
      </div>

      <div className='flex flex-col gap-0.5'>
        <h5 className='text-xl'>1285</h5>
        <span className='text-sm text-gray-500'>subscribers</span>
      </div>

      <div className='flex flex-col gap-0.5'>
        <h5 className='text-xl'>31</h5>
        <span className='text-sm text-gray-500'>Posts</span>
      </div>
    </div>
  )
}
