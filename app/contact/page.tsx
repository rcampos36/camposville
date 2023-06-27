import { yellowtail, roboto } from "../../components/styles/fonts";
import ContactBanner from "@/public/static/images/Contact-Banner.png";
import Newsletter from '@/components/newsletter';
import WorkTogether from "@/components/work-together";

export default function () {
  return (
    <div>
      <div className="w-full relative">
        <img src={ContactBanner.src} alt="about banner" />
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
          <h1 className={`${roboto.className} font-bold text-6xl`}>Contact Us</h1>
        </div>
      </div>
      <WorkTogether />
      <Newsletter />
    </div>
  )
}
