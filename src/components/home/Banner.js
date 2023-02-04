import React, { useState } from "react";
import Slider from "react-slick";
import {
    bannerImgOne,
    bannerImgTwo,
    bannerImgThree,
    bannerImgFour,
    bannerImgFive,
} from "../../assets";

function Banner() {

    const [dotActive, setDocActive] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange:(prev, next) => {
            setDocActive(next);
        },
        appendDots: (dots) => (
            <div
                style={{
                    position:"absolute",
                    top: "70%",
                    left: "45%",
                    transform: "translate(-50% -50%)",
                    width: "210px",
                }}
            >
                <ul style={{ width: "100%",
                             display: "flex",
                             alignItems: "center",
                             justifyContent: "space-between", }}> {dots} </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={
                    i === dotActive
                    ? {
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    background: "#131921",
                    padding: "8px 0",
                    cursor: "pointer",
                    border: "1px solid #f3a847",
                }
                : {
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#232F3E",
                    color: "white",
                    padding: "8px 0",
                    cursor: "pointer",
                    border: "1px solid white",
                }}
            >
                {i + 1}
            </div>
        ),
    };

    return (
        <div className="w-full">
            <div className="w-full h-full relative">
                <Slider {...settings}>
                    <div>
                        <img src={bannerImgOne} alt="bannerImgOne" />
                    </div>
                    <div>
                        <img src={bannerImgTwo} alt="bannerImgTwo" />
                    </div>
                    <div>
                        <img src={bannerImgThree} alt="bannerImgThree" />
                    </div>
                    <div>
                        <img src={bannerImgFour} alt="bannerImgFour" />
                    </div>
                    <div>
                        <img src={bannerImgFive} alt="bannerImgFive" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Banner;
