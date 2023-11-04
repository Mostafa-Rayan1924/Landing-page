import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainTitle from "./MainTitle";

const Product = () => {
  let [product, setProduct] = useState([]);
  function handleDel(id) {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        getPro();
        alert("deleted");
      })
      .catch((e) => {
        alert(e);
      });
  }
  function getPro() {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        // handle success
        setProduct(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  let handleEdit = (item) => {
    let confirm = window.prompt(item.title);
    axios
      .put(`https://fakestoreapi.com/products/${item.id}`, {
        title: confirm,
        price: 130.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
      .then((res) => {
        console.log(res);
        alert("item is edited but this api is fake");
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  };
  useEffect(() => {
    getPro();
  }, []);
  return (
    <div className="py-[100px] text-white">
      <MainTitle title={"Api Products"} />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {product.map((item) => {
          return (
            <div
              key={item.id}
              className="border  bg-secondBody cursor-pointer relative group  rounded-lg overflow-hidden p-3">
              <img
                className="max-w-full w-[300px] h-[300px] mx-auto rounded-lg"
                src={item.image}
              />
              <div className="">
                <h2 className="text-white font-bold my-2">{item.category}</h2>
                <p className="text-gray-400 leading-relaxed my-4 max-w-full ">
                  {item.title}
                </p>
                <h3 className="text-mainColor">price: {item.price}</h3>
              </div>
              <div className="absolute transition-all duration-300 text-center  hidden group-hover:grid  top-0 left-0 w-full h-full bg-black/75  grid-cols-3 gap-4 place-content-center">
                <Link to={`/product/${item.id}`} className="bg-blue-500 p-2 ">
                  View
                </Link>
                <button
                  onClick={() => {
                    handleEdit(item);
                  }}
                  className="bg-lime-500 p-2">
                  edit
                </button>
                <button
                  onClick={() => {
                    handleDel(item.id);
                  }}
                  className="bg-red-500 p-2">
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
