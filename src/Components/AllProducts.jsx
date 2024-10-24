import { useEffect, useState } from "react";
import Product from "./Product";

const AllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("./FakeData.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <h1>All Products.jsx</h1>
            {
                products.map(product => <Product product={product} key={product.id}></Product>)
            }
        </div>
    );
};

export default AllProducts;