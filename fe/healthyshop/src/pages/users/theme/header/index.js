import { memo, useState } from "react";
import "./style.scss";
import {AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineTwitter,
    AiOutlineUser,
    AiOutlineMail,
    AiOutlineShoppingCart,
    AiOutlineMenu,
    AiOutlinePhone
} from "react-icons/ai"
import { Link } from "react-router-dom";
import { formatter } from "../../../../utils/formater";
import { ROUTERS } from "../../../../utils/router";
const Header = () =>{
    const [isShowCategories, setisShowCategories] = useState(true);
    const [menus] = useState([
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
                }

            ],
        },
        {
            name: "Bài viết",
            path: "",
        },
        {
            name: "Liên hệ",
            path: "",
        }
    ])
    return (
        <>
            <div className="header__top">
        <div className="container">
            <div className="row">
                <div className="col-6 header__top_left">
                    <ul>
                        <li>
                            <AiOutlineMail />
                            Hello@gmail.com</li>
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
                        <li>
                            <Link to={""}>
                                <AiOutlineUser />
                            </Link>
                            <span>Đăng nhập</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                            <div className="header__logo">
                                <h1>Healthy Shop</h1>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <nav className="header__menu">
                                <ul>
                                {
                                        menus?.map((menu, menuKey ) => (
                                        <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                            <Link to={menu?.path}>
                                                {menu?.name}
                                            </Link>
                                            {
                                                menu.child && (
                                                    <ul className="header__menu__dropdown">
                                                        {
                                                            menu.child.map((childItem, childKey) =>
                                                                <li key={`${menuKey}-${childKey}`}>
                                                                    <Link to={childItem.path}>{childItem.name}</Link>
                                                                </li>
                                                            )
                                                        }
                                                       
                                                    </ul>
                                                )
                                            }
                                        </li>    
                                        ))
                                    } 
                                </ul>
                            </nav>
                        </div>
                        <div className="col-xl-3">
                        <div className="header__cart">
                            <div className="header__cart_price">
                                <span>{formatter(1001230)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to={"#"}>
                                    <AiOutlineShoppingCart /> <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row hero__categories__container">
                    <div className="col-lg-3 hero__categories">
                        <div className="hero__categories__all" onClick={() => setisShowCategories(!isShowCategories)}>
                            <AiOutlineMenu/>
                            Danh sach san pham
                        </div>
                        {isShowCategories &&(
                              <ul className={isShowCategories ? "" : "hidden"}>
                                <li>
                                    <Link to={"#"}>Thịt tươi</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Rau củ</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Nước trái cây</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Trái cây</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Hải sản</Link>
                                </li>
                          </ul>
                        )}
                      
                    </div>
                    <div className="col-lg-9 hero___search__container">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form>
                                    <input type="text" placeholder="Bạn đang tìm gì ?" name="" value=""/>
                                    <button type="submit" >Tìm kiếm</button>
                                </form>
                            </div>
                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <AiOutlinePhone/>
                                </div>
                                <div className="hero__search__phone__text">
                                    <p>0907 999 888</p>
                                    <span>Hỗ trợ 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero__item">
                            <div className="hero__text">
                                <span>Trái cây tươi</span>
                                <h2>Rau quả <br/>
                                    sạch 100%</h2>
                                <p>Miễn phí giao hàng tận nơi</p>
                                <Link to="" className="primary-btn">
                                    Mua ngay
                                </Link>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );  
};

export default memo(Header);