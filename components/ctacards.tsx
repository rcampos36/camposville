import React from 'react'
import { roboto } from "./styles/fonts"
import { yellowtail } from "./styles/fonts"
import ImageOne from "@/public/static/images/Image.png";

export default function Ctacards() {
  return (
    <div className='flex gap-4 px-5 my-20 max-w-[1080px] mx-auto'>
      <div className='relative w-1/2'>
        <img className='' src={ImageOne.src} alt='image' />
        <div className='absolute pl-5 top-0 w-full h-full flex justify-center flex-col'> 
          <div className={yellowtail.className}>
            <p className='text-white'>Natural!!</p>
          </div>
          <div className={roboto.className}>
            <h4 className='text-white pr-5 w-1/2'>Get Garden Fresh Fruits</h4>
          </div>
        </div>
      </div>

      <div className='relative w-1/2'>
        <img className='' src='./static/images/image2.png' alt='image' />
        <div className='absolute pl-5 pt-20 top-0'> 
          <div className={yellowtail.className}>
            <p className='yellowtail text-white'>Offer!!</p>
          </div>
          <div className={roboto.className}>
            <h4 className='pr-5 w-[57%]'>Get 10% off on Vegetables</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
