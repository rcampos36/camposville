import { yellowtail, roboto } from './styles/fonts';
import Image from 'next/image';
import NewsletterBG from "@/public/static/images/newsletter-background.png";

export default function Newsletter() {
  return (
    <div className='relative w-[1080px] mx-auto py-20 max-sm:my-10 max-sm:py-1 max-sm:w-full max-sm:px-4'>
      <Image className='object-cover' src={NewsletterBG} alt='nesletter' />
      <div className='absolute top-0 max-sm:z-10 gap-5 max-sm:gap-0 items-center max-sm:h-8 h-full w-full flex max-sm:flex-col justify-between p-10 max-sm:p-4'>
        <div className={`${roboto.className} font-bold text-4xl max-sm:text-lg max-sm:hidden max-sm:w-full w-2/5 text-white`}>Subscribe to our Newsletter</div>
        <form className='flex gap-1 max-sm:justify-center ' action="/send-data-here" method="post">
          <input className='text-sm text-gray-200 rounded-xl px-3 w-[300px] max-sm:w-[200px] h-16' type="text" id="last" name="last" placeholder='your email address' />
          <button className='bg-[color:var(--primary-blue-color)] text-white py-3 px-4 rounded-xl' type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  )
}
