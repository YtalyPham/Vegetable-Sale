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
import { useGetCategoriesUS, useGetProductsUS } from "api/homePage";

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
      id: 1,
      bgImga: c1,
      name: "Cam tươi",
    },
    {
      id: 2,
      bgImga: c2,
      name: "Hoa quả khô",
    },
    {
      id: 3,
      bgImga: c3,
      name: "Rau củ tươi",
    },
    {
      id: 4,
      bgImga: c4,
      name: "Sữa hộp",
    },
    {
      id: 5,
      bgImga: c5,
      name: "Thịt bò",
    },
  ];
  const { data: categories } = useGetCategoriesUS();
  const { data: products } = useGetProductsUS();

   
  const renderFeaturedProducts = () => {
    const tabList = [];
    const tabPanels = [];

    tabList.push(categories?.map((category)=>{
      return <Tab key={category.id}>{category.name}</Tab>
    }))


    categories?.forEach((category) =>{
      tabPanels.push(
        products?.filter((product)=> product.category_id === category.id)
      .map((product)=>(
        <div key={product.id} 
        className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <ProductCard product={product}/>
        </div>
      )));
      
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
          {renderFeaturedProducts()}
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
