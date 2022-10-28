import { useState, useEffect } from "react";
import axios from "axios"
import Card from "../../components/Card";
import AddPostModal from "./components/AddPostModal";
import EditPostModal from "./components/EditPostModal";

const Posts = () => {
  const name = "";
  const [isAddPostModalVisible, setIsAddPostModalVisible] = useState();
  const [isEditPostModalVisible, setIsEditPostModalVisible] = useState();
  const [isModalVisible, setIsModalVisible] = useState();
  const [items, setItems] = useState(null);
  const [item, setItem] = useState(null);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get(
      `http://localhost:3333/api/seller/item/find-by-seller/Ws`
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
  
  return (
    <div className="px-20 pt-10 relative">
      <button
        className="text-white font-semibold bg-blue-600 px-2 py-1 mb-5 rounded-lg"
        onClick={onAddPostModalClick}
      >
        Add Post +
      </button>
      <div className="grid grid-cols-4 gap-6">
        {items && items.map((item) => (
          <Card item={item} onClick={() => onEditPostModalClick(item)} />
        ))}
        <AddPostModal
          show={isAddPostModalVisible}
          onClose={onAddPostModalClose}

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
