import React from 'react'

export default function Ctas() {
  return (
    <div className='bg-[color:var(--third-green-color)] py-28 w-full'>
      <div className='flex gap-4 w-[1280px] mx-auto justify-between'>
        <div className='w-1/3 relative flex items-center justify-center'>
          <img className='z-0' src='./images/cta.png' alt='cta' />
          <button className=' absolute z-10 w-[200px] h-[50px] bg-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl'>Organic Juice</button>
        </div>
        <div className='w-1/3 relative flex items-center justify-center'>
          <img className='z-0' src='./images/cta2.png' alt='cta' />
          <button className='absolute z-10 w-[200px] h-[50px] bg-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl'>Organic Foods</button>
        </div>
        <div className='w-1/3 relative flex items-center justify-center'>
          <img className='z-0' src='./images/cta3.png' alt='cta' />
          <button className='absolute z-10 w-[200px] h-[50px] bg-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl'>Nuts and Cookies</button>
        </div>
      </div>
    </div>
  )
}
