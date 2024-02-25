import { MyCard } from "components/3DCard/MyCard";
import Footer from "components/Footer";
import { MyParallax } from "components/HeroParallax/MyParallax";
import { Meteors } from "components/Meteor";
import { MyBeam } from "components/TracingBeam/MyBeam";
import { MyTypewriter } from "components/Typewriter/MyTypewriter";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between">
        {/* Meteor deco */}
        <div>{/* <Meteors number={20} /> */}</div>

        {/* Intro Banner */}
        <div className="w-full min-h-screen pt-20">
          <MyCard />
          {/* <MyParallax /> */}
        </div>

        {/* Career Timeline */}
        <div>
          <MyTypewriter />

          <div className="p-8">
            <MyBeam />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
