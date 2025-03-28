import { memo } from "react";
import "./style.scss";
import Breadcrumb from "../theme/breadcrumb";

const ProductDetailPage = () => {
  return (
    <>
      <Breadcrumb name="Chi tiết sản phẩm" />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 ">Hình Ảnh</div>
          <div className="col-lg-6">Chi tiết</div>
        </div>
      </div>
    </>
  );
};

export default memo(ProductDetailPage);
