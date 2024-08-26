import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const logo = useRef<HTMLUListElement>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  useGSAP(
    () => {
      gsap.from(logo.current, {
        y: -5,
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
      });
    },
    {
      scope: logo,
    }
  );
  useGSAP(
    () => {
      gsap.from(buttons.current.filter(Boolean), {
        y: -5,
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
        stagger: 0.15,
      });
    },
    {
      scope: buttons,
    }
  );
  return (
    <div className="w-full h-full text-white">
      <div className="w-full flex flex-row items-center h-full font-Philosopher">
        <div className="w-[100%] flex justify-between">
          <div className="w-full flex justify-center">
            <ul ref={logo} className="flex flex-row gap-[50px] text-lg border-[1px] border-white rounded-[1.5rem] px-[50px] py-[15px]">
              {["About", "Events", "Contact", "Signup"].map((label, index) => (
                <li
                  key={index}
                  className="relative hover:cursor-pointer hover:text-black transition-all ease-in-out duration-300 hover:scale-110"
                >
                  <button
                    ref={(el) => (buttons.current[index] = el)}
                    type="button"
                    className="relative z-10"
                  >
                    {label}
                  </button>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all ease-in-out duration-300 hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
