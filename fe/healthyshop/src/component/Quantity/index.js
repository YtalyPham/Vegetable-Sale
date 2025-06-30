import { memo, useState } from "react";
import "./style.scss";
import useShoppingCart from "hooks/useShoppingCart";
import { SESSION_KEY } from "utils/constant";
import { ReactSession } from "react-client-session";
const Quantity = ({ hasAddToCart = true, product, initQuantity }) => {
  const { addToCart } = useShoppingCart();
  const [quantity,setQuantity] = useState(initQuantity || 1);
 
  const incrementQuantity = (isPlus) =>{
    if(!isPlus && quantity === 0){
      return;
    }
    setQuantity(isPlus ? quantity + 1 : quantity - 1);
  }
  
  
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
