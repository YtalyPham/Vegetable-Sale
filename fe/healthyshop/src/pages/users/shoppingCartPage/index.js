import { memo } from "react";
import { formatter } from "../../../utils/formater";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import { Quantity } from "../../../component";
import { AiOutlineClose } from "react-icons/ai";
import c1 from "assets/users/images/categories/c1.jpg";

const ShoppingCartPage = () => {
  return (
    <>
      <Breadcrumb name="Giỏ hàng"/>
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
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="shopping__cart__item">
                          <img src={c1} alt="product-pic" />
                          
                        </td>
                        <td>Tên sản phẩm 1</td>
                        <td>{formatter(200000)}</td>
                        <td><Quantity quantity="2" hasAddToCart={false}/></td>
                        <td>{formatter(400000)}</td>
                        <td className="icon__close">
                          <AiOutlineClose/></td>
                         
                    </tr>
                </tbody>
                 
            </table>

          </div>
        </div>
      
    </>
  );
};

export default memo(ShoppingCartPage);
