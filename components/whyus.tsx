import { yellowtail, roboto } from './styles/fonts'
import { FaRegDotCircle } from "react-icons/fa"

export default function Whyus() {
  return (
    <div className='w-full bg-[color:var(--secondary-gray-color)] py-20'>
        <div className='w-[1080px] mx-auto flex gap-10 mb-20'>
            <div className='flex flex-col gap-5 w-1/2'>
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
            <div className='w-1/2 rounded-lg'>
                <img className='rounded-3xl' src='./static/images/why-Photo.jpg' alt='why photo' />
            </div>
        </div>
        <div className='w-[1080px] mx-auto flex gap-10'>
            <div className='bg-white rounded-3xl flex flex-col gap-2 w-1/4 justify-center items-center text-center py-10 px-7'>
                <img className='w-[95px] h-[95px]' src='./static/images/why-icon.png' alt='why icon' />
                <p className={`${roboto.className} font-bold text-sm`}>Return Policy</p>
                <p className='text-sm'>Simply dummy text of the printintypesetting industry.</p>
            </div>
            <div className='bg-white rounded-3xl flex flex-col gap-2 w-1/4 justify-center items-center text-center py-10 px-7'>
                <img className='w-[95px] h-[95px]' src='./static/images/why-icon2.png' alt='why icon' />
                <p className={`${roboto.className} font-bold text-sm`}>100% Fresh</p>
                <p className='text-sm'>Simply dummy text of the printintypesetting industry.</p>
            </div>
            <div className='bg-white rounded-3xl flex flex-col gap-2 w-1/4 justify-center items-center text-center py-10 px-7'>
                <img className='w-[95px] h-[95px]' src='./static/images/why-icon3.png' alt='why icon' />
                <p className={`${roboto.className} font-bold text-sm`}>Support 24/7</p>
                <p className='text-sm'>Simply dummy text of the printintypesetting industry.</p>
            </div>
            <div className='bg-white rounded-3xl flex flex-col gap-2 w-1/4 justify-center items-center text-center py-10 px-7'>
                <img className='w-[95px] h-[95px]' src='./static/images/why-icon4.png' alt='why icon' />
                <p className={`${roboto.className} font-bold text-sm`}>Secured Payment</p>
                <p className='text-sm'>Simply dummy text of the printintypesetting industry.</p>
            </div>
        </div>
    </div>
  )
}
