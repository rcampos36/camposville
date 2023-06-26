import React from 'react'
import { yellowtail, roboto } from './styles/fonts'

export default function Testimonials() {
  return (
    <div className='flex '>
      <div className=''>
        <img src='./static/images/testimonialsPhoto.png' alt='testimonials' />
      </div>
      <div className='w-1/2 flex flex-col gap-5 justify-center items-center'>
      <p className={`${yellowtail.className} yellowtail text-2xl font-normal`}>Testimonials</p>
      <h4 className={`${roboto.className} font-bold text-3xl`}>What Our Customer are Saying?</h4>
      <img src='./static/images/testi-photo.png' alt='client' />
      <p className='text-center text-gray-400 text-sm'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
      <h5 className={`${roboto.className} font-bold text-lg`}>Sara Taylor</h5>
      </div>
      <div className='flex justify-end'>
      <img className='object-cover' src='./static/images/testimonialsPhoto2.png' alt='testimonials' />
      </div>
    </div>
  )
}
