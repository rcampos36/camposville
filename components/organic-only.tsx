import { yellowtail, roboto } from './styles/fonts';
import { FaPlayCircle } from "react-icons/fa";
import Image from 'next/image';
import Organic from "@/public/static/images/OrganicOnly.jpg";

export default function OrganicOnly() {
  return (
    <div className='relative w-full pb-20'>
        <Image src={Organic} alt='organic' />
        <div className='absolute top-0 left-0 w-full mx-auto flex flex-col items-center gap-3 py-20 max-sm:py-4 max-sm:px-4'>
            <p className={`${yellowtail.className} yellowtail text-2xl font-normal`}>Organic Only</p>
            <h4 className={`${roboto.className} font-bold text-4xl max-sm:text-3xl`}>Everyday Fresh & Clean</h4>
            <p className="text-sm text-gray-400 max-sm:text-gray-700 w-1/2 max-sm:w-full text-center">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the </p>
            <p className='text-6xl max-sm:text-4xl max-sm:mt-0 mt-10'><FaPlayCircle className='text-[color:var(--primary-green-color)]'/></p>
        </div>
    </div>
  )
}
