/* eslint-disable react/prop-types */

const Navbar = ({selectedProducts, price}) => {
    return (
        <div>
            <div>
                <ul className="flex nav-list">
                    <li>Home</li>
                    <li>Product</li>
                    <li>Cart {selectedProducts.length}</li>
                    <li>$ {price}</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;