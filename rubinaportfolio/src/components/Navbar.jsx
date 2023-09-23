import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { ChevronDown } from "react-feather";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [hover, setHover] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-[#69666617]" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white h-9 text-[25px] font-bold cursor-pointer flex '>
            Rubina &nbsp;
            <span className='sm:block hidden'>Postma</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-[#8D8484]"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className={`text-[#8D8484] hover:text-white text-[18px] font-medium cursor-pointer display: block`}
            onClick={() => setToggle(!toggle)}
          >
            <p className="inline">
              Works
            </p>
            <ChevronDown className="inline" />
            <div className={`${!toggle ? "hidden" : "flex"
              } p-3 bg-[#69666617] absolute top-20 mx-auto min-w-[140px] z-10 rounded-xl`}>
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                <li
                  className="cursor-pointer text-[16px] hover:text-white text-[#8D8484]">
                  <Link to="/Paintings">
                    Paintings
                  </Link>
                </li>
                <li
                  className="cursor-pointer text-[16px] hover:text-white text-[#8D8484]">
                  <Link to="/Prints">
                    Prints
                  </Link>
                </li>
                <li
                  className="cursor-pointer text-[16px] hover:text-white text-[#8D8484]">
                  <Link to="/Mixed_Media_Sculptures">
                    Mixed Media + Sculptures
                  </Link>
                </li>
                <li
                  className="cursor-pointer text-[16px] hover:text-white text-[#8D8484]">
                  <Link to="/Digital">
                    Digital
                  </Link>
                </li>
                <li
                  className="cursor-pointer text-[16px] hover:text-white text-[#8D8484]">
                  <Link to="/Video">
                    Video
                  </Link>
                </li>
                <li
                  className="cursor-pointer text-[16px] hover:text-white text-[#8D8484]">
                  <Link to="/Archive">
                    Archive
                  </Link>
                </li>
              </ul>

            </div>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-[#69005A]"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;