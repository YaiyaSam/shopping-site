import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useContext,  } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

function Layout(props) {

  useEffect(() => {
    
  },[])
  const navigate = useNavigate();
  const { children } = props;
  const user = JSON.parse(localStorage.getItem("user"))
   const token = JSON.parse(localStorage.getItem("token"));

  const onSignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  return (
    <div>
      <nav className="h-14 w-full bg-white drop-shadow-md items-center flex px-20 justify-between">
        <div className="text-2xl">Logo</div>
        <div>
          <div className="flex space-x-10 items-center">
            <Link to={"/"} className="hover:text-blue-600">
              Home
            </Link>
            <Link to={"/shop"} className="hover:text-blue-600">
              Shop
            </Link>
            {user?.role === "seller" && (<Link to={"/posts"} className="hover:text-blue-600">
              Products
            </Link>)}
            
            <Link to={"/checkout"} className="hover:text-blue-600">
              <HiOutlineShoppingCart size="20px" />
            </Link>
            {!token ? (
              <>
                <Link
                  
                  to={"/login"}
                  className="bg-blue-600 py-1 px-5 rounded-lg text-white"
                >
                  Login
                </Link>
                <Link
                  to={"/signup"}
                  className="bg-blue-600 py-1 px-5 rounded-lg text-white"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <button
                onClick={onSignOut}
                className="bg-blue-600 py-1 px-5 rounded-lg text-white"
              >
                Sign out
              </button>
            )}
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
