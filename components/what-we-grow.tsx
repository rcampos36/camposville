import { yellowtail, roboto } from './styles/fonts';
import Styles from "@/components/styles.module.css";
import { FaArrowCircleRight } from "react-icons/fa"

export default function WhatWeGrow() {
  return (
    <div className="w-[1080px] mx-auto my-20">
        <div className="flex flex-col items-center justify-center">
            <p className={`${yellowtail.className} yellowtail text-2xl font-normal`}>What we grow</p>
            <h4 className={`${roboto.className} font-bold text-4xl w-2/5 text-center`}>Better Agriculture for Better Future</h4>
        </div>
        <div className='flex gap-5 items-center'>
            <div className='flex flex-col gap-2 w-1/3'>
                <div className='flex flex-col justify-end items-end text-right gap-1'>
                    <img className='w-[40px]' src='./images/dairy.png' alt='dairy' />
                    <h4 className={`${roboto.className} font-bold text-sm`}>Dairy Products</h4>
                    <p className='text-xs text-gray-400'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                </div>
                <div className='flex flex-col justify-end items-end text-right gap-1'>
                    <img className='w-[40px]' src='./images/store.png' alt='store' />
                    <h4 className={`${roboto.className} font-bold text-sm`}>Store Services</h4>
                    <p className='text-xs text-gray-400'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                </div>
                <div className='flex flex-col justify-end items-end text-right gap-1'>
                    <img className='w-[40px]' src='./images/delivery.png' alt='delivery' />
                    <h4 className={`${roboto.className} font-bold text-sm`}>Delivery Services</h4>
                    <p className='text-xs text-gray-400'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                </div>
            </div>
            <div className='w-1/2'>
                <img src='/images/bag-image.png' alt='what we grow' />
            </div>
            <div className='flex flex-col gap-2 w-1/3'>
            <div className='flex flex-col justify-start items-start text-left gap-1'>
                    <img className='w-[40px]' src='./images/dairy.png' alt='dairy' />
                    <h4 className={`${roboto.className} font-bold text-sm`}>Dairy Products</h4>
                    <p className='text-xs text-gray-400'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                </div>
                <div className='flex flex-col justify-start items-start text-left gap-1'>
                    <img className='w-[40px]' src='./images/store.png' alt='store' />
                    <h4 className={`${roboto.className} font-bold text-sm`}>Store Services</h4>
                    <p className='text-xs text-gray-400'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                </div>
                <div className='flex flex-col justify-start items-start text-left gap-1'>
                    <img className='w-[40px]' src='./images/delivery.png' alt='delivery' />
                    <h4 className={`${roboto.className} font-bold text-sm`}>Delivery Services</h4>
                    <p className='text-xs text-gray-400'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                </div>
            </div>
        </div>

        <div className='flex items-center justify-center'>
        <button type="button" className={`${Styles.outlinebtn} flex items-center gap-2 hover:shadow-lg`}>Explore More <FaArrowCircleRight /></button>
        </div>
    </div>
  )
}
