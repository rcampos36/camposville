import Image from "next/image";
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP, FaMapMarkerAlt } from "react-icons/fa";
import ContactImage from "@/public/static/images/Contact-image.png";
import ContactImageTwo from "@/public/static/images/Contact-image2.png";
import MessageIcon from "@/public/static/images/messageIcon.png";
import CallIcon from "@/public/static/images/call.png";
import { yellowtail, roboto } from './styles/fonts';

export default function WorkTogether() {
  return (
    <div className='w-[1080px] mx-auto my-20'>
      <div className="flex gap-5">
        <Image className="w-[400px]" src={ContactImage} alt="contact image" />
        <div className="flex flex-col gap-4">
          <h4 className={`${roboto.className} font-bold text-2xl`}>We'd love to talk about how we can work together.</h4>
          <p className="text-sm">Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
          </p>
          <div className="flex mb-2 gap-3">
            <Image className="w-12" src={MessageIcon} alt="message" />
            <div className="flex flex-col justify-center">
              <h4 className={`${roboto.className} font-bold text-sm`}>Massege</h4>
              <p className="text-xs">info@camposville.com</p>
            </div>
          </div>
          <div className="flex mb-2 gap-3">
            <Image className="w-12" src={CallIcon} alt="call" />
            <div className="flex flex-col justify-center">
              <h4 className={`${roboto.className} font-bold text-sm`}>Contact Us</h4>
              <p className="text-xs">+503-609-7867</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-md rounded-full bg-[color:var(--secondary-green-color)] p-2"><FaInstagram /></p>
            <p className="text-md rounded-full bg-[color:var(--secondary-green-color)] p-2"><FaFacebookF /></p>
            <p className="text-md rounded-full bg-[color:var(--secondary-green-color)] p-2"><FaTwitter /></p>
            <p className="text-md rounded-full bg-[color:var(--secondary-green-color)] p-2"><FaPinterestP /></p>
          </div>
        </div>
      </div>
      <div className="my-20 relative">
        <Image src={ContactImageTwo} alt="contact image" />
        <div className="absolute top-0 right-60 w-full h-full flex items-center justify-end">
          <div className="bg-white p-10 rounded-xl w-[300px] flex flex-col gap-2">
            <p className={`${yellowtail.className} yellowtail font-bold text-lg`}>Location</p>
            <h4 className={`${roboto.className} font-bold text-xl`}>Our Farm</h4>
            <p className="text-xs">Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using.</p>
            <div className="flex gap-1">
              <FaMapMarkerAlt className="text-lg text-[color:var(--primary-green-color)]" />
              <div>
                <h4 className={`${roboto.className} font-bold text-sm`}>Playa Las Flores, ESA</h4>
                <p className="text-xs">2 Calle Conchaguita</p>
                <p className="text-xs">San Miguel 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
