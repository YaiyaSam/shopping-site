import CartItem from "./CartItem";

function Checkout() {

  const checkoutFunction = () => {
    //checkout
  };

    const items = [
      {
        id: 1,
        title: "title 1",
        desc: "dskdnksadsa dsja hdjsa d dhasj ",
        qty: 1,
        price: "3450",
      },
      {
        id: 2,
        title: "title 2",
        desc: "dskdnksadsa dshda dsd shdkjas dhsa dhjsa dahsd hsajd sahddsdsd m dsjd",
        qty: 2,
        price: "1000",
      },
      {
        id: 3,
        title: "title 3",
        desc: "dskdnksadsa dshdk s s dakj dkadas",
        qty: 1,
        price: "1200",
      }
    ];

    return (
      <div class="container px-20 pt-10">
        <div class="flex shadow-md my-10">
          <div class="w-3/4 bg-white px-10 py-10">
            <div class="flex justify-between border-b pb-8">
              <h1 class="font-semibold text-xl">Shopping Cart</h1>
            </div>
            <div class="flex mt-10 mb-5">
              <p className="text-gray-600 text-sm uppercase w-1/5">Product</p>
              <p className="text-center text-gray-600 text-sm uppercase w-1/5 text-center">Quantity</p>
              <p className="text-center text-gray-600 text-sm uppercase w-1/5 text-center">Price</p>
              <p className="text-center text-gray-600 text-sm uppercase w-1/5 text-center">Total</p>
            </div>
            {items.map((item) => (
            <CartItem item={item} />
            ))}
          </div>
          <div class="w-1/4 px-8 py-10 bg-slate-50">
            <h1 class="font-semibold text-xl border-b pb-8">Order Summary</h1>
            <div class="flex justify-between mt-10 mb-5">
              <p className="font-semibold text-sm uppercase"># Items</p>
              <p className="font-semibold text-sm uppercase">3</p>
            </div>
            <div class="flex justify-between py-6">
              <p className="font-semibold text-sm uppercase">Total cost</p>
              <p className="font-semibold text-sm uppercase">600</p>
            </div>
            <button
              className="bg-blue-600 rounded-lg text-white font-semibold py-3 text-sm uppercase w-full"
              onClick={checkoutFunction}
              >
              Checkout
            </button>
          </div>
        </div>
      </div>  
  );
}

export default Checkout;