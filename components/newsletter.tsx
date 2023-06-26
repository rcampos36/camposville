import { yellowtail, roboto } from './styles/fonts';

export default function Newsletter() {
  return (
    <div className='relative my-10 w-[1080px] mx-auto py-20'>
      <img src='./images/newsletter-background.png' alt='nesletter' />
      <div className='absolute top-0 gap-5 items-center h-full w-full flex justify-between p-10'>
        <div className={`${roboto.className} font-bold text-4xl w-2/5 text-white`}>Subscribe to our Newsletter</div>
        <form className='flex gap-1' action="/send-data-here" method="post">
          <input className='text-sm text-gray-200 rounded-xl px-3 w-[300px] h-16' type="text" id="last" name="last" placeholder='your email address' />
          <button className='bg-[color:var(--primary-blue-color)] text-white py-3 px-4 rounded-xl' type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  )
}
