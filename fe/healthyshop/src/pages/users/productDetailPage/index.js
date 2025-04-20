import { memo } from "react";
import "./style.scss";
import Breadcrumb from "../theme/breadcrumb";
import c3 from "assets/users/images/categories/c3.jpg";
import c2 from "assets/users/images/categories/c2.jpg";
import c1 from "assets/users/images/categories/c1.jpg";
import {
  AiOutlineCopy,
  AiOutlineEye,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { formatter } from "../../../utils/formatter";
import { ProductCard, Quantity } from "../../../component";
import { featproducts } from "../../../utils/common";
import { useProductDetailUS } from "api/productDetailPage/";
import { useParams } from "react-router-dom";
const ProductDetailPage = () => {
  const imgs = [c1, c2, c3];
  const { id } = useParams();
  const { data: product, isLoading } = useProductDetailUS(id);

  return (
    <>
      <Breadcrumb name="Chi tiết sản phẩm" />
      {!isLoading && (
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-12 col-md-12 col-sm-12 col-xs-12 product__detail__pic">
              <img src={c3} alt="product-pic" />

              <div className="main">
                {imgs.map((item, key) => (
                  <img key={key} src={item} alt="product-pic" />
                ))}
              </div>
            </div>
            <div className="col-lg-6 col-xl-12 col-md-12 col-sm-12 col-xs-12 product__detail__text">
              <h2>{product.name}</h2>
              <div className="seen-icon">
                <AiOutlineEye />
                {` 10 lượt đã xem `}
              </div>
              <h3>{formatter(product.price)}</h3>
              <p>
                {product.sort_description}
              </p>
              <Quantity product={product} />
              <ul>
                <li>
                  <b>Tình trạng:</b> <span>Còn hàng</span>
                </li>
                <li>
                  <b>Số lượng:</b> <span>{product.inventory}</span>
                </li>
                <li>
                  <b>Chia sẻ:</b>{" "}
                  <span>
                    <AiOutlineFacebook />
                    <AiOutlineLinkedin />
                    <AiOutlineCopy />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="product__detail__tab">
            <h4>Thông tin chi tiết</h4>
            <div dangerouslySetInnerHTML={{__html: product.description}}t></div>
          </div>
          <div className="section-title">
            <h2>Sản phẩm tương tự</h2>
          </div>
          <div className="row">
            {featproducts.all.products.map((item, key) => (
              <div key={key} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default memo(ProductDetailPage);
