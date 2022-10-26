import { useState, useEffect } from "react";

import Card from "../../components/Card";
import Modal from "./components/Modal";

const Shop = () => {
  const [isModalVisible, setIsModalVisible] = useState();
  const [item, setItem] = useState(null);

  const items = [
    {
      id: 1,
      title: "title 1",
      desc: "dskdnksadsa dsja hdjsa d dhasj ",
      qty: 1,
      price: "3450.00",
    },
    {
      id: 2,
      title: "title 2",
      desc: "dskdnksadsa dshda dsd shdkjas dhsa dhjsa dahsd hsajd sahddsdsd m dsjd",
      qty: 2,
      price: "1000.00",
    },
    {
      id: 3,
      title: "title 3",
      desc: "dskdnksadsa dshdk s s dakj dkadas",
      qty: 1,
      price: "1200.00",
    },
    {
      id: 4,
      title: "title 4",
      desc: "dskdnksadsa",
      qty: 1,
      price: "23000.00",
    },
    {
      id: 5,
      title: "title 5  hdjhd sadkj sadhsaj djsa djsa djsa dhjsa dkjashd ",
      desc: "dskdnksadsa dks d s dhsjd sjad sakd dkj sdk asdkj ad dsjahd a kj dahs d dshajd sahd sdhkja dj hak",
      qty: 4,
      price: "1030.00",
    },
  ];

  const onViewItem = (item) => {
    console.log(item);
    setIsModalVisible(true);
    setItem(item);
  };

  const onClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="px-20 pt-10 relative">
      <div className="grid grid-cols-4 gap-6">
        {items.map((item) => (
          <Card item={item} onClick={() => onViewItem(item)} />
        ))}
        <Modal
          show={isModalVisible}
          onClose={onClose}
          item={item}
        />
      </div>
    </div>
  );
};

export default Shop;
