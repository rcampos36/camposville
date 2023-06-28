import { roboto } from "./styles/fonts"
import { yellowtail } from "./styles/fonts"
import Styles from "@/components/styles.module.css";
import { FaArrowCircleRight } from "react-icons/fa";
import HomeBanner from "@/public/static/images/Banner.jpg";
import Image from "next/image";

export default function banner() {
  return (
    <div className='relative w-full'>
        <Image className='object-cover relative w-full' src={HomeBanner} alt='banner' />
        <div className='absolute flex flex-col top-0 h-full justify-center w-full px-24 max-sm:pl-2 mx-auto'>
            <div className={`${yellowtail.className} w-[1280px] mx-auto`}>
                <p className="yellowtail text-xl pl-20 max-sm:pl-5 text-green-300">100% Natural Foods</p>
            </div>
            <div className={`${roboto.className} w-[1280px] mx-auto`}>
                <h2 className="banner-heading font-bold w-[460px] leading-tight text-6xl max-sm:text-2xl pl-20 max-sm:pl-5 max-sm:w-[260px]">Choose the best healthier way of life</h2>
            </div>

            <div className="pl-20 max-sm:pl-5 mt-10 max-sm:mt-4 w-[1280px] mx-auto">
              <button className={`${Styles.secondarybtn} hover:shadow-lg`}>Explore Now <FaArrowCircleRight /></button>
            </div>
        </div>
    </div>
  )
}
