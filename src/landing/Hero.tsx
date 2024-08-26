import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const logo = useRef<HTMLImageElement>(null);
    const div = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.from(logo.current, {
            y: -10,
            opacity: 0,
            delay: 0.5,
            duration: 0.5
        })
    }, [logo]);
    useGSAP(() => {
        gsap.from(".div p", {
            x: -10,
            opacity: 0,
            delay: 0.5,
            duration: 0.5,
            stagger: 0.25
        })
    }, [div])
  return (
    <div className='text-white flex flex-row w-full'>
        <div ref={div} className="div w-[50%]">
            <p className="w-full text-[3.2rem] pl-[10rem] font-RedRose font-bold text-black">Innovate, Create</p>
            <p className="w-full text-[3.2rem] pl-[10rem] font-RedRose font-bold text-black -mt-7"><span className="font-light text-[2rem]">and</span> Celebrate,</p>
            <p className="w-full text-[2rem] font-light pl-[10rem] -mt-4 text-black">at <span className="font-RedRose font-bold text-[6rem]">TechXetra</span></p>
        </div>
        <div className="w-[50%] flex justify-center pt-8">
        <img ref={logo} src="/mood.svg" alt="" />
        </div>
    </div>
  )
}

export default Hero