"use client";

import HomePage from "@/components/Home/HomePage";
import SplashScreen from "@/components/loader/SplashScreen";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useEffect, useState } from "react";

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export default function Home() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const onLoad = () => {
      setLoading(false);
      window.removeEventListener("load", onLoad);
    }

    if(typeof window !== "undefined") {
      // check if the page is loaded
      if(document.readyState === "complete") {
        setLoading(false);
      } else {
        window.addEventListener("load", onLoad);
      }
    }
  },[])
  
  
  if(loading) return <SplashScreen />
  
  
  return <HomePage />
}
