function AddPostModal({ show, onClose, item }) {
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
        <form action="" className="space-y-4">
          <div className="w-full flex items-center ">
            <label htmlFor="" className="w-2/12">
              Product Name
            </label>
            <input
              type="text"
              className="w-10/12 ml-10 bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            />
          </div>
          <div className="w-full flex items-center ">
            <label htmlFor="" className="w-2/12">
              Quantity
            </label>
            <input
              type="text"
              className="w-10/12 ml-10 bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            />
          </div>
          <div className="w-full flex items-center ">
            <label htmlFor="" className="w-2/12">
              Price
            </label>
            <input
              type="text"
              className="w-10/12 ml-10 bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            />
          </div>
          <div className="w-full flex items-center ">
            <label htmlFor="" className="w-2/12">
              Description
            </label>
            <textarea
              type="text"
              className="w-10/12 ml-10 bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            />
          </div>
          <button className="bg-blue-600 py-1 px-5 rounded-lg text-white" onClick={onClose}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddPostModal;