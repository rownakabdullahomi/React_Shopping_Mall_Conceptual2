/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Product from "./Product";

const AllProducts = ({ handleSelectedProducts }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./FakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div className="grid">
        {products.map((product) => (
          <Product
            handleSelectedProducts={handleSelectedProducts}
            product={product}
            key={product.id}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
