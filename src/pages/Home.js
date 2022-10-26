import { Link } from "react-router-dom"

function Home() {
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
          <Link to={"/shop"} className="bg-blue-600 text-white px-5 py-1.5 rounded-lg">
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

export default Home;
