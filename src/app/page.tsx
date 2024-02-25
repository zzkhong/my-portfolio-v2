import Footer from "components/Footer";
import { MyParallax } from "components/HeroParallax/MyParallax";
import { Meteors } from "components/Meteor";
import { MyBeam } from "components/TracingBeam/MyBeam";
import { MyTypewriter } from "components/Typewriter/MyTypewriter";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Meteors number={20} />

        <MyParallax />

        <MyTypewriter />
        <MyBeam />
      </main>

      <Footer />
    </>
  );
}
