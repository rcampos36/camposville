import React from 'react'
import { yellowtail, roboto } from './styles/fonts'
import Styles from "@/components/styles.module.css";
import { FaArrowCircleRight } from "react-icons/fa";
import AboutPhoto from "@/public/static/images/AboutPhoto.png";
import IconOne from "@/public/static/images/Icon.png";
import IconTwo from "@/public/static/images/Icon2.png";

export default function aboutus() {
  return (
    <div className='bg-about-section w-full py-20 max-sm:px-5'>
        <div className='flex w-[1080px] mx-auto max-sm:flex-col max-sm:w-full'>
            <div className='w-1/2 max-sm:w-full'>
                <img className='object-cover' src={AboutPhoto.src} alt='about photo' />
            </div>
            <div className='w-1/2 max-sm:w-full flex flex-col justify-center gap-2'>
                <p className={`${yellowtail.className} yellowtail text-2xl font-normal`}>About Us</p>
                <h4 className={`${roboto.className} font-bold text-5xl max-sm:text-4xl`}>We Believe in Working Accredited Farmers</h4>
                <p className='text-gray-400'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <div className='flex flex-col gap-4 mt-4'>
                    <div className='flex gap-4'>
                        <img src={IconOne.src} alt='icon' />
                        <div>
                            <h4 className={`${roboto.className} text-xl font-bold`}>Organic Foods Only</h4>
                            <p className='text-gray-400 text-sm'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <img src={IconTwo.src} alt='icon' />
                        <div>
                            <h4 className={`${roboto.className} text-xl font-bold`}>Quality Standards</h4>
                            <p className='text-gray-400 text-sm'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-start mt-4'>
                    <button type="button" className={`${Styles.primarybutton} flex items-center gap-2 hover:shadow-lg`}>Shop Now <FaArrowCircleRight /></button>
                </div>
            </div>
        </div>
    </div>
  )
}
