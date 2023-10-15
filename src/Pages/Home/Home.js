import homeCarOne from "../../assets/Ads-1.png";
import homeCarTwo from "../../assets/Ads-2.png";
import "./Home.css";
import { useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";
import { Footer, NavbarTop } from "../../Components/Navigation/Navigation";
import { GridDisplay, ScrollDisplay } from "../CarDisplayViews";

function HeroSection() {
  return (
    <section
      className="hero
       grid grid-cols-1 lg:grid-cols-2 content-center mx-auto my-8 max-w-[90rem]
       lg:my-16
      "
    >
      <div className="flex">
        <div>
          <p className="text-white text-4xl font-medium absolute top-[15rem] mx-8">
            The Best Platform <br /> For Car Rental
          </p>
          <p className="text-white text-normal font-medium absolute top-[21rem] mx-8">
            Ease of doing car rental safely and <br /> reliably. Of course at a
            low price
          </p>
          <button className="text-white text-large font-medium bg-[#3563E9] p-4 rounded-md absolute top-[25rem] mx-8">Rental Car</button>
          <img src={homeCarOne} alt="" className=""></img>
        </div>
      </div>
      <div>
      <p className="text-white text-4xl font-medium absolute top-[15rem] mx-8">
            Easy way to rent a <br /> Car at low price
          </p>
          <p className="text-white text-normal font-medium absolute top-[21rem] mx-8">
            Providing cheap car rental service<br /> and safe and comfortable facility
          </p>
          <button className="text-white text-large font-medium bg-[#54A6FF] p-4 rounded-md absolute top-[25rem] mx-8">Rental Car</button>
        <img src={homeCarTwo} alt="" className="h-[23.5rem]"></img>
      </div>
    </section>
  );
}

export default function Home() {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);
  return (
    <>
      <NavbarTop></NavbarTop>
      <div className="page py-5 px-4 md:py-8 md:px-16">
        <HeroSection></HeroSection>

        <ScrollDisplay />
        <GridDisplay />
      </div>
      <Footer></Footer>
    </>
  );
}
