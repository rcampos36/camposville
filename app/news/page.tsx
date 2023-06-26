import NewsCards from "@/components/news-cards";
import { yellowtail, roboto } from "../../components/styles/fonts";

export default function News() {
  return (
    <div>
      <div className="w-full relative">
        <img src="/images/NewsBanner.png" alt="about banner" />
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
          <h1 className={`${roboto.className} font-bold text-6xl`}>Recent News</h1>
        </div>
      </div>
      <NewsCards />
    </div>
  )
}
