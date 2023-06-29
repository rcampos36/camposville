import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { yellowtail, roboto } from './styles/fonts';
import Link from 'next/link';

export default function Footer() {
  return (
    <div>
      <div className='w-[1080px] mx-auto flex items-start pb-10 gap-20 max-sm:w-full max-sm:flex-col max-sm:px-5'>
        <div className="flex flex-col items-end justify-end gap-3 flex-1 max-sm:w-full max-sm:justify-start max-sm:items-start">
          <h4 className={`${roboto.className} font-bold text-xl`}>Contact Us</h4>
          <div className="flex items-end max-sm:items-start flex-col">
            <p className={`${roboto.className} font-bold text-sm`}>Email</p>
            <p className={`${roboto.className} text-xs`}>info@camposville.com</p>
          </div>
          <div className="flex items-end max-sm:items-start flex-col">
            <p className={`${roboto.className} font-bold text-sm`}>Phone</p>
            <p className={`${roboto.className} text-xs`}>609-7867</p>
          </div>
          <div className="flex items-end max-sm:items-start flex-col">
            <p className={`${roboto.className} font-bold text-sm`}>Address</p>
            <p className={`${roboto.className} text-xs`}>Playa Las Flores, San Miguel</p>
          </div>
        </div>
        <div className=" flex flex-col items-center max-sm:items-start justify-start gap-4 flex-1 border-l max-sm:border-0 border-r px-10 max-sm:px-0 h-48">
          <div className="flex items-center flex-row-reverse gap-2">
            <h4 className='font-bold flex flex-col justify-center items-center text-xl'>Camposville</h4>
            <img className='w-[26px]' src='./static/images/Logo.png' alt='logo'/>
          </div>
          <p className='text-center max-sm:text-left text-sm w-[95%]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing </p>
          <div className="flex items-center gap-3">
            <p className="text-md rounded-full bg-[color:var(--secondary-green-color)] p-2"><FaInstagram /></p>
            <p className="text-md rounded-full bg-[color:var(--secondary-green-color)] p-2"><FaFacebookF /></p>
            <p className="text-md rounded-full bg-[color:var(--secondary-green-color)] p-2"><FaTwitter /></p>
            <p className="text-md rounded-full bg-[color:var(--secondary-green-color)] p-2"><FaPinterestP /></p>
          </div>
        </div>
        <div className="flex flex-1 items-end max-sm:hidden">
          <div className=''>
            <h4 className={`${roboto.className} font-bold text-xl mb-2`}>Menu</h4>
            <ul className='flex gap-1 flex-col text-sm'>
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
      <div className="border-t pb-10 pt-2 flex items-center justify-center max-sm:px-4 max-sm:w-full">
        <p className="text-xs">Copyright © <strong>Camposville</strong> | Designed by <strong>Media703</strong> Templates - Powered by <strong>Media703</strong></p>
      </div>
    </div>
  )
}
