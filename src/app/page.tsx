import Features from "@/components/features/features";
import Deco from "@/components/home/deco/deco";
import Header from "@/components/home/header/header";
import Slider from "@/components/home/slider/slider";
import UpperPart from "@/components/ring/upper-part";

export default function Home() {
  return (
    <div className=" max-w-screen-2xl mx-auto">
      <Header/>
      <Deco/>
      <UpperPart/>
      {/* <DownPart/> */}
      <Slider/>
      <Features/>
    </div>
  );
}
