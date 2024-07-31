import Card from "./components/Card/Card";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

const productData = [
  {
    img: "/public/product-img.png",
    title: "Harvest Vase",
    subtitle: "BY STUDIO AND FRIENDS",
    desc: "Harvest Vases are a reinterpretation of peeled fruits and vegetables as functional objects. The surfaces appear to be sliced and pulled aside, allowing room for growth.",
    price: "125 $",
  },
  {
    img: "/public/mountain-bicycle.jpg",
    title: "Goods name 1",
    subtitle: "Goods sub-title 1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit voluptates blanditiis enim nostrum soluta pariatur quasi tempora sunt molestias dolore. Nisi qui reiciendis exercitationem facilis doloremque, a quidem illo veritatis facilis doloremque, a quidem illo veritatis facilis doloremque, a quidem illo veritatis facilis doloremque, a quidem illo veritatis.",
    price: "2500 $",
  },
  {
    img: "/public/mountain-bicycle2.jpg",
    title: "Goods name 1",
    subtitle: "Goods sub-title 1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit voluptates blanditiis enim nostrum soluta pariatur quasi tempora sunt molestias dolore. Nisi qui reiciendis exercitationem facilis doloremque, a quidem illo veritatis facilis doloremque, a quidem illo veritatis facilis doloremque, a quidem illo veritatis facilis doloremque, a quidem illo veritatis.",
    price: "1800 $",
  },
  {
    img: "/public/mountain-bicycle3.jpg",
    title: "Goods name 1",
    subtitle: "Goods sub-title 1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit voluptates blanditiis enim nostrum soluta pariatur quasi tempora sunt molestias dolore. Nisi qui reiciendis exercitationem facilis doloremque, a quidem illo veritatis facilis doloremque, a quidem illo veritatis facilis doloremque, a quidem illo veritatis facilis doloremque, a quidem illo veritatis.",
    price: "3250 $",
  },
];

function App() {
  const [imgInfo, setImgInfo] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClose = () => {
    setIsModalOpen(false);
  };

  const onOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="products-wrap flex flex-wrap gap-10 py-[40px]">
      {productData.map((item, index) => {
        return (
          <Card key={index} setImgInfo={setImgInfo} onOpen={onOpen} {...item} />
        );
      })}

      <Modal imgInfo={imgInfo} isOpen={isModalOpen} onClose={onClose} />
    </div>
  );
}

export default App;
