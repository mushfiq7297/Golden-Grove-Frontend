
import {Hero} from "./Hero";
import Features from "./features";
import HomeAbout from "./HomeAbout";
import HomeTestimonials from "./HomeTestimonials";
import HomeFaq from "./HomeFaq";
import RealtimeStats from "./RealtimeState";



export default function Home() {
  return (
    <>
   <div className="relative min-h-screen w-full">
  <img 
    
     className="absolute inset-0 w-full h-full 
             bg-[url('https://i.ibb.co/Zz07kTsw/lush-green-bamboo-forest.jpg')] 
             bg-repeat-y 
             bg-top 
             bg-contain
             md:bg-contain 
             md:w-full h-full
             md:bg-repeat-y
             "
  />

  <div className="relative backdrop-blur-[1px] bg-black/40">
     <Hero/>
     <Features/>
     <RealtimeStats/>
     <HomeAbout/>
     <HomeTestimonials/>
     <HomeFaq/>
    </div>
    </div>
    </>
  )
}
