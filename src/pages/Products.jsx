import { useEffect, useState } from "react";
import Card from "../component/Card";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setProducts(result));
  });

  return (
    <>
      <div className="container m-auto">
        <div className="my-5 flex flex-wrap gap-4 items-center">
          {products.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
      </div>
    </>
  );
};
