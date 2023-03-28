import Product from "./Product";
const ProductList = () => {
  const productList = [
    {
      title: "title 7",
      price: 24,
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      image: "https://down-vn.img.susercontent.com/file/vn-11134207-23030-jys9n42qd5nvaf",
      id: "35"
    },
    {
      title: "title 8",
      price: 73,
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      image: "https://down-vn.img.susercontent.com/file/201d2b75b3d1e9fc28f729aa3c4fd4df",
      id: "121"
    }
    ,
    {
      title: "title 20",
      price: 73,
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      image: "https://down-vn.img.susercontent.com/file/201d2b75b3d1e9fc28f729aa3c4fd4df",
      id: "22"
    }
    ,
    {
      title: "title 12",
      price: 73,
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      image: "https://down-vn.img.susercontent.com/file/201d2b75b3d1e9fc28f729aa3c4fd4df",
      id: "15"
    },
    {
      title: "title 7",
      price: 24,
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      image: "https://down-vn.img.susercontent.com/file/vn-11134207-23030-jys9n42qd5nvaf",
      id: "7"
    },
    {
      title: "title 8",
      price: 73,
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      image: "https://down-vn.img.susercontent.com/file/201d2b75b3d1e9fc28f729aa3c4fd4df",
      id: "12"
    }
    ,
    {
      title: "title 20",
      price: 73,
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      image: "https://down-vn.img.susercontent.com/file/201d2b75b3d1e9fc28f729aa3c4fd4df",
      id: "18"
    }
    ,
    {
      title: "title 12",
      price: 73,
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      image: "https://down-vn.img.susercontent.com/file/201d2b75b3d1e9fc28f729aa3c4fd4df",
      id: "11"
    }
  ]

  return (
    <div className="productList">
      <div className="shopee__container">
        <div className="product__content">
          {productList.map((product) => {
            return (
              <Product key={String(product.id)} id={product.id} title={product.title} price={product.price} desc={product.desc} image={product.image} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
