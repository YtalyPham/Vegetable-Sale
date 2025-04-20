import { memo } from "react";
import "./style.scss";
import useShoppingCart from "hooks/useShoppingCart";
import { SESSION_KEY } from "utils/constant";
import { ReactSession } from "react-client-session";
const Quantity = ({ hasAddToCart = true, product }) => {
  const { addToCart } = useShoppingCart();

  return (
    <>
      <div className="quantity-container">
        <div className="quantity">
          <span className="qtybtn">-</span>
          <input type="number" defaultValue={1} />
          <span className="qtybtn">+</span>
        </div>
        {hasAddToCart && (
          <button
            type="button"
            className="button-submit"
            onClick={() => {
              addToCart(product, 1);
              const curCart = ReactSession.get(SESSION_KEY.CART);
              console.log(curCart);
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
