import NewsCards from "@/components/news-cards";
import { yellowtail, roboto } from "../../components/styles/fonts";
import NewsBanner from "@/public/static/images/NewsBanner.png";
import Newsletter from '@/components/newsletter';
import Image from "next/image";

export default function News() {
  return (
    <div>
      <div className="w-full relative">
        <Image src={NewsBanner} alt="about banner" />
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
          <h1 className={`${roboto.className} font-bold text-6xl`}>Recent News</h1>
        </div>
      </div>
      <NewsCards />
      <Newsletter />
    </div>
  )
}
