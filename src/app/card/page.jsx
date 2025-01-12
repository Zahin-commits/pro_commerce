'use client'
import Link from 'next/link'
import './page.card.css'
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function page() {
  useGSAP(()=>{
     gsap.to(".container .card",{
      opacity:1,
      duration:2,
      ease: "power3.out"
     })
  })
  return (
    <div className='container'> 
     <div className="card">
      <div className="back">
        <div className="back_text-container">
          <p className='v' >amazing moments for you.</p>
           <p className='v'> I won’t take up too much of your time—you’ve got a celebration to do! Just know that I’m wishing you the happiest birthday from the bottom of my heart.</p>

            <p className='ending v'>Your friend,</p>
            <p className='ending v'>-Zahin</p>
 <Link className='btn v' href={'/profilePic'} >Click Me</Link>

        </div>
     
      </div>
      <div className="front">
        <div className="imgset">
             {/* <!-- <img width="100%" src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png"> --> */}
             <img width="100%" src="/card_img.png"/>
           </div>
      </div>
      <div className="text-container">
       {/* <p id="head">Happy Birthday</p>
         <p>I hope your special day will bring you lots of happiness, love, and fun. You deserve them a lot. Enjoy!</p>
        <p>Hope your day goes great!</p> */}
        <p>Hey there, Komi!

If you’re reading this, I’m so glad that my wishes have reached you. Honestly, it’s not easy to put into words how much I appreciate having such a kind and wonderful friend like you, Komi. </p>

<p>I truly hope this birthday brings you nothing but happiness, laughter, and great memories. You deserve all the best things life has to offer, and I’m sure this year will be full of <span className='h' >amazing moments for you.</span> </p>

<p className='h'>I won’t take up too much of your time—you’ve got a celebration to do! Just know that I’m wishing you the happiest birthday from the bottom of my heart.</p>

<p className='ending h'>Your friend,</p>
<p className='ending h'>-Zahin</p>
 <Link className='btn h' href={'/profilePic'} >Click Me</Link>
      </div>
    </div>
    </div>
  )
}


/* 
Hey there!

If you’re reading this, I’m over the moon that my wishes have found their way to you. Honestly, I’ve been struggling to find the right words because no words feel enough to celebrate someone as amazing and kind-hearted as you.

All I truly wish is for this special day of yours to overflow with joy, laughter, and unforgettable moments. You deserve every bit of happiness in the world and so much more.

I won’t keep you long—you’ve got a birthday to enjoy! Just know that my heart is sending you the warmest hugs and the happiest wishes.

Wishing you the most wonderful birthday ever!

Your friend always,
Zahin



Here’s your updated letter with her pet name included:

Hey there, Komi!

If you’re reading this, I’m so glad that my wishes have reached you. Honestly, it’s not easy to put into words how much I appreciate having such a kind and wonderful friend like you, Komi.

I truly hope this birthday brings you nothing but happiness, laughter, and great memories. You deserve all the best things life has to offer, and I’m sure this year will be full of amazing moments for you, Komi.

I won’t take up too much of your time—you’ve got celebrating to do! Just know that I’m wishing you the happiest birthday from the bottom of my heart.

Your friend,
Zahin
*/