import { memo } from "react";
import { formatter } from "../../../utils/formatter";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import { Quantity } from "../../../component";
import { AiOutlineClose } from "react-icons/ai";
import c1 from "assets/users/images/categories/c1.jpg";
import { ROUTERS } from "../../../utils/router";
import { useNavigate } from "react-router-dom";
import { SESSION_KEY } from "utils/constant";
import {ReactSession} from 'react-client-session';
const ShoppingCartPage = () => {
  const navigate = useNavigate();
  const curCart = ReactSession.get(SESSION_KEY.CART);
  
  console.log("Gio hang: ",curCart)
  return (
    <>
      <Breadcrumb name="Giỏ hàng" />
      <div className="container">
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
              <tr>
                <td className="shopping__cart__item">
                  <img src={c1} alt="product-pic" />
                </td>
                <td>Tên sản phẩm 1</td>
                <td>{formatter(200000)}</td>
                <td>
                  <Quantity quantity="2" hasAddToCart={false} />
                </td>
                <td>{formatter(400000)}</td>
                <td className="icon__close">
                  <AiOutlineClose />
                </td>
              </tr>
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
                  Số lượng: <span>{2}</span>
                </li>
                <li>
                  Thành tiền: <span>{formatter(200000)}</span>
                </li>
              </ul>
              <button
                className="button-submit"
                type="button"
                onClick={() => 
                  navigate(ROUTERS.USER.CHECKOUT)
                }>
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ShoppingCartPage);
