import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [openNav, setOpenNav] = useState(false);
  let headerRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#6d60f1";
      } else {
        headerRef.current.style.background = "transparent";
      }
    });
  }, []);
  return (
    <header
      ref={headerRef}
      className="py-6 text-white top-0 left-0 fixed w-full transition-all duration-500 z-50">
      <div className="container flex items-center justify-between relative">
        <h1 className=" text-2xl font-bold tracking-widest">AMAZON</h1>
        <nav>
          <ul className="hidden sm:flex items-center gap-10">
            <li>
              <Link
                to={"/"}
                className="capitalize text-white transition-all duration-300 hover:text-gray-400 hover:text-[17px] ">
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="capitalize text-white transition-all duration-300 hover:text-gray-400 hover:text-[17px] ">
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/product/:proId"}
                className="capitalize text-white transition-all duration-300 hover:text-gray-400 hover:text-[17px] ">
                Products
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="capitalize text-white transition-all duration-300 hover:text-gray-400 hover:text-[17px] ">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex sm:hidden ">
          <i
            onClick={() => {
              setOpenNav((prev) => !prev);
            }}
            className="fa-solid fa-bars-staggered cursor-pointer text-3xl"></i>
          <ul
            className={`absolute transition-all duration-300 ${
              openNav ? "opacity-1" : "opacity-0"
            }   top-10 left-0 w-full h-[300px] flex flex-col items-center justify-center space-y-10 px-8 bg-mainColor`}>
            <li>
              <Link
                to={"/"}
                className="capitalize text-white transition-all duration-300 hover:text-gray-400 hover:text-[20px] ">
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="capitalize text-white transition-all duration-300 hover:text-gray-400 hover:text-[20px] ">
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/product"}
                className="capitalize text-white transition-all duration-300 hover:text-gray-400 hover:text-[20px] ">
                Products
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="capitalize text-white transition-all duration-300 hover:text-gray-400 hover:text-[20px] ">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
