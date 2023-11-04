import { useState } from "react";

const Cat = () => {
  let [cat, setCat] = useState([
    {
      id: 1,
      title: "Good Price",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam praesentium porro numquam?",
    },

    {
      id: 2,
      title: "New Product",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam praesentium porro numquam?",
    },
    {
      id: 3,
      title: "Updates",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam praesentium porro numquam?",
    },
    {
      id: 4,
      icon: "d",
      title: "Delivery",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam praesentium porro numquam?",
    },
    {
      id: 5,
      title: "Team Work",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam praesentium porro numquam?",
    },
    {
      id: 6,
      title: "Easy Connect",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam praesentium porro numquam?",
    },
  ]);
  return (
    <div className="my-[250px] py-20 text-white bg-[#2e3267]">
      <div className="container flex flex-col lg:flex-row gap-20">
        <div className="w-full lg:w-[30%]">
          <h2 className="text-4xl font-bold">Categories</h2>
          <p className="text-gray-300 leading-loose my-6 w-full">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            placeat dignissimos minus expedita dicta ipsam mollitia corporis
            illum?
          </p>
          <button className="py-3 px-6  border-2 border-transparent transition-all duration-300 text-white border-white hover:bg-mainColor">
            Learn More
          </button>
        </div>
        <div className="w-full lg:w-[70%]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
            {cat.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-thirdBody py-4 px-6 rounded-2xl border-2 border-transparent transition-all duration-300 hover:border-2 border-transparent hover:border-mainColor">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={
                      "https://images.pexels.com/photos/3876633/pexels-photo-3876633.jpeg?auto=compress&cs=tinysrgb&w=600"
                    }
                  />
                  <h3 className="my-4 font-bold">{item.title}</h3>
                  <p className="text-gray-400 ">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cat;
