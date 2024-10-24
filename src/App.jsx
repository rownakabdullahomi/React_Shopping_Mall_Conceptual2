import { useState } from "react";
import "./App.css";
import AllProducts from "./Components/AllProducts";
import CartContainer from "./Components/CartContainer";
import Navbar from "./Components/Navbar";

function App() {
  const [isActive, setIsActive] = useState({
    status: "cart",
  });

  const [selectedProducts, setSelectedProducts] = useState([]);

  const [price, setPrice] = useState(0);

  const handleIncreasePrice = (pr) => {
    setPrice(price + pr)
  }

  const handleDeletedPrice = (product) => {
    setPrice(price - product.price)
  }

  const handleSelectedProducts = (product) => {
    const isExist = selectedProducts.find((p) => p.id === product.id);
    if (isExist) {
      alert("Product Already Added..!!");
    } else {
      handleIncreasePrice(product.price)
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleDeletedProduct = (product) => {
    handleDeletedPrice(product);
      const remainingProducts = selectedProducts.filter(p => p.id !== product.id)
      setSelectedProducts(remainingProducts);
  }

  const handleIsActiveState = (status) => {
    status === "cart"
      ? setIsActive({ status: "cart" })
      : setIsActive({ status: "about" });
  };

  return (
    <>
      <Navbar selectedProducts={selectedProducts} price={price}></Navbar>
      <div className="flex justify-around">
        <AllProducts
          handleSelectedProducts={handleSelectedProducts}
        ></AllProducts>
        <CartContainer
          isActive={isActive}
          handleIsActiveState={handleIsActiveState}
          selectedProducts={selectedProducts}
          handleDeletedProduct={handleDeletedProduct}
        ></CartContainer>
      </div>
    </>
  );
}

export default App;
