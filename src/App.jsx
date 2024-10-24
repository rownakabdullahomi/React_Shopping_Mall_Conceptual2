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

  const handleSelectedProducts = (product) => {
    const isExist = selectedProducts.find((p) => p.id === product.id);
    if (isExist) {
      alert("Product Already Added..!!");
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleIsActiveState = (status) => {
    status === "cart"
      ? setIsActive({ status: "cart" })
      : setIsActive({ status: "about" });
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-around">
        <AllProducts
          handleSelectedProducts={handleSelectedProducts}
        ></AllProducts>
        <CartContainer
          isActive={isActive}
          handleIsActiveState={handleIsActiveState}
        ></CartContainer>
      </div>
    </>
  );
}

export default App;
