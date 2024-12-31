'use client'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useGSAP(()=>{
    gsap.to(".decoy .circle",{
      height:"250vh",
      width:"250vh",
      delay:2,
      duration:1,
      onComplete:()=>{
          router.push('/surprise')
      }
   })
  })
  return (
    <div className="decoy">
    
    <h1>what to do</h1>

    <div className="circle"></div>
    </div>
  );
}
