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
      <div className="grid grid-cols-4 gap-6">
        {items &&
          items.map((item) => {
            return <Card item={item} onClick={() => onViewItem(item)} />;
          })}
        
        {!items && (<p>Currently you have no active posts</p>)}

        <Modal
          show={isModalVisible}
          onClose={onClose}
          item={item}
        
        />
      </div>
    </div>
  );
}

export default Shop;
