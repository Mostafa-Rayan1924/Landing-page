import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ProDetails = () => {
  let [pro, setPro] = useState({});
  let { proId } = useParams();
  //
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${proId}`)
      .then(function (response) {
        // handle success
        setPro(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div className="py-[200px] text-center max-w-full w-[300px] md:w-[600px] mx-auto">
      <div className="border w-full  bg-secondBody cursor-pointer relative group  rounded-lg overflow-hidden p-3">
        <img
          className="max-w-full w-[300px] h-[300px] mx-auto rounded-lg"
          src={pro.image}
        />
        <div className="">
          <h2 className="text-white font-bold my-2">{pro.category}</h2>
          <p className="text-gray-400 leading-relaxed my-4 max-w-full ">
            {pro.title}
          </p>
          <h3 className="text-mainColor">price: {pro.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProDetails;
