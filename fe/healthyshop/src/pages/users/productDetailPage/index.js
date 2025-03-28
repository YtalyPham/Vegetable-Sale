import { memo } from "react";
import "./style.scss";
import Breadcrumb from "../theme/breadcrumb";
import c3 from "assets/users/images/categories/c3.jpg";
import c2 from "assets/users/images/categories/c2.jpg";
import c1 from "assets/users/images/categories/c1.jpg";
import { AiOutlineCopy, AiOutlineEye, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { formatter } from "../../../utils/formater";
const ProductDetailPage = () => {
const imgs=[c1,c2,c3];

  return (
    <>
      <Breadcrumb name="Chi tiết sản phẩm" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 product__detail__pic">
          <img src={c3} alt="product-pic"/>
            
            <div className="main">
              {imgs.map((item,key)=>(
                <img key={key} src={item} alt="product-pic"/>
              ))}
            </div>
          </div>
          <div className="col-lg-6 product__detail__text">
            <h2>Rau củ xanh</h2>
            <div className="seen-icon">
              <AiOutlineEye/>
              {` 10 lượt đã xem `}
            </div>
            <h3>{formatter(2000000)}</h3>
            <p>
            Healthy Shop là một trong những hệ thống cửa hàng hoa quả 
            nhập khẩu ở TP.HCM cung cấp cho quý khách những trái dưa 
            lưới Egarden tươi ngon nhất cũng như các loại hoa quả nhập khẩu, 
            hoa quả vùng miền khác.
            </p>
            <ul>
              <li>
                <b>Tình trạng:</b> <span>Còn hàng</span>
              </li>
              <li>
                <b>Số lượng:</b> <span>20</span>
              </li>
              <li>
                <b>Chia sẻ:</b>{" "}
                <span>
                <AiOutlineFacebook/>
                <AiOutlineLinkedin/>
                <AiOutlineCopy/>
                </span>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProductDetailPage);
