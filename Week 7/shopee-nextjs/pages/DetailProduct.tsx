import React, { useState } from "react";
import { addToCart, changeQuantity } from "../store/productSlice";
import { useAppDispatch } from "../store/store";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Post } from "@/types";
import DetailDescription from "@/components/Molecules/DetailDescription";
import ReviewList from "@/components/Organisms/ReviewList";
import ProductInformation from "@/components/Organisms/ProductInformation";
import Header from "@/components/Organisms/Header";
import Footer from "@/components/Organisms/Footer";

export type Product = {
  id: String;
  title: String;
  price: Number;
  desc: String;
  image: String;
  quantity: Number;
};
const DetailProduct = () => {
  const router = useRouter();
  const { product } = router.query;
  let productParse: Product = {
    id: "",
    title: "",
    price: 0,
    desc: "",
    image: "",
    quantity: 0,
  };
  if (product) {
    productParse = JSON.parse(product as string);
  }

  const [id, setId] = useState(productParse.id);
  const [title, setTitle] = useState(productParse.title);
  const [price, setPrice] = useState<Number>(productParse.price);
  const [image, setImage] = useState(productParse.image);
  const [desc, setDessc] = useState(productParse.desc);
  const [quantity, setQuantity] = useState<Number>(productParse.quantity);
  const dispatch = useAppDispatch();

  // change quantity
  const handleChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
    dispatch(
      changeQuantity({
        id: String(id),
        quantity: Number(event.target.value),
      })
    );
  };

  //add to cart
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: String(id),
        title: String(title),
        price: Number(price),
        desc: String(desc),
        image,
        quantity: Number(quantity),
      })
    );
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://6183caa491d76c00172d1b4b.mockapi.io/api/review`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  console.log(posts);

  const handleFilterPost = () => {
    return posts.filter(
      (item: Post) =>
        item.idProduct[0] === id ||
        item.idProduct[1] === id ||
        item.idProduct[2] === id
    );
  };
  return (
    <>
      <Header />
      <div className="product__detail">
        <div className="product__bg">
          <div className="detail__content shopee__container">
            <div className="detail__left">
              <Image
                alt="green iguana"
                src={String(image)}
                width={300}
                height={100}
              />
            </div>
            <div className="detail__right">
              <ProductInformation
                title={title}
                price={price}
                quantity={quantity}
                handleChangeQuantity={handleChangeQuantity}
                handleAddToCart={handleAddToCart}
              />
            </div>
          </div>
          <DetailDescription desc={desc} />
          <ReviewList handleFilterPost={handleFilterPost} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default DetailProduct;
