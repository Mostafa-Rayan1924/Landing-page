import heroImg from "../images/header.svg";
const Hero = () => {
  return (
    <div className="">
      <div className="container gap-20 md:gap-0 flex text-center md:text-start flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-white font-bold text-2xl md:text-4xl capitalize  ">
            Grow your skills to advance <br />
            your career path
          </h2>
          <p className="leading-relaxed text-gray-400 my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            doloremque itaque iis nostrum odit, quam cum?
          </p>
          <button className="py-3 px-6 bg-mainColor border-2 border-transparent text-white transition-all duration-300 hover:bg-transparent hover:border-mainColor">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img className="max-w-full" src={heroImg} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
