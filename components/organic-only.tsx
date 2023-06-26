import { yellowtail, roboto } from './styles/fonts';
import { FaPlayCircle } from "react-icons/fa";

export default function OrganicOnly() {
  return (
    <div className='relative w-full'>
        <img src='./images/OrganicOnly.jpg' alt='organic' />
        <div className='absolute top-0 left-0 w-full mx-auto flex flex-col items-center gap-3 py-20'>
            <p className={`${yellowtail.className} yellowtail text-2xl font-normal`}>Organic Only</p>
            <h4 className={`${roboto.className} font-bold text-4xl`}>Everyday Fresh & Clean</h4>
            <p className="text-sm text-gray-400 w-1/2 text-center">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the </p>
            <p className='text-6xl mt-10'><FaPlayCircle className='text-[color:var(--primary-green-color)]'/></p>
        </div>
    </div>
  )
}
