import { memo, useState } from "react";
import "./style.scss";
import useShoppingCart from "hooks/useShoppingCart";
import { SESSION_KEY } from "utils/constant";
import { ReactSession } from "react-client-session";
const Quantity = ({ hasAddToCart = true, product }) => {
  const { addToCart } = useShoppingCart();
  const [quantity,setQuantity] = useState(1);
  //const curCart = ReactSession.get(SESSION_KEY.CART);
  const incrementQuantity = (isPlus) =>{
    if(!isPlus && quantity === 0){
      return;
    }
    setQuantity(isPlus ? quantity + 1 : quantity - 1);
  }
  // Safely retrieve with optional chaining and default value
  // const storedCart = JSON.parse(sessionStorage.getItem('__react_session__')) || {};
  // const totalQuantity = storedCart.cart?.totalQuantity || 0;

  // console.log("QuanTotal: ",totalQuantity); 

  // const firstProductQuantity = storedCart.cart.products[0]?.quantity||0;
  // console.log("QuantPerPro: ",firstProductQuantity);
  
  return (
    <>
      <div className="quantity-container">
        <div className="quantity">
          <span className="qtybtn" onClick={() => incrementQuantity(false)}>-</span>
          <input type="number" value={quantity} readOnly/>
          <span className="qtybtn" onClick={() => incrementQuantity(true)}>+</span>
        </div>
        {hasAddToCart && (
          <button
            type="button"
            className="button-submit"
            onClick={() => {
              addToCart(product, quantity);
              const curCart = ReactSession.get(SESSION_KEY.CART);
              
            }}
          >
            Thêm giỏ hàng
          </button>
        )}
      </div>
    </>
  );
};

export default memo(Quantity);
