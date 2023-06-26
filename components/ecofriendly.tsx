import React from 'react'
import { yellowtail, roboto } from './styles/fonts'

export default function Ecofriendly() {
  return (
    <div className="flex">
      <div>
        <img src="./images/farmimage.png" alt="farm image" />
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col gap-5 py-10 pl-16 justify-center w-full bg-white h-[75%] -ml-32 rounded-xl">
          <p className={`${yellowtail.className} yellowtail text-2xl font-normal`}>Eco Friendly</p>
          <h4 className={`${roboto.className} font-bold text-4xl`}>Camposville is a Friendly Organic Farm and Store</h4>
          <div>
            <h4 className={`${roboto.className} text-xl font-bold`}>Start with our company first</h4>
            <p className='text-gray-400 text-sm'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
          </div>
          <div>
            <h4 className={`${roboto.className} text-xl font-bold`}>Learn How to Grow Yourself</h4>
            <p className='text-gray-400 text-sm'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
          </div>
          <div>
            <h4 className={`${roboto.className} text-xl font-bold`}>Farming Strategies of Today</h4>
            <p className='text-gray-400 text-sm'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
