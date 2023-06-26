import { roboto } from "./styles/fonts"
import { yellowtail } from "./styles/fonts"
import Styles from "@/components/styles.module.css";
import { FaArrowCircleRight } from "react-icons/fa"

export default function banner() {
  return (
    <div className='relative w-full'>
        <img className='object-cover relative w-full' src='./static/images/Banner.jpg' alt='banner' />
        <div className='absolute flex flex-col top-0 h-full justify-center w-full px-24 mx-auto'>
            <div className={`${yellowtail.className} w-[1280px] mx-auto`}>
                <p className="yellowtail text-xl pl-20 text-green-300">100% Natural Foods</p>
            </div>
            <div className={`${roboto.className} w-[1280px] mx-auto`}>
                <h2 className="font-bold w-[460px] leading-tight text-6xl pl-20">Choose the best healthier wayof life</h2>
            </div>

            <div className="pl-20 mt-10 w-[1280px] mx-auto">
              <button className={`${Styles.secondarybtn} hover:shadow-lg`}>Explore Now <FaArrowCircleRight /></button>
            </div>
        </div>
    </div>
  )
}
