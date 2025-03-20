import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () =>{
    return <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="footer__about">
                        <h1 className="footer__about__logo">Healthy Shop</h1>
                        <ul>
                            <li>Địa chỉ: 100 Trường Chinh</li>
                            <li>Phone: 0933 999 878</li>
                            <li>Email: healthyShop@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="footer__widget">
                        <h6>Cửa hàng</h6>
                        <ul>
                            <li>
                                <Link to="">Liên hệ</Link>
                            </li>
                            <li>
                                <Link to="">Thông tin về chúng tôi</Link>
                            </li>
                            <li>
                                <Link to="">Sản phẩm kinh doanh</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="">Thông tin tài khoản</Link>
                            </li>
                            <li>
                                <Link to="">Giỏ hàng</Link>
                            </li>
                            <li>
                                <Link to="">Danh sách ưa thích</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="footer__widget">
                        <h6>Khuyến mãi & ưu đai4</h6>
                        <p>Đăng ký nhận thông tin tại đây</p>
                        <form action="#">
                            <div>
                                <input type="text" placeholder="Nhập email"/>
                                <button type="submit" className="button-submit">Đăng ký</button>
            
                            </div>
                            <div className="footer__widget__social">
                                <div>
                                    <AiOutlineFacebook/>
                                </div>
                                <div>
                                    <AiOutlineInstagram/>
                                </div>
                                <div>
                                    <AiOutlineLinkedin/>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>    

    </footer>

};

export default memo(Footer);