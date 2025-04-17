import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import c1 from "assets/users/images/categories/c1.jpg";
import c2 from "assets/users/images/categories/c2.jpg";
import c3 from "assets/users/images/categories/c3.jpg";
import c4 from "assets/users/images/categories/c4.jpg";
import c5 from "assets/users/images/categories/c5.jpg";

import banner1 from "assets/users/images/banner/banner1.jpg";
import banner2 from "assets/users/images/banner/banner2.jpg";
import "./style.scss";


import {ProductCard} from "../../../component";
import { featproducts } from "../../../utils/common";
 

const HomePages = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const sliderItems = [
    {
      bgImga: c1,
      name: "Cam tươi",
    },
    {
      bgImga: c2,
      name: "Hoa quả khô",
    },
    {
      bgImga: c3,
      name: "Rau củ tươi",
    },
    {
      bgImga: c4,
      name: "Sữa hộp",
    },
    {
      bgImga: c5,
      name: "Thịt bò",
    },
  ];
 
  const renderFeaturedProducts = (data) => {
    const tabList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);
      const tabPanel = [];
      data[key].products.forEach((item, j) => {
        tabPanel.push(
          <div key={j} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <ProductCard name={item.name} price={item.price} img={item.img}/>
          </div>
        );
      });
      tabPanels.push(tabPanel);
    });

    return (
      <Tabs>
        <TabList>{tabList}</TabList>
        {tabPanels.map((item, key) => (
          <TabPanel key={key}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };
  return (
    <>
      {/*Categories Begin*/}
      <div className="container container__categories__slider">
        <Carousel
          responsive={responsive}
          className="container categories__slider"
        >
          {sliderItems.map((item, key) => (
            <div
              className="categories__slider__item"
              style={{ backgroundImage: `url(${item.bgImga})` }}
              key={key}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/*Categories End*/}
      {/* Featured Begin*/}
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderFeaturedProducts(featproducts)}
        </div>
      </div>
      {/*Featured End */}
      {/*Banner Begin */}
          <div className="container">
            <div className="banner">
              <div className="banner_pic">
                <img src={banner1} alt="banner" />
              </div>
              <div className="banner_pic">
                <img src={banner2} alt="banner" />
              </div>
            </div>
          </div>
          
      {/*Banner End */}
    </>
  );
};

export default memo(HomePages);
