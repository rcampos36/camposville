import { yellowtail, roboto } from './styles/fonts';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import TeamOne from "@/public/static/images/Team.png";
import TeamTwo from "@/public/static/images/Team2.png";
import TeamThree from "@/public/static/images/Team3.png";
import TeamFour from "@/public/static/images/Team4.png";
import TeamFive from "@/public/static/images/Team5.png";
import TeamSix from "@/public/static/images/Team6.png";
import Image from 'next/image';

export default function OurTeam() {
  return (
    <div className='mt-20'>
        <div className='w-[1080px] flex flex-col gap-2 items-center mx-auto'>
            <p className={`${yellowtail.className} yellowtail text-2xl font-normal`}>Team</p>
            <h4 className={`${roboto.className} font-bold text-4xl`}>Our Organic Experts</h4>
            <p className='text-gray-400 text-center text-sm w-2/3'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            <div className='flex gap-2 justify-between mt-5'>
                <div className='w-1/3' >
                    <Image src={TeamOne} alt='team' />
                    <div className='p-5 bg-[color:var(--secondary-gray-color)] hover:bg-white hover:shadow-xl rounded-br-2xl rounded-bl-3xl'>
                        <h4 className={`${roboto.className} font-bold text-sm`}>Giovani Bacardo</h4>
                        <div className='flex justify-between'>
                            <p className={`${yellowtail.className} yellowtail text-sm font-normal`}>Farmer</p>
                            <div className='flex items-center'>
                                <span className='w-[22px] h-[22px] text-gray-500'><FaInstagram /></span>
                                <span className='w-[22px] h-[22px] text-gray-500'><FaFacebook /></span>
                                <span className='w-[22px] h-[22px] text-gray-500'><FaTwitter /></span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='w-1/3'>
                    <Image src={TeamTwo} alt='team' />
                    <div className='p-5 bg-[color:var(--secondary-gray-color)] hover:bg-white hover:shadow-xl rounded-br-2xl rounded-bl-3xl'>
                        <h4 className={`${roboto.className} font-bold text-sm`}>Marianne Loreno</h4>
                        <div className='flex justify-between'>
                            <p className={`${yellowtail.className} yellowtail text-sm font-normal`}>Designer</p>
                            <div className='flex items-center'>
                                <span className='w-[22px] h-[22px] text-gray-500'><FaInstagram /></span>
                                <span className='w-[22px] h-[22px] text-gray-500'><FaFacebook /></span>
                                <span className='w-[22px] h-[22px] text-gray-500'><FaTwitter /></span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='w-1/3'>
                    <Image src={TeamThree} alt='team' />
                    <div className='p-5 bg-[color:var(--secondary-gray-color)] hover:bg-white hover:shadow-xl rounded-br-2xl rounded-bl-3xl'>
                        <h4 className={`${roboto.className} font-bold text-sm`}>Riga Pelore</h4>
                        <div className='flex justify-between'>
                            <p className={`${yellowtail.className} yellowtail text-sm font-normal`}>Farmer</p>
                            <div className='flex items-center'>
                                <span className='w-[22px] h-[22px] text-gray-500'><FaInstagram /></span>
                                <span className='w-[22px] h-[22px] text-gray-500'><FaFacebook /></span>
                                <span className='w-[22px] h-[22px] text-gray-500'><FaTwitter /></span>
                            </div>
                        </div>
                        
                    </div>
                </div>  
            </div>
            <div className='flex gap-2 justify-between mt-5'>
                <div className='w-1/3' >
                    <Image src={TeamFour} alt='team' />
                    <div className='p-5 bg-[color:var(--secondary-gray-color)] hover:bg-white hover:shadow-xl rounded-br-2xl rounded-bl-3xl'>
                        <h4 className={`${roboto.className} font-bold text-sm`}>Keira Knightley</h4>
                        <div className='flex justify-between'>
                            <p className={`${yellowtail.className} yellowtail text-sm font-normal`}>Farmer</p>
                            <div className='flex items-center'>
                                <span className='w-[22px] h-[22px] text-gray-500'><FaInstagram /></span>
                                <span className='w-[22px] h-[22px] text-gray-500'><FaFacebook /></span>
                                <span className='w-[22px] h-[22px] text-gray-500'><FaTwitter /></span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='w-1/3'>
                    <Image src={TeamFive} alt='team' />
                    <div className='p-5 bg-[color:var(--secondary-gray-color)] hover:bg-white hover:shadow-xl rounded-br-2xl rounded-bl-3xl'>
                        <h4 className={`${roboto.className} font-bold text-sm`}>Scott Lawrence</h4>
                        <div className='flex justify-between'>
                            <p className={`${yellowtail.className} yellowtail text-sm font-normal`}>Designer</p>
                            <div className='flex items-center'>
                                <span className='w-[22px] h-[22px] text-gray-500'><FaInstagram /></span>
                                <span className='w-[22px] h-[22px] text-gray-500'><FaFacebook /></span>
                                <span className='w-[22px] h-[22px] text-gray-500'><FaTwitter /></span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='w-1/3'>
                    <Image src={TeamSix} alt='team' />
                    <div className='p-5 bg-[color:var(--secondary-gray-color)] hover:bg-white hover:shadow-xl rounded-br-2xl rounded-bl-3xl'>
                        <h4 className={`${roboto.className} font-bold text-sm`}>Karen Allen</h4>
                        <div className='flex justify-between'>
                            <p className={`${yellowtail.className} yellowtail text-sm font-normal`}>Farmer</p>
                            <div className='flex items-center'>
                                <span className='w-[22px] h-[22px] text-gray-500'><FaInstagram /></span>
                                <span className='w-[22px] h-[22px] text-gray-500'><FaFacebook /></span>
                                <span className='w-[22px] h-[22px] text-gray-500'><FaTwitter /></span>
                            </div>
                        </div>
                        
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}
