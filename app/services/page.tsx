import { yellowtail, roboto } from "../../components/styles/fonts";
import WhatWeGrow from "@/components/what-we-grow";
import OrganicOnly from "@/components/organic-only";
import ServicesBanner from "@/public/static/images/Services-Banner-Image.png";

export default function Services() {
  return (
    <div>
      <div className="w-full relative">
        <img src={ServicesBanner.src} alt="about banner" />
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
          <h1 className={`${roboto.className} font-bold text-6xl`}>Services</h1>
        </div>
      </div>
      <WhatWeGrow />
      <OrganicOnly />
    </div>
  )
}
