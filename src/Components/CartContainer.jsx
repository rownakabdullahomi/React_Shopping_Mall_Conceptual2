import About from "./About";
import Cart from "./Cart";

/* eslint-disable react/prop-types */
const CartContainer = ({ handleIsActiveState, isActive }) => {
  return (
    <div>
      <h1>Cart Container.jsx</h1>
      <div className="toggle flex justify-between">
        <div
          onClick={() => handleIsActiveState("cart")}
          className={`${isActive.status === "cart" ? "btn active" : "btn"}`}
        >
          Cart
        </div>
        <div
          onClick={() => handleIsActiveState("about")}
          className={`${isActive.status === "about" ? "btn active" : "btn"}`}
        >
          About
        </div>
      </div>

      {
        isActive.status === "cart" ? <Cart></Cart> : <About></About>
      }

    </div>
  );
};

export default CartContainer;
