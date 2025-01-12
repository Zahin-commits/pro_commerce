'use client'
import './app.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import Searchbar from './components/Searchbar';
import Tags from './components/Tags';
import Item from './components/Item';

export default function Home() {
  const router = useRouter();
  useGSAP(()=>{
    gsap.to(".decoy .circle",{
      height:"250vh",
      width:"250vh",
      delay:2,
      duration:2,
      onComplete:()=>{
          router.push('/surprise')
      }
   })
  })
  return (
    <div className="decoy">
      <div className='home'>
     <Navbar/>
    <h1>
      Pro Commerce
    </h1>
    <Searchbar/>
    <Tags/>

    <h3 className='top_items' >Top Electronics</h3>

    <div className="item_container">
        <Item img={"https://samantacomputer.com/wp-content/uploads/2023/07/707311cb-5b11-4e6c-9a2e-f7145fc12198.png"} name={"LG Monitor"} price={500} />

        <Item img={"https://www.ultratech.com.bd/image/cache/catalog/processor/intel/i5-9500/intel-9th-gen-core-i5-9500-processor-tray-500x500.jpg.webp"} name={"Intel Core i5"} price={80}/>
    </div>
   
    </div>
    <div className="circle"></div>
    </div>
  );
}
