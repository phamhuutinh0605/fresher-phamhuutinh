// import {
//   faCircleArrowLeft,
//   faCircleArrowRight,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Carousel = () => {
  const photos = [
    {
      src: "https://cf.shopee.vn/file/fa79715264f5c973648d8096a8aa9773_xxhdpi",
    },
    {
      src:
        "https://cf.shopee.vn/file/vn-50009109-7095eca9f95e1f094d749c0404b85af7_xxhdpi",
    },
    {
      src:
        "https://cf.shopee.vn/file/vn-50009109-6ee065e1e77877f4001ae4efebdf6f10_xxhdpi",
    },
    {
      src: "https://cf.shopee.vn/file/fa79715264f5c973648d8096a8aa9773_xxhdpi",
    },
    {
      src:
        "https://cf.shopee.vn/file/vn-50009109-2ebd8dc698d738db0ffedce344e87bbd_xhdpi",
    },
    {
      src:
        "https://cf.shopee.vn/file/vn-50009109-6ee065e1e77877f4001ae4efebdf6f10_xxhdpi",
    },
  ];
  const [slideNumber, setSlideNumber] = useState(0);

  const handleMove = (direction: String) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 3 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 3 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  return (
    <div className="carousel">
      <div className="shopee__container">
        <div className="carousel__content">
          <div className="content__left">
            <div className="slider">
              <FaArrowCircleLeft
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <Image
                  src={photos[slideNumber].src}
                  alt="https://cf.shopee.vn/file/vn-50009109-6ee065e1e77877f4001ae4efebdf6f10_xxhdpi"
                  className="sliderImg"
                  width={600}
                  height={200}

                />
              </div>
              <FaArrowCircleRight
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          </div>
          <div className="content__right">
            <div className="carousel__ads">
              <div className="ads__img">
                <Image
                   src="https://cf.shopee.vn/file/vn-50009109-2ebd8dc698d738db0ffedce344e87bbd_xhdpi"
                  alt=""
                  width={600}
                  height={200}

                />
              </div>
              <div className="ads__img">
                <Image
                  src="https://cf.shopee.vn/file/vn-50009109-30002e735028feb7e31680e1b654772d_xhdpi"
                  alt=""
                  width={600}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
