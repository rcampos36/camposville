import React from 'react';
import { yellowtail, roboto } from './styles/fonts';
import Image from 'next/image';
import Spices from "@/public/static/images/spices.png";
import Seeds from "@/public/static/images/seeds.png";
import Fruits from "@/public/static/images/fruits.png";
import Vegetables from "@/public/static/images/vegetables.png";

export default function Offers() {
  return (
    <div className='bg-[color:var(--primary-blue-color)] mt-20'>
        <div className='w-[1080px] mx-auto text-white flex flex-col items-center py-20 gap-5'>
            <p className={`${yellowtail.className} yellowtail text-xl font-normal`}>Our Services</p>
            <h4 className={`${roboto.className} font-bold text-3xl`}>What We Offer For You</h4>
            <div className='flex gap-4'>
                <div className='w-1/4 flex flex-col items-center gap-2'>
                    <Image src={Spices} alt='offers' />
                    <p>Spices</p>
                </div>
                <div className='w-1/4 flex flex-col items-center gap-2'>
                    <Image src={Seeds} alt='offers' />
                    <p>Seeds</p>
                </div>
                <div className='w-1/4 flex flex-col items-center gap-2'>
                    <Image src={Fruits} alt='offers' />
                    <p>Fruits</p>
                </div>
                <div className='w-1/4 flex flex-col items-center gap-2'>
                    <Image src={Vegetables} alt='offers' />
                    <p>Vegetables</p>
                </div>
            </div>
        </div>
    </div>
  )
}
