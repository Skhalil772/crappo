import Bit from "../assets/feature-1-img.png";
import Stats from "../assets/feature-2-img.png";
import List from "../assets/feature-3-img.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Market() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 1000,
      easing: "ease-out",
      delay: 200,
    });
  }, []);
  return (
    <>
      <section className="container mx-auto py-12">
        <div className="flex justify-center md:py-20 py-12  px-6">
          <h2 className="text-3xl max-w-2xl  text-center">
            Market Sentiments, Portfolio, And Run The Infrastructure Of Your
            Choice
          </h2>
        </div>
        <div className="lg:grid-cols-2 grid  grid-cols-1 m-6 ">
          <div
            data-aos="zoom-in"
            className="justify-center max-w-sm justify-items-end pb-8 sm:pb-8   flex-col space-y-8 flex"
          >
            <h3 className="text-2xl">Invest Smart</h3>
            <p className="text-gray-400 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur rem ducimus vitae maiores dolorum alias.
            </p>
            <a
              className="px-4 py-2 w-fit text-xs rounded-3xl bg-blue-500"
              href="/"
            >
              Learn more
            </a>
          </div>
          <div data-aos="fade-up" className="justify-around">
            <img className="sm:w-[80%] p-4 sm:p-0" src={Bit} alt="" />
          </div>
        </div>
      </section>
      <section className="lg:flex-row flex-col-reverse flex px-6 py-12 gap-6 container mx-auto ">
        <div data-aos="fade-up" className="lg:w-[55%] w-[95%] ">
          <img src={Stats} alt="" />
        </div>
        <div
          data-aos="zoom-in"
          className="justify-center  justify-items-end p-8 sm:pb-8  lg:w-[35%] w-70%  flex-col space-y-8 flex"
        >
          <h3 className="text-2xl">Detailed Statistics</h3>
          <p className="text-gray-400 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            rem ducimus vitae maiores dolorum alias.
          </p>
          <a
            className="px-4 py-2 w-fit text-xs rounded-3xl bg-blue-500"
            href="/"
          >
            Learn more
          </a>
        </div>
      </section>
      <section className="container mx-auto px-2 py-12 mb-12">
        <div className="md:flex-row flex flex-col space-y-20 md:space-y-0 items-center justify-around ">
          <div
            data-aos="zoom-in"
            className="md:w-[35%] w-[80%] flex flex-col space-y-6 self-center"
          >
            <h3 className="text-2xl font-semibold">
              Grow Your Profit And Track Your Investments
            </h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim
              odit distinctio dolore id incidunt?
            </p>
            <a
              className="px-4 py-2 w-fit text-xs rounded-3xl bg-blue-500"
              href="/"
            >
              Learn more
            </a>
          </div>
          <div data-aos="fade-up" className="md:w-[50%] ">
            <img src={List} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Market;
