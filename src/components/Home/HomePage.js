import { bgColor } from "../classes/TailwindClasses";
import HomeHeader from "../headers/HomeHeader";
import Hero from "./Hero";
import LiveDemo from "./LiveDemo";


export default function HomePage() {
  return (
    <div className={`w-full min-h-screen relative text-[var(--text-primary)] transition-colors duration-300 overflow-hidden`}>
      <div className={`absolute inset-0 -z-20 ${bgColor} `} />
      <HomeHeader />
      <Hero />
      <LiveDemo />    
    </div>
  );
}