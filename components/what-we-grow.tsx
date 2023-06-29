import { yellowtail, roboto } from './styles/fonts';
import Styles from "@/components/styles.module.css";
import { FaArrowCircleRight } from "react-icons/fa"
import Image from 'next/image';
import Dairy from "@/public/static/images/dairy.png";
import Store from "@/public/static/images/store.png";
import Delivery from "@/public/static/images/delivery.png";
import Agriculture from "@/public/static/images/agriculture.png";
import OrganicProducts from "@/public/static/images/organic.png";
import FreshVegetables from "@/public/static/images/fresh-vegetables.png";
import BagImage from "@/public/static/images/bag-image.png";

export default function WhatWeGrow() {
  return (
    <div className="w-[1080px] mx-auto my-20 max-sm:w-full px-4">
        <div className="flex flex-col items-center justify-center">
            <p className={`${yellowtail.className} yellowtail text-2xl font-normal`}>What we grow</p>
            <h4 className={`${roboto.className} font-bold text-4xl w-2/5 max-sm:w-full max-sm:mb-10 text-center`}>Better Agriculture for Better Future</h4>
        </div>
        <div className='flex gap-5 items-center max-sm:flex-col'>
            <div className='flex flex-col gap-2 w-1/3 max-sm:w-full'>
                <div className='flex flex-col justify-end items-end text-right gap-1 max-sm:text-left max-sm:items-start'>
                    <Image className='w-[40px]' src={Dairy} alt='dairy' />
                    <h4 className={`${roboto.className} font-bold text-sm`}>Dairy Products</h4>
                    <p className='text-xs text-gray-400'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                </div>
                <div className='flex flex-col justify-end items-end text-right gap-1 max-sm:text-left max-sm:items-start'>
                    <Image className='w-[40px]' src={Store} alt='store' />
                    <h4 className={`${roboto.className} font-bold text-sm`}>Store Services</h4>
                    <p className='text-xs text-gray-400'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                </div>
                <div className='flex flex-col justify-end items-end text-right gap-1 max-sm:text-left max-sm:items-start'>
                    <Image className='w-[40px]' src={Delivery} alt='delivery' />
                    <h4 className={`${roboto.className} font-bold text-sm`}>Delivery Services</h4>
                    <p className='text-xs text-gray-400'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                </div>
            </div>
            <div className='w-1/2 max-sm:w-full'>
                <Image src={BagImage} alt='what we grow' />
            </div>
            <div className='flex flex-col gap-2 w-1/3 max-sm:w-full max-sm:mb-5'>
                <div className='flex flex-col justify-start items-start text-left gap-1'>
                    <Image className='w-[40px]' src={Agriculture} alt='agriculture' />
                    <h4 className={`${roboto.className} font-bold text-sm`}>Agriculture</h4>
                    <p className='text-xs text-gray-400'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                </div>
                <div className='flex flex-col justify-start items-start text-left gap-1'>
                    <Image className='w-[40px]' src={OrganicProducts} alt='Organic Products' />
                    <h4 className={`${roboto.className} font-bold text-sm`}>Organic Products</h4>
                    <p className='text-xs text-gray-400'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                </div>
                <div className='flex flex-col justify-start items-start text-left gap-1'>
                    <Image className='w-[40px]' src={FreshVegetables} alt='fresh vegetables' />
                    <h4 className={`${roboto.className} font-bold text-sm`}>Fresh Vegetables</h4>
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
