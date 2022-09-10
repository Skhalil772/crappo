import Logo from "../assets/logo.svg";
import Visa from "../assets/visa.png";
import Master from "../assets/mastercard.png";
import Bit from "../assets/bitcoin.png";
import { useEffect } from "react";

import {
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
function Footer() {
  useEffect(() => {
    Aos.init({
      offset: -20,
      duration: 2000,
      easing: "ease-out",
      delay: 200,
    });
  }, []);
  return (
    <section>
      <div className="pt-28">
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 gap-4 md:grid-cols-4 text-center container mx-auto p-8 "
        >
          <div className="w-fit mx-auto py-8">
            <img src={Logo} alt="" />
          </div>
          <div className="flex flex-col space-y-4">
            <span className="font-bold text-2xl py-4">Quick Links</span>
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="font-bold text-2xl py-4">Resources Links</span>
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="/">Download Whitepaper</a>
              </li>
              <li>
                <a href="/">Smart Token</a>
              </li>
              <li>
                <a href="/">BlockChain Explore</a>
              </li>
              <li>
                <a href="/">Crypto API</a>
              </li>
              <li>
                <a href="/">Interest</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="font-bold text-2xl py-4">
              We accept following payment systems
            </span>
            <ul className="flex space-x-4 w-fit mx-auto">
              <li>
                <img className="w-24 h-16" src={Visa} alt="methods" />
              </li>
              <li>
                <img className="w-24 h-16" src={Master} alt="methods" />
              </li>
              <li>
                <img className="w-24 h-16" src={Bit} alt="methods" />
              </li>
            </ul>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="py-10 flex md:flex-row space-y-4  items-center flex-col  justify-around"
        >
          <div className="">
            <p className="text-xl text-start">
              © 2022 CRAPPO. All rights reserved.
            </p>
          </div>
          <div className="flex flex-row space-x-4">
            <a href="/">
              <FaYoutube size={25} />
            </a>
            <a href="/">
              <FaWhatsapp size={25} />
            </a>
            <a href="/">
              <FaInstagram size={25} />
            </a>
            <a href="/">
              <FaTwitter size={25} />
            </a>
            <a href="/">
              <FaLinkedin size={25} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
