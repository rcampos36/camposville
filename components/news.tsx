import { yellowtail, roboto } from './styles/fonts';
import Styles from "@/components/styles.module.css";
import { FaArrowCircleRight, FaUserAlt } from "react-icons/fa"

export default function News() {
  return (
    <div className='w-[1080px] mx-auto my-20'>
      <p className={`${yellowtail.className} yellowtail text-2xl font-normal`}>News</p>
      <div className='flex items-end justify-between mb-10'>
        <h4 className={`${roboto.className} font-bold text-4xl w-1/2`}>Discover weekly content about organic food, & more</h4>
        <button type="button"
          className={`${Styles.outlinebtn} hover:shadow-lg`}>
          More News <FaArrowCircleRight />
        </button>
      </div>
      <div className='flex gap-5 justify-between'>
        <div className='relative'>
          <img src='./static/images/news.png' alt='news' />
          <div className='absolute top-5 left-5 bg-white rounded-full items-center p-2'>
            <p className={`${roboto.className} font-bold text-sm flex flex-col items-center w-10 h-10`}>25 <span>Nov</span></p>
          </div>
          <div className='w-[90%] mx-auto absolute -bottom-10 left-0 right-0 flex flex-col bg-white rounded-2xl p-10 gap-3 shadow-lg'>
            <p className={`${roboto.className} flex items-center gap-2 font-bold text-sm text-gray-500`}>< FaUserAlt className='text-[color:var(--primary-yellow-color)]' />By Rachi Card</p>
            <h5 className={`${roboto.className} font-bold text-base`}>The Benefits of Vitamin D & How to Get It</h5>
            <p className='text-sm text-gray-400 w-[80%]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            <div className='flex justify-start'><button type="button" className={`${Styles.secondarybtn} hover:shadow-lg`}>Read More <FaArrowCircleRight /></button></div>
          </div>
        </div>
        <div className='relative'>
          <img src='./static/images/news2.png' alt='news' />
          <div className='absolute top-5 left-5 bg-white rounded-full items-center p-2'>
            <p className={`${roboto.className} font-bold text-sm flex flex-col items-center w-10 h-10`}>25 <span>Nov</span></p>
          </div>
          <div className='w-[90%] mx-auto absolute -bottom-10 left-0 right-0 flex flex-col bg-white rounded-2xl p-10 gap-3 shadow-lg'>
            <p className={`${roboto.className} flex items-center gap-2 font-bold text-sm text-gray-500`}>< FaUserAlt className='text-[color:var(--primary-yellow-color)]' />By Rachi Card</p>
            <h5 className={`${roboto.className} font-bold text-base`}>Our Favourite Summertime Tommetoes</h5>
            <p className='text-sm text-gray-400 w-[80%]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            <div className='flex justify-start'><button type="button" className={`${Styles.secondarybtn} hover:shadow-lg`}>Read More <FaArrowCircleRight /></button></div>
          </div>
        </div>
      </div>
    </div>
  )
}
