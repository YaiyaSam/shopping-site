const Modal = ({ show, onClose, item, addToCart }) => {
  // const addToCart = () => {
  //   //post request to create a new post

  //   let products = [];
  //   if (localStorage.getItem("products")) {
  //     products = JSON.parse(localStorage.getItem("products"));
  //   }
  //   products.push({ productId: item.id, name: item.name, price: item.price, qty:item.qty});
  //   localStorage.setItem("products", JSON.stringify(products));

  //   onClose();
  // };

  if (show) {
    return (
      <div className="py-3 px-10 pb-10 w-2/5 space-y-3 bg-gray-50 fixed place-self-center rounded-lg shadow-xl border-2 border-solid border-gray-200 ">
        <div
          className="text-end text-lg font-semibold cursor-pointer"
          onClick={onClose}
        >
          x
        </div>
        <div className="text-xl font-semibold w-full ">{item.name}</div>
        <div>Description: {item.desc}</div>

        <div className="flex space-x-4 border-b-2 pb-2">
          <div>Price: {item.price} </div>
          <div>Quantity: {item.qty}</div>
        </div>

        <div className="flex">
          <div className="w-1/4">
            <input
              type="number"
              className="text-center outline-none border-2 border py-1 w-6/12 rounded-lg"
            />
          </div>
          <button
            className="-ml-10 bg-blue-600 px-2 rounded-lg text-white font-semibold"
            onClick={addToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
};

export default Modal;
