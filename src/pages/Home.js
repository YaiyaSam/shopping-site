import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../App";
function Home() {

  const user = useContext(UserContext)
  console.log(user)
  return (
    <div>
      <div className="flex w-screen px-10 items-center">
        <div className="w-1/3 py-10 pl-10">
          <p className="text-3xl font-semibold mb-2">
            Discover products for a well lived life
          </p>
          <p className="mb-4">
            Experience the new generation of shopping. Fast, Reliable and Efficient. Whatever you want to buy is only one click away from being yours
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
