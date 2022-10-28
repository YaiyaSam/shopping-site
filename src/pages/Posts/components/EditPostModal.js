function EditPostModal({ show, onClose, item }) {
  const addToCart = () => {
    //post request to create a new post
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
          Edit post
        </p>
        <form action="" className="space-y-4">
          <div className="w-full flex items-center ">
            <label htmlFor="" className="w-2/12">
              Product Name
            </label>
            <input
              defaultValue={item.title}
              type="text"
              className="w-10/12 ml-10 bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
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
              onClick={addToCart}
            >
              Edit
            </button>
            <button
              className="bg-red-600 px-3 py-1 rounded-lg text-white"
              onClick={addToCart}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditPostModal;
