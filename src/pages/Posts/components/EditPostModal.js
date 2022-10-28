import { useState } from "react";

import axios from "axios"


function EditPostModal({ show, onClose, item, }) {
  const [name, setName] = useState(item?.name);
  const [price, setPrice] = useState(item?.price);
  const [qty, setQty] = useState(item?.qty);

  const editPost = (item) => {
    //post request to create a new post
    if ((name, price, qty)) {
      axios
        .post(`http://localhost:3333/api/seller/item/update`, {
          _id: item._id, name:name, price:price, qty:qty, seller:"Ws"
        })
        .then((response) => console.log(response));
    }
    onClose();
  };

  const handleNameChange = event => {
    setName(event.target.value)
  }
  const handlePriceChange = event => {
    setPrice(event.target.value)
  }
  const handleQtyChange = (event) => {
    setQty(event.target.value);
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
          Edit post
        </p>
        <div className="space-y-4">
          <div className="w-full flex items-center ">
            <label htmlFor="" className="w-2/12">
              Product Name
            </label>
            <input
              defaultValue={item.name}
              type="text"
              className="w-10/12 ml-10 bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="w-full flex items-center ">
            <label htmlFor="" className="w-2/12">
              Quantity
            </label>
            <input
              defaultValue={item.qty}
              type="text"
              className="w-10/12 ml-10 bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              value={qty}
              onChange={handleQtyChange}
            />
          </div>
          <div className="w-full flex items-center ">
            <label htmlFor="" className="w-2/12">
              Price
            </label>
            <input
              defaultValue={item.price}
              type="text"
              className="w-10/12 ml-10 bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              value={price}
              onChange={handlePriceChange}
            />
          </div>
          <div className="w-full flex items-center ">
            <label htmlFor="" className="w-2/12">
              Description
            </label>
            <textarea
              defaultValue={item.desc}
              type="text"
              className="w-10/12 ml-10 bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            />
          </div>
          <div className="flex space-x-3">
            <button
              className="bg-blue-600 px-3 py-1 rounded-lg text-white"
              onClick={()=>editPost(item._id,name,qty,price)}
            >
              Edit
            </button>
          
          </div>
        </div>
      </div>
    );
  }
}

export default EditPostModal;
