import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";

function Layout(props) {
  const { children } = props;
  return (
    <div>
      <nav className="h-14 w-full bg-white drop-shadow-md items-center flex px-20 justify-between">
        <div className="text-2xl">Logo</div>
        <div>
          <div className="flex space-x-10 items-center">
            <Link to={"/"} className="hover:text-blue-600" >
              Home
            </Link>
            <Link to={"/shop"} className="hover:text-blue-600">
              Shop
            </Link>
            <Link to={"/posts"} className="hover:text-blue-600">
              My Posts
            </Link>
            <Link to={"/checkout"} className="hover:text-blue-600">
              <HiOutlineShoppingCart size="20px" />
            </Link>
            <button className="bg-blue-600 py-1 px-5 rounded-lg text-white">
              Login
            </button>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
