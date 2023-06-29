import { yellowtail, roboto } from './styles/fonts';
import { FaRegDotCircle } from "react-icons/fa";
import WhyIconOne from "@/public/static/images/why-Icon.png";
import WhyIconTwo from "@/public/static/images/why-Icon2.png";
import WhyIconThree from "@/public/static/images/why-Icon3.png";
import WhyIconFour from "@/public/static/images/why-Icon4.png";
import Image from 'next/image';
import WhyPhoto from "@/public/static/images/why-Photo.jpg";

export default function Whyus() {
  return (
    <div className='w-full bg-[color:var(--secondary-gray-color)] py-20'>
        <div className='w-[1080px] mx-auto flex gap-10 mb-20 max-sm:w-full max-sm:flex-col-reverse max-sm:px-4'>
            <div className='flex flex-col gap-5 w-1/2 max-sm:w-full'>
                <p className={`${yellowtail.className} yellowtail text-2xl font-normal`}>Why Choose Us?</p>
                <h4 className={`${roboto.className} font-bold text-4xl`}>We do not buy from the open market & traders.</h4>
                <p className='text-sm text-gray-400'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
                <div className='flex justify-start'>
                    <p className={`${roboto.className} font-bold text-xs bg-[color:var(--primary-gray-color)] py-2 px-3 rounded-full flex items-center gap-2`}><FaRegDotCircle className='text-[color:var(--primary-green-color)] font-bold' />100% Natural Product</p>
                </div>
                <p className='text-sm text-gray-400'>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                <div className='flex justify-start'>
                    <p className={`${roboto.className} font-bold text-xs bg-[color:var(--primary-gray-color)] py-2 px-3 rounded-full flex items-center gap-2`}><FaRegDotCircle className='text-[color:var(--primary-green-color)] font-bold' />Increases resistance</p>
                </div>
                <p className='text-sm text-gray-400'>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
            </div>
            <div className='w-1/2 rounded-lg max-sm:w-full'>
                <Image className='rounded-3xl' src={WhyPhoto} alt='why photo' />
            </div>
        </div>
        <div className='w-[1080px] mx-auto flex gap-10 max-sm:w-full max-sm:px-4 max-sm:flex-col'>
            <div className='bg-white rounded-3xl flex flex-col gap-2 w-1/4 max-sm:w-full justify-center items-center text-center py-10 px-7'>
                <Image className='w-[95px] h-[95px]' src={WhyIconOne} alt='why icon' />
                <p className={`${roboto.className} font-bold text-sm`}>Return Policy</p>
                <p className='text-sm'>Simply dummy text of the printintypesetting industry.</p>
            </div>
            <div className='bg-white rounded-3xl flex flex-col gap-2 w-1/4 max-sm:w-full justify-center items-center text-center py-10 px-7'>
                <Image className='w-[95px] h-[95px]' src={WhyIconTwo} alt='why icon' />
                <p className={`${roboto.className} font-bold text-sm`}>100% Fresh</p>
                <p className='text-sm'>Simply dummy text of the printintypesetting industry.</p>
            </div>
            <div className='bg-white rounded-3xl flex flex-col gap-2 w-1/4 max-sm:w-full justify-center items-center text-center py-10 px-7'>
                <Image className='w-[95px] h-[95px]' src={WhyIconThree} alt='why icon' />
                <p className={`${roboto.className} font-bold text-sm`}>Support 24/7</p>
                <p className='text-sm'>Simply dummy text of the printintypesetting industry.</p>
            </div>
            <div className='bg-white rounded-3xl flex flex-col gap-2 w-1/4 max-sm:w-full justify-center items-center text-center py-10 px-7'>
                <Image className='w-[95px] h-[95px]' src={WhyIconFour} alt='why icon' />
                <p className={`${roboto.className} font-bold text-sm`}>Secured Payment</p>
                <p className='text-sm'>Simply dummy text of the printintypesetting industry.</p>
            </div>
        </div>
    </div>
  )
}
