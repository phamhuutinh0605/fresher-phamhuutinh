import { useEffect, useMemo, useState } from "react";

const Total = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  // without useMemo
  const total = () => {
    return products.reduce((result, product) => {
      console.log("Tính toán lại...");
      return result + product.price;
    }, 0);
  };

  // with useMemo
  // const total = useMemo(() => {
  //   return products.reduce((result, product) => { // chưa đạt
  //     console.log("Tính toán lại...");
  //     return result + product.price;
  //   }, 0);
  // }, [products]);
  return (
    <>
      <h3>Total with useMemo</h3>
      <div className="form__group">
        <input
          type="input"
          value={name}
          onChange={handleChangeName}
          className="form__field"
          placeholder="Name..."
          required
        />
        <br />
        <input
          type="text"
          value={price}
          onChange={handleChangePrice}
          className="form__field"
          placeholder="Price..."
          required
        />
        <br />
        <div className="btn__actions">
          <button onClick={handleSubmit} style={{ margin: 20 }}>
            Add
          </button>
          Total: {total()}
        </div>
        <ul>
          {products.map((product, index) => {
            return (
              <li key={index} style={{ width: "100%" }}>
                {product.name} - {product.price}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Total;
