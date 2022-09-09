import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Newsletter() {
  useEffect(() => {
    Aos.init({
      offset: 20,
      duration: 2000,
      easing: "ease-out",
      delay: 200,
    });
  }, []);

  return (
    <section data-aos="flip-down" className="container mx-auto md:px-20 px-10 ">
      <div className="p-6 news">
        <h3 className="text-3xl font-bold pb-4">Start Mining Now</h3>
        <div className="justify-between flex md:space-x-12 md:flex-row space-y-4 flex-col">
          <p className="max-w-sm text-xs md:text-sm">
            Lorem ipsum dolor sit amet, consectetur. Ipsum saepe nulla. Odio
            iste accusamus nesciunt explicabo provident.
          </p>
          <input
            className="outline-none border-b-[1px] w-full md:mx-4 h-fit bg-transparent text-white text-xl  border-gray-100 placeholder:text-white  p-1 "
            placeholder="Enter message"
            type="text"
          />
          <a
            className="px-4 self-center bg-white rounded-xl py-2 w-fit h-fit text-black "
            href="/"
          >
            Subscribe
          </a>
        </div>
      </div>
    </section>
  );
}
export default Newsletter;
