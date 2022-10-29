import { useRef, useEffect, useState } from "react";
import axios from "axios";

function AddPostModal({ show, onClose, seller }) {
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [qty, setQty] = useState("");

  const name = useRef();
  const price = useRef();
  const qty = useRef();
  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };
  // const handlePriceChange = (event) => {
  //   setPrice(event.target.value);
  // };
  // const handleQtyChange = (event) => {
  //   setQty(event.target.value);
  // };

  const add = () => {
    const item = {
      name: name.current?.value,
      price: price.current?.value,
      qty: qty.current?.value,
      seller: seller,
    };
    const response = axios.post(
      "http://localhost:3333/api/seller/item/create",
      item,

      {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }
    ).then((response => {
      window.location.href = "/posts";
    }));
    console.log(response);
    alert("Post added!");
    onClose();
  };
  if (show) {
    return (
      <div className="py-3 px-10 pb-10 w-3/5 space-y-3 bg-gray-50 fixed place-self-center rounded-lg shadow-xl border-2 border-solid border-gray-200 ">
        <div
          className="text-end text-lg font-semibold cursor-pointer"
          onClick={onClose}
        >
          x
        </div>
        <p className="text-2xl font-semibole text-gray-700 mb-10 pb-5">
          Add new post
        </p>
        <div className="space-y-4">
          <div className="w-full flex items-center ">
            <label htmlFor="" className="w-2/12">
              Product Name
            </label>
            <input
              type="text"
              className="w-10/12 ml-10 bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              // onChange={() => handleNameChange}
              ref={name}
            />
          </div>
          <div className="w-full flex items-center ">
            <label htmlFor="" className="w-2/12">
              Quantity
            </label>
            <input
              type="text"
              className="w-10/12 ml-10 bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              // onChange={() => handleQtyChange}
              ref={qty}
            />
          </div>
          <div className="w-full flex items-center ">
            <label htmlFor="" className="w-2/12">
              Price
            </label>
            <input
              type="text"
              className="w-10/12 ml-10 bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              // onChange={() => handlePriceChange}
              ref={price}
            />
          </div>

          <button
            className="bg-blue-600 py-1 px-5 rounded-lg text-white"
            onClick={add}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default AddPostModal;
