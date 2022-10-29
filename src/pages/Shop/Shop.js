import { useState, useEffect } from "react";

import Card from "../../components/Card";
import Modal from "./components/Modal";
import axios from "axios";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [isModalVisible, setIsModalVisible] = useState();
  const [items, setItems] = useState(null);
  const [item, setItem] = useState(null);

  const fetchItems = async () => {
    const response = await axios.get(
      "http://localhost:3333/api/seller/item/find-all",
      {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }
    );
    setItems(response.data);
  };
    function handleSearch(keyword) {
      const searchText = keyword.trim().toLowerCase();
      if (searchText === "") {
        fetchItems();
      } else {
        console.log("heell");
        const filteredItems= items.filter((p) => {
          return (
            p.name.toLowerCase().includes(searchText)
          );
        });
        setItems(filteredItems);
      }
    }

  const onViewItem = (item) => {
    console.log(item);
    setItem(item);
    setIsModalVisible(true);
  };

  const onClose = () => {
    setIsModalVisible(false);
  };

  // const addToCart = (item) => {
  //   let products = [];
  //   if (localStorage.getItem("products")) {
  //     products = JSON.parse(localStorage.getItem("products"));
  //   }
  //   const found = products.some((i) => i.id === item._id);
  //   if (!found) {
  //     products.push({
  //       id: item._id,
  //       name: item.name,
  //       price: item.price,
  //       qty: item.qty,
  //     });
  //   }
  //   localStorage.setItem("products", JSON.stringify(products));


  // };

  return (
    <div className="px-20 pt-10 relative">
      <input
        type="search"
        id="default-search"
        className="block p-2 pl-10 w-full text-lg rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-200 mb-10 outline-0"
        placeholder="Search users..."
        onChange={(event) => handleSearch(event.target.value)}
      />
      <div className="grid grid-cols-4 gap-6">
        {items &&
          items.map((item) => {
            return <Card item={item} onClick={() => onViewItem(item)} />;
          })}

        {!items && <p>Currently you have no active posts</p>}

        <Modal show={isModalVisible} onClose={onClose} item={item} />
      </div>
    </div>
  );
}

export default Shop;
