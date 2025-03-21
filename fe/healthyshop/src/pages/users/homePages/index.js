import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import c1 from "assets/users/images/categories/c1.jpg";
import c2 from "assets/users/images/categories/c2.jpg";
import c3 from "assets/users/images/categories/c3.jpg";
import c4 from "assets/users/images/categories/c4.jpg";
import c5 from "assets/users/images/categories/c5.jpg";
import "./style.scss";
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
    </>
  );
};

export default memo(HomePages);
