import Features from "@/components/home/features/features";
import Deco from "@/components/home/deco/deco";
import Header from "@/components/home/header/header";
import Slider from "@/components/home/slider/slider";
import UpperPart from "@/components/ring/upper-part";
import Roadmap1 from "@/components/home/roadmap/roadmap1";
import Roadmap2 from "@/components/home/roadmap/roadmap2";
import Roadmap3 from "@/components/home/roadmap/roadmap3";
import LaunchOffer from "@/components/home/launch-offer";
import JoinUs from "@/components/home/join-us";
import Solutions from "@/components/home/solutions";
import DownPart from "@/components/ring/down-part";

export default function Home() {

  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden w-full">
      <div className="w-full h-[900px] lg:h-[1250px] bg-[url('/home/bg-intro.svg')] bg-center bg-no-repeat bg-cover">
        <Header />
        <Deco />
        <UpperPart />
        <DownPart />
      </div>
      <Slider />
      <Features />
      <Roadmap1 />
      <Roadmap2 />
      <Roadmap3 />
      <LaunchOffer />
      <JoinUs />
      <Solutions />
    </div>
  );
}
