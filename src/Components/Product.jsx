/* eslint-disable react/prop-types */

const Product = ({product}) => {
    const {id, name, img, price, ratings} = product
    console.log(product);
    return (
        <div className="card">
            <img className="img" src={img} alt="" />
            <h2>{name}</h2>
            <h4>Id: {id}</h4>
            <h4>Price: {price}$</h4>
            <h4>Rating: {ratings}</h4>
            <button className="btn">Add To Cart</button>
        </div>
        
    );
};

export default Product;