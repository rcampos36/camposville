import TeamBanner from "@/public/static/images/Team-Banner.jpg";
import { yellowtail, roboto } from "../../components/styles/fonts";
import OurTeam from "@/components/our-team";
import Newsletter from "@/components/newsletter";

export default function Team() {
  return (
    <div className="mb-20">
      <div className="w-full relative">
        <img src={TeamBanner.src} alt="about banner" />
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
          <h1 className={`${roboto.className} font-bold text-6xl`}>Our Team</h1>
        </div>
      </div>
      <OurTeam />
      <Newsletter />
    </div>
  )
}
