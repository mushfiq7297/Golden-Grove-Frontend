import ProductShowcase from "@/components/ui/ProductShowCase";
import {Hero} from "./Hero";
import Features from "./features";
import About from "./About";
import Testimonials from "./testimonials";
import FAQ from "./FAQ";
import RealtimeStats from "./RealtimeState";


export default function Home() {
  return (
    <>
    <div className="">
     <Hero/>
     <ProductShowcase/>
     <Features/>
     <RealtimeStats/>
     <About/>
     <Testimonials/>
     <FAQ/>
    </div>
    </>
  )
}
