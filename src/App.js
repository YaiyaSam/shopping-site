import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop/Shop";
import Posts from "./pages/Posts/Posts";
import Checkout from "./pages/Checkout";


function App() {
  const navbar_links = [
    
  ]


  return (
    <div className="h-screen w-screen">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/shop"} element={<Shop />}></Route>
            <Route path={"/posts"} element={<Posts />}></Route>
            <Route path={"/checkout"} element={<Checkout />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
