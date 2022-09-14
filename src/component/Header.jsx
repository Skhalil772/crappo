import Hero from "../assets/hero-img.png";
import Why from "../assets/why-img.png";
import Arrow from "../assets/Vector.svg";
import Profile from "../assets/icon-1.svg";
import Icon from "../assets/icon-1.svg";
import Name from "../assets/Bar.png";
import Coin from "./Coin";
import Bitcoin from "../assets/bitcon.png";
import Ethereum from "../assets/ethereum.png";
import Litecoin from "../assets/litecoin.png";
import { useEffect, useState } from "react";
import { FaChevronRight, FaUser } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
function Header() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      easing: "ease-out",
      delay: 200,
    });
  }, []);

  const [One, SetOne] = useState(false);
  const [Two, SetTwo] = useState(false);
  const [Tre, SetTre] = useState(false);

  const Bit = () => {
    SetOne(true);
    SetTwo(false);
    SetTre(false);
  };
  const Eth = () => {
    SetOne(false);
    SetTwo(true);
    SetTre(false);
  };
  const Lte = () => {
    SetOne(false);
    SetTwo(false);
    SetTre(true);
  };

  return (
    <header>
      <section className="container mx-auto lg:h-screen  md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 px-8 sm:px-0">
          <div className="flex flex-col space-y-8 max-w-md mx-auto py-20 ">
            <div className="bg-gray-600 rounded-3xl flex  text-xs items-center w-fit">
              <span
                data-aos="zoom-in"
                className="bg-white rounded-2xl py-1 px-3 m-1 mr-6  text-gray-500"
              >
                70% SAVE
              </span>
              <span className="pr-2">for the best black friday deals</span>
            </div>
            <h1
              data-aos="fade-right"
              className="md:text-5xl text-4xl font-bold"
            >
              Fastest Secure Platform To Invest In Cypto
            </h1>
            <p data-aos="fade-left" className="text-xs">
              buy and sell cyptocurrencies by trusted 10M wallets, in over 100m
              transactions Try For FREE
            </p>
            <a
              className="py-1 px-3 rounded-3xl w-fit flex  items-center bg-blue-600 text-white"
              href="/"
            >
              <span
                data-aos="fade-in"
                data-aos-offset="0"
                data-aos-duration="2000"
              >
                Try For Free
              </span>
              <span
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-duration="2000"
                className="bg-white rounded-full w-8 h-8 flex justify-center items-center ml-4"
              >
                <img
                  className="text-blue-600 w-2 font-bold"
                  src={Arrow}
                  alt=""
                />
              </span>
            </a>
          </div>
          <div>
            <img
              data-aos="zoom-in-up"
              className="md:w-[90%] w-[80%] mx-auto "
              src={Hero}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="px-4 flex  justify-center  ">
        <div className=" lg:grid-cols-3 grid-cols-1 gap-12 md:gap-8 py-12  grid">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="flex flex-row space-x-6 items-center"
          >
            <span className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
              <img className="w-8 h-8" src={Name} alt="" />
            </span>
            <span className="flex flex-col space-y-2">
              <p>$30B</p>
              <h2>Digital Currency Exchange</h2>
            </span>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            className="flex flex-row space-x-6 items-center"
          >
            <span className=" bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
              <FaUser size={30} className="text-blue-800" />
            </span>
            <span className="flex flex-col space-y-2">
              <p>190+</p>
              <h2>Countries Around The World</h2>
            </span>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="flex flex-row space-x-6 items-center"
          >
            <span className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
              <img className="w-8 h-8 text-blue-700" src={Icon} alt="" />
            </span>

            <span className="flex flex-col space-y-2">
              <p>$10M</p>
              <h2>Trusted Wallet Investors</h2>
            </span>
          </div>
        </div>
      </section>
      <section className="container mx-auto my-10 px-4 ">
        <div className=" md:grid-cols-2 grid-cols-1 gap-12 md:gap-8 py-10  px-4 grid ">
          <div data-aos="fade-up">
            <img src={Why} className="w-[90%]" alt="" />
          </div>
          <div
            data-aos="fade-down"
            className="flex flex-col space-y-6 self-center pt-6    "
          >
            <span className="text-5xl">
              <h2 className=" ">why you should choose </h2>
              <span className=" ">CHAPPO</span>
            </span>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. In, praesentium.
            </p>
            <a href="/" className="px-3 py-1 w-fit bg-blue-600 rounded-2xl">
              Learn More
            </a>
          </div>
        </div>
      </section>
      <div
        data-aos="fade-up"
        className="flex flex-col space-y-2 items-center pb-72 container px-8 "
      >
        <h2 className="text-xl font-semibold">How Much Can You Earn With Us</h2>
        <p className="text-gray-400 text-sm text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id
          similique temporibus dignissimos tempore odio?
        </p>
      </div>
      <section className="h-fit lg:h-screen     bg-gray-200 relative  ">
        <div className="   absolute -top-[200px] left-1/2 -translate-x-1/2">
          <div
            data-aos="zoom-in"
            className="bg-white rounded-2xl lg:w-fit sm:w-[80%]  text-black  p-8  lg:p-12"
          >
            <div className="lg:flex-row flex flex-col lg:space-y-0 space-y-6 lg:space-x-8">
              <input
                className="outline-none border-b-[1px] text-xl lg:w-96 border-gray-400 placeholder:text-gray-700 md:placeholder:text-2xl p-1 "
                placeholder="Enter your hash rate"
                type="number"
              />
              <select
                className="outline-none border-b-[1px] lg:w-60 border-gray-400 placeholder:text-2xl p-1"
                name="type"
                id="rate"
              >
                <option value="">TH/s</option>
                <option value="H/s">H/s</option>
                <option value="KH/s">KH/s</option>
                <option value="MH/s">MH/s</option>
                <option value="GH/s">GH/s</option>
              </select>
              <button className="px-3 rounded-2xl py-1 bg-blue-500 w-fit text-white">
                Calculate
              </button>
            </div>
            <div className="space-y-6 flex flex-col pt-6">
              <h3 className="text-blue-500 text-2xl">
                ESTIMATED 24 HOUR REVENUE:
              </h3>
              <span className="text-black font-bold text-4xl">
                0.055 130 59 ETH <span className="text-blue-500">($1275)</span>
              </span>
              <p className="text-gray-500">
                Revenue will change based on mining difficulty and Ethereum
                price.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex justify-around lg:px-8 items-center lg:flex-row flex-col space-y-20 lg:space-y-0 pt-96 sm:pt-80 pb-20 lg:pt-40 ">
          <div
            data-aos="fade-up"
            onClick={Bit}
            className={
              One
                ? "p-4 bg-[#2B076E] text-white rounded-2xl  flex items-center flex-col space-y-4 h-[400px] w-[300px]   sm:w-[400px] lg:w-[300px] justify-center"
                : "p-4 bg-white text-black rounded-2xl  flex items-center flex-col space-y-4 h-[400px] justify-center lg:w-[300px]  w-[300px]   sm:w-[400px]"
            }
          >
            <Coin
              Icon={Bitcoin}
              Title="Bitcoin"
              Abb="BTC"
              Det="Digital currency in which a record of transactions is maintained"
            />
            {One ? (
              <a
                className="py-4 px-6 rounded-3xl text-xl bg-blue-500 text-white flex items-center "
                href="/"
              >
                Start Mining
                <FaChevronRight className="ml-3" />
              </a>
            ) : (
              <a
                className="border-2 text-blue-500 border-gray-400 w-16 h-16 rounded-full justify-center flex items-center "
                href="/"
              >
                <FaChevronRight />
              </a>
            )}
          </div>
          <div
            data-aos="zoom-in"
            onClick={Eth}
            className={
              Two
                ? "bg-[#2B076E] text-white rounded-2xl  flex items-center flex-col space-y-4 h-[400px]   w-[300px]   sm:w-[400px] lg:w-[300px] justify-center"
                : "bg-white text-black rounded-2xl  flex items-center flex-col space-y-4 h-[400px]   w-[300px]   sm:w-[400px] lg:w-[300px] justify-center"
            }
          >
            <Coin
              Icon={Ethereum}
              Title="Ethereum"
              Abb="ETH"
              Det="Blockchain technology to create and run decentralized"
            />
            {Two ? (
              <a
                className="py-4 px-6 rounded-3xl text-xl bg-blue-500 text-white flex items-center "
                href="/"
              >
                Start Mining
                <FaChevronRight className="ml-3" />
              </a>
            ) : (
              <a
                className="border-2 text-blue-500 border-gray-400 w-16 h-16 justify-center rounded-full flex items-center "
                href="/"
              >
                <FaChevronRight />
              </a>
            )}
          </div>
          <div
            data-aos="fade-up"
            onClick={Lte}
            className={
              Tre
                ? "bg-[#2B076E] text-white rounded-2xl  flex items-center flex-col space-y-4 h-[400px]   w-[300px]   sm:w-[400px] lg:w-[300px]   justify-center"
                : "bg-white text-black rounded-2xl  flex items-center flex-col space-y-4 h-[400px]   w-[300px]   sm:w-[400px]  lg:w-[300px]  justify-center"
            }
          >
            <Coin
              Icon={Litecoin}
              Title="Litecoin"
              Abb="LTC"
              Det="Cryptocurrency that enables instant payments to anyone in the world"
            />
            {Tre ? (
              <a
                className="py-4 px-6 rounded-3xl text-xl bg-blue-500 text-white flex items-center "
                href="/"
              >
                Start Mining
                <FaChevronRight className="ml-3 " />
              </a>
            ) : (
              <a
                className="border-2 justify-center text-blue-500 border-gray-400 w-16 h-16 rounded-full flex items-center "
                href="/"
              >
                <FaChevronRight />
              </a>
            )}
          </div>
        </div>
      </section>
    </header>
  );
}
export default Header;
