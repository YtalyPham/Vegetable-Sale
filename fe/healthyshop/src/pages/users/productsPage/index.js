import { memo } from "react";
import "./style.scss";
import Breadcrumb from "../theme/breadcrumb";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../../utils/router";
import f1 from "assets/users/images/featured/f1.jpg";
import f2 from "assets/users/images/featured/f2.jpg";
import f3 from "assets/users/images/featured/f3.jpg";
import f4 from "assets/users/images/featured/f4.jpg";
import f5 from "assets/users/images/featured/f5.jpg";
import f6 from "assets/users/images/featured/f6.jpg";
import f7 from "assets/users/images/featured/f7.jpg";
import f8 from "assets/users/images/featured/f8.jpg";
import { ProductCard } from "../../../component";
import { useGetCategoriesUS } from "../../../api/homePage";

const ProductsPage = () => {
  const sorts = [
    "Giá thấp đến cao",
    "Giá cao đến thấp",
    "Mới đến cũ",
    "Cũ đến mới",
    "Bán chạy nhất",
    "Đang giảm giá",
  ];

  const products = [
    {
      id: 1,
      img: f1,
      name: "Thịt bò nạt",
      price: "20000",
    },
    {
      id: 2,
      img: f2,
      name: "Chuối",
      price: "17800",
    },
    {
      id: 3,
      img: f3,
      name: "Ổi",
      price: "25000",
    },
    {
      id: 4,
      img: f4,
      name: "Dưa hấu",
      price: "44000",
    },
    {
      id: 5,
      img: f5,
      name: "Nho tím",
      price: "120000",
    },
    {
      id: 6,
      img: f6,
      name: "Hamburger",
      price: "86000",
    },
    {
      id: 7,
      img: f7,
      name: "Xoài",
      price: "69000",
    },
    {
      id: 8,
      img: f8,
      name: "Táo Úc",
      price: "53000",
    },
  ];
const { data: categories } = useGetCategoriesUS();
  return (
    <>
      <Breadcrumb name="Danh sách sản phẩm" />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 ">
            <div className="sidebar">
              <div className="sidebar__item">
                <h2>Tìm kiếm</h2>
                <input type="text" />
              </div>
              <div className="sidebar__item">
                <h2>Mức giá</h2>
                <div className="price-range-wrap">
                  <div>
                    <p>Từ:</p>
                    <input type="number" min={0} />
                  </div>
                  <div>
                    <p>Đến:</p>
                    <input type="number" min={0} />
                  </div>
                </div>
              </div>
              <div className="sidebar__item">
                <h2>Sắp xếp</h2>
                <div className="tags">
                  {sorts.map((item, key) => (
                    <div
                      className={`tag ${key === 0 ? "active" : ""}`}
                      key={key}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="sidebar__item">
                <h2>Thể loại khác</h2>
                <ul>
                  <div className="tags">
                    {categories?.map((category, key) => (
                      <li key={key}>
                        <Link to={ROUTERS.USER.PRODUCTS}>{category.name}</Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 ">
            <div className="row">
              {products?.map((item, key) => (
                <div key={key} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <ProductCard
                    product={item}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProductsPage);
