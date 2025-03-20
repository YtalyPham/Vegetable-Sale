import { memo, useState } from "react";
import "./style.scss";
import {AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineTwitter,
    AiOutlineUser,
    AiOutlineMail,
    AiOutlineShoppingCart
} from "react-icons/ai"
import { Link } from "react-router-dom";
import { formatter } from "../../../../utils/formater";
import { ROUTERS } from "../../../../utils/router";
const Header = () =>{
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
           
        </>
    );  
};

export default memo(Header);