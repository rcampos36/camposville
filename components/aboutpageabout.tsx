import React from 'react'
import { yellowtail, roboto } from './styles/fonts'
import Styles from "@/components/styles.module.css";
import { FaArrowCircleRight } from "react-icons/fa"

export default function aboutus() {
  return (
    <div className='w-full py-20'>
        <div className='flex w-[1080px] mx-auto'>
            <div className='w-1/2'>
                <img className='object-cover' src='./static/images/about-image-2.png' alt='about photo' />
            </div>
            <div className='w-1/2 flex flex-col justify-center gap-2 pr-10'>
                <p className={`${yellowtail.className} yellowtail text-2xl font-normal`}>About Us</p>
                <h4 className={`${roboto.className} font-bold text-4xl`}>We do Creative Things for Success</h4>
                <p className='text-gray-400'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <div className='flex mt-2'>
                    <div className='flex items-center'>
                        <img className='w-[60px] h-[60px]' src='./static/images/icon.png' alt='icon' />
                        <div>
                            <h4 className={`${roboto.className} text-xl font-bold`}>Modern Agriculture Equipment</h4>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-[60px] h-[60px]' src='./static/images/icon2.png' alt='icon' />
                        <div>
                            <h4 className={`${roboto.className} text-xl font-bold`}>No growth hormones are used</h4>
                        </div>
                    </div>
                </div>
                <div className='flex justify-start mt-4'>
                    <button type="button" className={`${Styles.primarybutton} flex items-center gap-2 hover:shadow-lg`}>Explore More <FaArrowCircleRight /></button>
                </div>
            </div>
        </div>
    </div>
  )
}
