import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
function Navbar() {
  const [Open, SetOpen] = useState(false);
  useEffect(() => {
    Aos.init({
      offset: 0,
      duration: 2000,
      easing: "ease-out",
      delay: 200,
    });
  }, []);
  return (
    <section className="mx-auto container p-5">
      <div className="justify-between flex  ">
        <div>
          <img data-aos="fade-right" src={Logo} alt="" />{" "}
        </div>
        {/* DESKTOP NAV */}
        <div>
          <ul className="sm:flex hidden flex-row space-x-6 items-center">
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
            <span className="font-bold text-xl">|</span>
            <li className="bg-blue-500 px-4 py-1 hover:bg-gray-200 duration-400 ease-out font-semibold rounded-3xl">
              <a href="/">Register</a>
            </li>
          </ul>
        </div>
        <div
          onClick={() => {
            SetOpen(!Open);
          }}
          className="z-[99] absolute top-2 right-2 p-4 cursor-pointer font-thin sm:hidden flex"
        >
          {Open ? <FaTimes fontWeight={3} size={20} /> : <FaBars size={30} />}
        </div>
        {/* MOBILE NAV */}
        <div
          className={
            Open
              ? " translate-x-0 fixed inset-0  ease-out bg-[#252540] duration-1000 sm:hidden z-50"
              : "translate-x-[1000px] fixed inset-0  ease-in  duration-1000 bg-[#252540] sm:hidden z-50 "
          }
        >
          <div className=" container mx-auto ">
            <ul className="  text-2xl space-y-10 flex-col items-center pt-40 flex  ">
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <span className="flex space-x-4 items-center">
                <li>
                  <a href="/">Login</a>
                </li>

                <span className="font-bold text-xl text-gray-500">|</span>
                <li>
                  <a
                    className="bg-blue-400 hover:bg-gray-200 duration-400 ease-out px-3 py-[6px] rounded-2xl text-xl font-semibold"
                    href="/"
                  >
                    Register
                  </a>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Navbar;
