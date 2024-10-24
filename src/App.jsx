import "./App.css";
import AllProducts from "./Components/AllProducts";
import CartContainer from "./Components/CartContainer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-between">
        <AllProducts></AllProducts>
        <CartContainer></CartContainer>
      </div>
    </>
  );
}

export default App;
