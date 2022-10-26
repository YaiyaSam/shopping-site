import { Link } from "react-router-dom";

function Checkout() {
    const items = [
      {
        id: 1,
        title: "title 1",
        desc: "dskdnksadsa dsja hdjsa d dhasj ",
        qty: 1,
        price: "3450.00",
      },
      {
        id: 2,
        title: "title 2",
        desc: "dskdnksadsa dshda dsd shdkjas dhsa dhjsa dahsd hsajd sahddsdsd m dsjd",
        qty: 2,
        price: "1000.00",
      },
      {
        id: 3,
        title: "title 3",
        desc: "dskdnksadsa dshdk s s dakj dkadas",
        qty: 1,
        price: "1200.00",
      }
    ];
    
  return (
      <div>
      <div className="flex w-screen px-10 items-center">
        <div className="w-1/3 py-10 pl-10">
          <p className="text-3xl font-semibold mb-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh
          </p>
          <p className="mb-4">
            Lorem ipsum ut laoreet dolore magna aliquam erat volutpat. Ut wisi
            enim ad minim veniam, quis
          </p>
          <Link
            to={"/shop"}
            className="bg-blue-600 text-white px-5 py-1.5 rounded-lg"
          >
            Shop
          </Link>
        </div>
        <div className="w-2/3">
          <img src="/assets/5464026.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
