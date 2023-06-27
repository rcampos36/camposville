import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { yellowtail, roboto } from './styles/fonts';
import Link from 'next/link';

export default function Footer() {
  return (
    <div>
      <div className='w-[1080px] mx-auto flex items-start pb-10 gap-20'>
        <div className="flex flex-col items-end justify-end gap-3 flex-1">
          <h4 className={`${roboto.className} font-bold text-xl`}>Contact Us</h4>
          <div className="flex items-end flex-col">
            <p className={`${roboto.className} font-bold text-sm`}>Email</p>
            <p className={`${roboto.className} text-xs`}>info@camposville.com</p>
          </div>
          <div className="flex items-end flex-col">
            <p className={`${roboto.className} font-bold text-sm`}>Phone</p>
            <p className={`${roboto.className} text-xs`}>609-7867</p>
          </div>
          <div className="flex items-end flex-col">
            <p className={`${roboto.className} font-bold text-sm`}>Address</p>
            <p className={`${roboto.className} text-xs`}>Playa Las Flores, San Miguel</p>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-start gap-4 flex-1 border-l border-r px-10 h-48">
          <div className="flex items-center flex-row-reverse gap-2">
            <h4 className='font-bold flex flex-col justify-center items-center text-xl'>Camposville</h4>
            <img className='w-[26px]' src='./static/images/Logo.png' alt='logo'/>
          </div>
          <p className='text-center text-sm w-[95%]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing </p>
          <div className="flex items-center gap-3">
            <p><FaInstagram /></p>
            <p><FaFacebookF /></p>
            <p><FaTwitter /></p>
            <p><FaPinterestP /></p>
          </div>
        </div>
        <div className="flex flex-1 items-end">
          <div className=''>
            <ul className='flex gap-2 font-bold flex-col text-sm'>
              <Link className="" href="/">Home</Link>
              <Link className="" href="/about">About</Link>
              <Link className="" href="/shop">Shop</Link>
              <Link className="" href="/services">Services</Link>
              <Link className="" href="/news">News</Link>
              <Link className="" href="/contact">Contact</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t pb-10 pt-2 flex items-center justify-center">
        <p className="text-xs">Copyright © Camposville | Designed by Media703 Templates - Powered by Media703</p>
      </div>
    </div>
  )
}
