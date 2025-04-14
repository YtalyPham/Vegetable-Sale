import { memo, useEffect, useState } from "react";
import "./style.scss";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineDownCircle,
  AiOutlineUpCircle,
} from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { formatter } from "../../../../utils/formatter";
import { ROUTERS } from "../../../../utils/router";
export const categories = [
  "Thịt tươi",
  "Rau củ",
  "Nước trái cây",
  "Trái cây",
  "Hải sản",
];
const Header = () => {
  const navigate = useNavigate();
  const location= useLocation();
  const [isShowHumberger, setisShowHumberger] = useState(false);
  const [isHome, setisHome] = useState(location.pathname.length <= 1);
  const [isShowCategories, setisShowCategories] = useState(isHome);
  const [menus, setMenus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa hàng",
      path: ROUTERS.USER.PRODUCTS,
    },
    {
      name: "Sản phẩm",
      path: "",
      isShowSubmenu: false,
      child: [
        {
          name: "Thịt",
          path: "",
        },
        {
          name: "Rau củ",
          path: "",
        },
        {
          name: "Thức ăn nhanh",
          path: "",
        },
      ],
    },
    {
      name: "Bài viết",
      path: "",
    },
    {
      name: "Liên hệ",
      path: "",
    },
  ]);
 
  useEffect(()=>{
    const isHome = location.pathname.length <= 1;
    setisHome(isHome);
    setisShowCategories(isHome);
  },[location]);
  return (
    <>
      <div
        className={`humberger__menu__overlay ${
          isShowHumberger ? "active" : ""
        }`}
        onClick={() => setisShowHumberger(false)}
      ></div>
      <div
        className={`humberger__menu__wrapper ${isShowHumberger ? "show" : ""}`}
      >
        <div className="header__logo">
          <h1>Healthy SHOP</h1>
        </div>
        <div className="humberger__menu__cart">
          <ul>
            <li>
              <Link to={ROUTERS.USER.SHOPPING_CART}>
                <AiOutlineShoppingCart /> <span>1</span>
              </Link>
            </li>
          </ul>
          <div className="header__cart__price">
            Giỏ hàng: <span>{formatter(101020)}</span>
          </div>
        </div>
        <div className="humberger__menu__widget">
          <div className="header__top__right__auth">
            <Link to={""}>
              <AiOutlineUser /> Đăng nhập
            </Link>
          </div>
        </div>
        <div className="humberger__menu__nav">
          <ul>
            {menus.map((menu, menuKey) => (
              <li key={menuKey} to={menu.path}>
                <Link
                  to={menu.path}
                  onClick={() => {
                    const newMenus = [...menus];
                    newMenus[menuKey].isShowSubmenu =
                      !newMenus[menuKey].isShowSubmenu;
                    setMenus(newMenus);
                  }}
                >
                  {menu.name}
                  {menu.child &&
                    (menu.isShowSubmenu ? (
                      <AiOutlineDownCircle />
                    ) : (
                      <AiOutlineUpCircle />
                    ))}
                </Link>
                {menu.child && (
                  <ul
                    className={`header__menu__dropdown ${
                      menu.isShowSubmenu ? "show__submenu" : ""
                    }`}
                  >
                    {menu.child.map((childItem, childKey) => (
                      <li key={`${menuKey}-${childKey}`}>
                        <Link to={childItem.path}></Link>
                        {childItem.name}13546
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="humberger__top__right__social">
          <Link to={""}>
            <AiOutlineFacebook />
          </Link>
          <Link to={""}>
            <AiOutlineInstagram />
          </Link>
          <Link to={""}>
            <AiOutlineLinkedin />
          </Link>
          <Link to={""}>
            <AiOutlineTwitter />
          </Link>
          <Link to={""}>
            <AiOutlineUser />
          </Link>
        </div>
        <div className="humberger__menu__contact">
          <ul>
            <li>
              <AiOutlineMail /> HealthyShop@gmail.com
            </li>
            <li>Miễn phí đơn từ {formatter(200000)}</li>
          </ul>
        </div>
      </div>

      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-6 header__top_left">
              <ul>
                <li>
                  <AiOutlineMail />
                  Hello@gmail.com
                </li>
                <li>Miễn phí ship đơn từ {formatter(200000)}</li>
              </ul>
            </div>
            <div className="col-6 header__top_right">
              <ul>
                <li>
                  <Link to={""}>
                    <AiOutlineFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineTwitter />
                  </Link>
                </li>
                <li onClick={() => navigate(ROUTERS.ADMIN.LOGIN)}>
                  
                  <span>Đăng nhập</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="header__logo">
              <h1>Healthy Shop</h1>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="header__menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu.child && (
                      <ul className="header__menu__dropdown">
                        {menu.child.map((childItem, childKey) => (
                          <li key={`${menuKey}-${childKey}`}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header__cart">
              <div className="header__cart_price">
                <span>{formatter(1001230)}</span>
              </div>
              <ul>
                <li>
                  <Link to={ROUTERS.USER.SHOPPING_CART}>
                    <AiOutlineShoppingCart /> <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="humberger__open">
              <AiOutlineMenu onClick={() => setisShowHumberger(true)} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero__categories__container">
          <div className="col-lg-3 col-sm-12 col-xs-12 col-md-12 hero__categories">
            <div
              className="hero__categories__all"
              onClick={() => setisShowCategories(!isShowCategories)}
            >
              <AiOutlineMenu />
              Danh sách sản phẩm
            </div>
            {isShowCategories && (
              <ul className={isShowCategories ? "" : "hidden"}>
                {categories.map((categories, key) => (
                  <li key={key}>
                    <Link to={ROUTERS.USER.PRODUCTS}>{categories}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="col-lg-9 col-sm-12 col-xs-12 col-md-12 hero___search__container">
            <div className="hero__search">
              <div className="hero__search__form">
                <form>
                  <input
                    type="text"
                    placeholder="Bạn đang tìm gì ?"
                    name=""
                    value=""
                  />
                  <button type="submit">Tìm kiếm</button>
                </form>
              </div>
              <div className="hero__search__phone">
                <div className="hero__search__phone__icon">
                  <AiOutlinePhone />
                </div>
                <div className="hero__search__phone__text">
                  <p>0907.999.888</p>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
            {isHome && (
              <div className="hero__item">
                <div className="hero__text">
                  <span>Trái cây tươi</span>
                  <h2>
                    Rau quả <br />
                    sạch 100%
                  </h2>
                  <p>Miễn phí giao hàng tận nơi</p>
                  <Link to="" className="primary-btn">
                    Mua ngay
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
