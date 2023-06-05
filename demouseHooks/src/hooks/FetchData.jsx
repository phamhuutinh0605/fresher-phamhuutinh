import { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchDataAsync() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDataAsync();
  }, []);
  return (
    <div>
      <h3>FetchData with useEffect</h3>
      <ul>
        {data.slice(1, 10).map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default FetchData;
