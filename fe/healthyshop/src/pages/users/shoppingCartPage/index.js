import { memo, useState } from "react";
import { formatter } from "../../../utils/formatter";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import { Quantity } from "../../../component";
import { AiOutlineClose } from "react-icons/ai";
 
import { ROUTERS } from "../../../utils/router";
import { useNavigate } from "react-router-dom";
import { SESSION_KEY } from "utils/constant";
import { ReactSession } from "react-client-session";

import useShoppingCart from "hooks/useShoppingCart";
const ShoppingCartPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(ReactSession.get(SESSION_KEY.CART));
  const {removeCart} = useShoppingCart();

  return (
    <>
      <Breadcrumb name="Giỏ hàng" />
      {
        cart && <div className="container">
        <div className="table__cart">
          <table>
            <thead>
              <tr>
                <th>Số TT</th>
                <th>Tên sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cart?.products.map(({product, quantity},key) => (
                <tr key={key}>
                  <td className="shopping__cart__item">
                    <img src={product.img} alt="product-pic" />
                  </td>
                  <td>{product.name}</td>
                  <td>{formatter(product.price)}</td>
                  <td>
                    <Quantity initQuantity={quantity} hasAddToCart={false} />
                  </td>
                  <td>{formatter(product.price * quantity)}</td>
                  <td className="icon__close" onClick={() => setCart(removeCart(product.id))}>
                    <AiOutlineClose />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="shopping__continue">
              <h3>Mã giảm giá :</h3>
              <div className="shopping__discount">
                <input placeholder="Nhập mã giảm giá" />
                <button type="button" className="button-submit">
                  Áp dụng
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="shopping__checkout">
              <h2>Tổng đơn :</h2>
              <ul>
                <li>
                  Số lượng: <span>{cart.totalQuantity}</span>
                </li>
                <li>
                  Thành tiền: <span>{formatter(cart.totalPrice)}</span>
                </li>
              </ul>
              <button
                className="button-submit"
                type="button"
                onClick={() => navigate(ROUTERS.USER.CHECKOUT)}
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
      }
     
    </>
  );
};

export default memo(ShoppingCartPage);
