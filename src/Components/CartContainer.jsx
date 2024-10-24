const CartContainer = ({ handleIsActiveState }) => {
  return (
    <div>
      <h1>Cart Container.jsx</h1>
      <div className="toggle flex justify-between">
        <div
          onClick={() => handleIsActiveState("cart")}
          className="cart-btn btn"
        >
          Cart
        </div>
        <div
          onClick={() => handleIsActiveState("about")}
          className="about-btn btn"
        >
          About
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
