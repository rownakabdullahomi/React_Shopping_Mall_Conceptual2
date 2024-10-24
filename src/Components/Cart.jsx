/* eslint-disable react/prop-types */


const Cart = ({selectedProducts, handleDeletedProduct}) => {

    return (
        <div className="selected-cart">
            {
                selectedProducts.map((product)=> (
                <div key={product.id} className="flex">
                    <img className="selected-img" src={product.img} alt="" />
                    <p>{product.name}</p>
                    <p>{product.price}$</p>
                    <div><button onClick={()=>handleDeletedProduct(product)} className="cart-delete-btn">Delete</button></div>
                </div>) )
            }
        </div>
    );
};

export default Cart;