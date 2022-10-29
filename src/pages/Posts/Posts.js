import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "../../components/Card";
import AddPostModal from "./components/AddPostModal";
import EditPostModal from "./components/EditPostModal";
import { UserContext } from "../../App";
import userEvent from "@testing-library/user-event";

const Posts = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const [isAddPostModalVisible, setIsAddPostModalVisible] = useState();
  const [isEditPostModalVisible, setIsEditPostModalVisible] = useState();
  const [isModalVisible, setIsModalVisible] = useState();
  const [items, setItems] = useState(null);
  const [item, setItem] = useState(null);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    console.log(user)
    const response = await axios.get(
      `http://localhost:3333/api/seller/item/find-by-seller/${user.email}`,
      {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }
    );
    setItems(response.data);
    console.log(items);
  };

  const onAddPostModalClick = () => {
    setIsAddPostModalVisible(true);
  };

  const onEditPostModalClick = (item) => {
    setIsEditPostModalVisible(true);
    setItem(item);
  };

  const onAddPostModalClose = () => {
    setIsAddPostModalVisible(false);
  };
  const onEditPostModalClose = () => {
    setIsEditPostModalVisible(false);
  };

  // const editPost = (id, name, qty, price) => {
  //   //post request to create a new post
  //   if ((name, price, qty)) {
  //     axios
  //       .post(`http://localhost:3333/api/seller/item/update`, {
  //         _id: id,
  //         name: name,
  //         price: price,
  //         qty: qty,
  //         seller: "Ws",
  //       })
  //       .then((response) => console.log(response));
  //   }
  //   fetchItems();
  //   onEditPostModalClose();
  // };

  return (
    <div className="px-20 pt-10 relative">
      <button
        className="text-white font-semibold bg-blue-600 px-2 py-1 mb-5 rounded-lg"
        onClick={onAddPostModalClick}
      >
        Add Post +
      </button>
      <div className="grid grid-cols-4 gap-6">
        {items &&
          items.map((item) => (
            <Card item={item} onClick={() => onEditPostModalClick(item)} />
          ))}
        <AddPostModal
          show={isAddPostModalVisible}
          onClose={onAddPostModalClose}
          seller = {user?.email}
        />
        <EditPostModal
          show={isEditPostModalVisible}
          onClose={onEditPostModalClose}
          item={item}
        ></EditPostModal>
      </div>
    </div>
  );
};

export default Posts;
