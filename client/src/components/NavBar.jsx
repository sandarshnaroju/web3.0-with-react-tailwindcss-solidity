import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";
import React, { useState } from "react";
const NavBarComponent = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};
const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials"].map((item, index) => (
          <NavBarComponent title={item} key={item + index} />
        ))}
        <li className="bg-[#295be3] py-2 px-7 rounded-full cursor-pointer hover:bg-[#2546be] ">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={25}
            className="text-white cursor-pointer md:hidden"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={25}
            className="text-white cursor-pointer md:hidden"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3  w-[70vw] h-screen shadow-2xl md:hidden list-none
           flex flex-col justify-start items-end rounder-md blue-glassmorphism text-white animate-slide-in 
           "
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose
                fontSize={25}
                className="text-white cursor-pointer md:hidden"
                onClick={() => {
                  console.log("presses");

                  setToggleMenu(false);
                }}
              />
            </li>
            {["Market", "Exchange", "Tutorials"].map((item, index) => (
              <NavBarComponent title={item} key={item + index} />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
