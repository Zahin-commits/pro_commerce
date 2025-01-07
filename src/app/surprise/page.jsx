'use client'
import gsap from 'gsap'
import './page.surprise.css'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

     useGSAP(()=>{
      const text = new SplitType('.container > div h2');
      const tl = gsap.timeline();

      tl.set(".text-box1",{
        opacity:1
      }).from(".text-box1 h2 .char",{
        y:50,
        // delay:0.5,
        duration:0.3,
        stagger:0.04,
        ease: "power3.out"
      }).to(".text-box1",{
        opacity:0,
        display:"none",
        duration:0.3,
        delay:1.4
      })

      tl.set(".text-box2",{
        opacity:1
      }).from(".text-box2 h2 .char",{
        y:50,
        delay:0.5,
        // duration:0.4,
        // stagger:0.03
        duration:0.3,
        stagger:0.04,
        ease: "power3.out"
      }).to(".text-box2",{
        opacity:0,
        display:"none",
        duration:0.3,
        delay:1.4
      })

      tl.set(".text-box3",{
        opacity:1
      }).from(".text-box3 h2 .char",{
        y:50,
        delay:0.5,
        duration:0.3,
        stagger:0.04,
        ease: "power3.out"
      }).to(".text-box3",{
        opacity:0,
        display:"none",
        duration:0.3,
        delay:1.4,
        onComplete:()=>{
        //  router.replace('/card')
        //  router.push('/card',undefined, { shallow: false })
        window.location.href = "/card";
        console.log("done")
        }
      })
     })
  return (
    <div className='container'>
      <div className="text-box1">
        <h2>Hey there girl</h2>
        <h2>isnt this your</h2>
        <h2>birthday?</h2>
      </div>
      <div className="text-box2">
        <h2>then what are you</h2>
        <h2>doing here? lol</h2>
      </div>
      <div className="text-box3">
      <h2>anyways, let me</h2>
      <h2>wish you then!</h2>
      </div>
        
    </div>
  )
}
