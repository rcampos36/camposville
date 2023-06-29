import TeamBanner from "@/public/static/images/Team-Banner.jpg";
import { yellowtail, roboto } from "../../components/styles/fonts";
import OurTeam from "@/components/our-team";
import Newsletter from "@/components/newsletter";
import Image from "next/image";

export default function Team() {
  return (
    <div className="">
      <div className="w-full relative">
        <Image src={TeamBanner} alt="about banner" />
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
          <h1 className={`${roboto.className} font-bold text-6xl max-sm:text-4xl`}>Our Team</h1>
        </div>
      </div>
      <OurTeam />
      <Newsletter />
    </div>
  )
}
