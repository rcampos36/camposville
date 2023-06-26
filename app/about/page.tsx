import { roboto } from "../../components/styles/fonts";
import Styles from "../../components/styles.module.css";
import { FaArrowCircleRight } from "react-icons/fa"
import Aboutus from "@/components/aboutpageabout";
import Whyus from "@/components/whyus";
import Team from "@/components/team";
import Offers from "@/components/offers";



export default function About() {
  return (
    <div>
      <div className="w-full relative">
        <img src="/images/About-Banner.png" alt="about banner" />
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
          <h1 className={`${roboto.className} font-bold text-6xl`}>About Us</h1>
        </div>
      </div>
      <Aboutus />
      <Whyus />
      <Team />
      <Offers />
    </div>
  )
}