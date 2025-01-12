'use client'
import './pp.style.css'
import { saveAs } from 'file-saver'

const page = () => {

  const pictures = [
    "pp-1.jpeg", "pp-2.jpeg", "pp-3.jpeg", "pp-4.jpeg", "pp-5.jpeg", "pp-6.jpeg",
    "pp-7.jpeg", "pp-8.jpeg", "pp-9.jpeg", "pp-10.jpeg", "pp-11.jpeg", "pp-12.jpeg",
    "pp-13.jpeg", "pp-14.jpeg", "pp-15.jpeg", "pp-16.jpeg", "pp-17.jpeg", "pp-18.jpeg",
    "pp-19.jpeg", "pp-20.jpeg", "pp-21.jpeg", "pp-22.jpeg", "pp-23.jpeg", "pp-24.jpeg",
    "pp-25.jpeg", "pp-26.jpeg", "pp-27.jpeg", "pp-28.jpeg", "pp-29.jpeg", "pp-30.jpeg",
    "pp-31.jpeg", "pp-32.jpeg", "pp-33.jpeg", "pp-34.jpeg", "pp-35.jpeg", "pp-36.jpeg",
    "pp-37.jpeg", "pp-38.jpeg"
  ]
  const handleDownload = (src)=>{
    saveAs(src,"test.png")
  }
  return (
    <div id='profile_pics'>
      <h1>Click on any Picture to download</h1>
      <p>Unfortunately I don't have any gits for ya, So I made some profile pics. I hope you will like them.</p>
      <div className="img_container">
        {/* <img onClick={()=>{handleDownload("https://images.pexels.com/photos/28406651/pexels-photo-28406651/free-photo-of-historic-armenian-church-on-akdamar-island-van.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")}} src="https://images.pexels.com/photos/28406651/pexels-photo-28406651/free-photo-of-historic-armenian-church-on-akdamar-island-van.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

        <img src="https://images.pexels.com/photos/21336456/pexels-photo-21336456/free-photo-of-sage-bushes-in-arid-canyon-in-utah.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />

        <img src="https://images.pexels.com/photos/26744704/pexels-photo-26744704/free-photo-of-young-giraffe-eating-leaves-from-bush.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

        <img src="https://images.pexels.com/photos/29506596/pexels-photo-29506596/free-photo-of-majestic-giraffe-in-nairobi-s-lush-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />

        <img src="https://images.pexels.com/photos/30159495/pexels-photo-30159495/free-photo-of-black-and-white-corgi-in-snowy-forest-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />

        <img src="" alt="https://www.pexels.com/video/aerial-view-of-wooden-bridge-over-lush-green-forest-29846257/" />

        <img src="" alt="https://www.pexels.com/photo/intricate-floral-patterns-at-sheikh-zayed-mosque-30159434/" />

        <img src="https://images.pexels.com/photos/30083712/pexels-photo-30083712/free-photo-of-misty-mountain-landscape-in-vysoke-tatry.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />

        <img src="https://images.pexels.com/photos/29100028/pexels-photo-29100028/free-photo-of-close-up-of-butterfly-on-vibrant-orange-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
     
        {pictures.map((pic,i)=>(
          <img key={i}  src={`/profile_pics/${pic}`}
          onClick={()=>{handleDownload(`/profile_pics/${pic}`)}}
          alt="" />
        ))}
      </div>
    </div>
  )
}

export default page