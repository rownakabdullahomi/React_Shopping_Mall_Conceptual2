import { useState } from "react";
import "./App.css";
import AllProducts from "./Components/AllProducts";
import CartContainer from "./Components/CartContainer";
import Navbar from "./Components/Navbar";

function App() {
  const [isActive, setIsActive] = useState({
    status: "cart",
  });

  const handleIsActiveState = (status) => {
    status === "cart"? setIsActive({status: "cart"}):setIsActive({status: "about"})
  };

  console.log(isActive);

  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-between">
        <AllProducts></AllProducts>
        <CartContainer handleIsActiveState={handleIsActiveState}></CartContainer>
      </div>
    </>
  );
}

export default App;
