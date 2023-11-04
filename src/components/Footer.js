const Footer = () => {
  return (
    <footer className="bg-secondBody py-10 text-center md:text-left">
      <div className="container flex flex-col md:flex-row  justify-between gap-20 text-white">
        <div className="w-full md:w-1/2 lg:w-1/4 ">
          <h2 className="font-bold text-2xl mb-4">RAYAN</h2>
          <p className="text-gray-300 leading-loose text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            archite atione <br />
            porro maiores placeat nam error.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 ">
          <h2 className="font-bold text-2xl mb-4">PermanLinks</h2>
          <ul className="space-y-5 cursor-pointer">
            <li className="text-gray-300">Home</li>
            <li className="text-gray-300">About</li>
            <li className="text-gray-300">Product</li>
            <li className="text-gray-300">Contact</li>
          </ul>
        </div>
        <div className=" flex-b w-full md:w-1/2 lg:w-1/4">
          <h2 className="font-bold text-2xl mb-4">Privacy</h2>
          <ul className="space-y-5 cursor-pointer">
            <li className="text-gray-300">Home</li>
            <li className="text-gray-300">About</li>
            <li className="text-gray-300">Product</li>
            <li className="text-gray-300">Contact</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h2 className="font-bold text-2xl mb-4">Contact us</h2>
          <div>
            <i className="fa-solid fa-phone text-mainColor mr-1 mb-3"></i>{" "}
            01156581025
          </div>
          <div>
            <i className="fa-regular fa-envelope text-mainColor mr-2"></i>
            Rayan.com
          </div>
          <div className="my-5 flex gap-3 justify-center md:justify-start">
            <span className="text-blue-500 text-lg">
              <i className="fa-brands fa-facebook"></i>
            </span>
            <span className="text-green-500 text-lg">
              <i className="fa-brands fa-square-whatsapp"></i>
            </span>
            <span className="text-rose-500 text-lg">
              <i className="fa-brands fa-square-instagram"></i>
            </span>
            <span className="text-black text-lg">
              <i className="fa-brands fa-github"></i>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
