import { useEffect, useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop/Shop";
import Posts from "./pages/Posts/Posts";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import React from "react";
export const UserContext = React.createContext();
function App() {
  
  useEffect(() => {
    fetchUser();
  }, []);

  const [loggedInUser, setLoggedInUser] = useState(null);

  const fetchUser = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoggedInUser(user);
    }
  };

  return (
    <div className="h-screen w-screen">
      <UserContext.Provider value={loggedInUser}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path={"/"} element={<Home />}></Route>
              <Route path={"/signup"} element={<Signup />}></Route>
              <Route path={"/login"} element={<Login />}></Route>
              <Route path={"/shop"} element={<Shop />}></Route>
              <Route path={"/posts"} element={<Posts />}></Route>
              <Route path={"/checkout"} element={<Checkout />}></Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
