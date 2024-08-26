import React, { useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";

const Updates = () => {
  const update = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(update.current, {
      y: -10,
      delay: 0.8,
      duration: 0.6,
      opacity: 0
    })
  }, {
    scope: update
  });
  return (
    <div className="w-full flex justify-center -mt-[10px]" ref={update}>
      <div className="flex flex-row items-center gap-[10px] border-[1px] border-white px-5 py-1 rounded-2xl">
        <div className="text-[10px] flex items-center text-white">Discover about our latest updates</div>
        <div className="flex items-center">
          <button
            type="button"
            className="text-[8px] px-3 py-1 rounded-xl border-[1px] border-black hover:bg-black transition-all ease-in-out duration-200 text-white shadow-xl relative z-10 overflow-hidden"
          >
            <span className="relative z-20 text-white"><FaArrowRightLong /></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Updates;
