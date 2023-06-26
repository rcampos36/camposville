import React from 'react';
import { yellowtail, roboto } from './styles/fonts'

export default function Offers() {
  return (
    <div className='bg-[color:var(--primary-blue-color)] mt-20'>
        <div className='w-[1080px] mx-auto text-white flex flex-col items-center py-20 gap-5'>
            <p className={`${yellowtail.className} yellowtail text-xl font-normal`}>Our Services</p>
            <h4 className={`${roboto.className} font-bold text-3xl`}>What We Offer For You</h4>
            <div className='flex gap-4'>
                <div className='w-1/4 flex flex-col items-center gap-2'>
                    <img src='/images/spices.png' alt='offers' />
                    <p>Spices</p>
                </div>
                <div className='w-1/4 flex flex-col items-center gap-2'>
                    <img src='/images/seeds.png' alt='offers' />
                    <p>Seeds</p>
                </div>
                <div className='w-1/4 flex flex-col items-center gap-2'>
                    <img src='/images/fruits.png' alt='offers' />
                    <p>Fruits</p>
                </div>
                <div className='w-1/4 flex flex-col items-center gap-2'>
                    <img src='/images/vegetables.png' alt='offers' />
                    <p>Vegetables</p>
                </div>
            </div>
        </div>
    </div>
  )
}
