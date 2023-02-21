import React from "react";
import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import {
    iphone,
    samsung_s23,
    GooglePixel,
    oneplus11,
    iQOO11,
    Xiaomi12,
    OppoReno8,
    VivoX80,
    SonyXperia1,
    SonyXperia5,
    RedmiNote12,
    realmeGT2,
    AsusRog5,
    NothingPhone,
} from "../../assets/index";

function MobileCarousel({ title }) {
    const scrollLeft = () => {
        document.getElementById("MobileContent").scrollLeft -= 400;
    };
    const scrollRight = () => {
        document.getElementById("MobileContent").scrollLeft += 400;
    };

    return (
        <div className="App bg-gray-200 w-[99vw] h-[52vh]">
            <div className="relative">
                <div className="text-center py-4  text-xl font-bold">
                    {title}
                </div>

                <div
                    id="MobileContent"
                    className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
                >
                    <div className="absolute right-0 mid">
                        <button
                            onClick={scrollRight}
                            className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 p-2 m-2 rounded-full "
                        >
                            <FiChevronRight />
                        </button>
                    </div>
                    <div className="absolute left-0 mid">
                        <button
                            onClick={scrollLeft}
                            className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 p-2 m-2 rounded-full "
                        >
                            <FiChevronLeft />
                        </button>
                    </div>

                    <div>
                        <Card
                            Product_Img={iphone}
                            title={"Apple iPhone 13 (128GB) - Midnight"}
                            category={
                                "16.95 cm (6.7-inch) Super Retina XDR display"
                            }
                            org_price={130000}
                            dup_price={149000}
                        />
                    </div>
                    <div>
                        <Card
                            Product_Img={samsung_s23}
                            title={
                                "Samsung Galaxy S23 Ultra 5G (512GB) - Snapdragon 8 Gen 2"
                            }
                            category={"6.8 inches (17.27 cm)-120 Hz "}
                            org_price={124000}
                            dup_price={179000}
                        />
                    </div>
                    <div>
                        <Card
                            Product_Img={GooglePixel}
                            title={
                                "Google Pixel 6 5G (Sorta Seafoam, 8GB RAM, 128GB Storage)"
                            }
                            category={"5.8 cm (6.13 inches)"}
                            org_price={42490}
                            dup_price={99999}
                        />
                    </div>
                    <div>
                        <Card
                            Product_Img={oneplus11}
                            title={
                                "OnePlus 11 5G (Titan Black, 16GB RAM, 256GB Storage)"
                            }
                            category={"6.7 Inches; 120 Hz AMOLED QHD Display "}
                            org_price={61999}
                            dup_price={81999}
                        />
                    </div>
                    <div>
                        <Card
                            Product_Img={iQOO11}
                            title={
                                "iQOO 11 5G (Legend, 16GB RAM, 256 GB Storage)"
                            }
                            category={"2K AMOLED display has 77.8% more pixels"}
                            org_price={64999}
                            dup_price={66999}
                        />
                    </div>
                    <div>
                        <Card
                            Product_Img={Xiaomi12}
                            title={
                                "Xiaomi 12 Pro | 5G (Noir Black, 12GB RAM, 256GB Storage)"
                            }
                            category={"50+50+50MP Flagship (OIS)"}
                            org_price={59999}
                            dup_price={84999}
                        />
                    </div>
                    <div>
                        <Card
                            Product_Img={OppoReno8}
                            title={
                                "Oppo Reno8 5G (Shimmer Black, 128 GB) (8 GB RAM)"
                            }
                            category={
                                " GB RAM | 128 GB ROM 16.33 cm (6.43 inch)"
                            }
                            org_price={29999}
                            dup_price={38999}
                        />
                    </div>
                    <div>
                        <Card
                            Product_Img={VivoX80}
                            title={
                                "Vivo X80 (Cosmic Black,8GB RAM, 128GB Storage)"
                            }
                            category={"17.22 cm (6.78 inch) Full HD+ Display"}
                            org_price={46999}
                            dup_price={59999}
                        />
                    </div>
                    <div>
                        <Card
                            Product_Img={SonyXperia1}
                            title={
                                "Sony Xperia 1 III XQ-BC72 5G (Frosted Gray, 12GB RAM, 256GB Storage)"
                            }
                            category={"Color: Frosted Gray"}
                            org_price={81999}
                            dup_price={121999}
                        />
                    </div>
                    <div>
                        <Card
                            Product_Img={SonyXperia5}
                            title={
                                "Sony Xperia 5 iv XQ-CT72 5G Dual Sim (Black, 8GB Ram 256GB Storage)"
                            }
                            category={"12 MP + 12 MP + 12 MP"}
                            org_price={85999}
                            dup_price={119999}
                        />
                    </div>
                    <div>
                        <Card
                            Product_Img={RedmiNote12}
                            title={
                                "Redmi Note 12 Pro 5G (Stardust Purple, 8GB RAM, 256GB Storage)"
                            }
                            category={"16.94 cm (6.67 inch) Full HD"}
                            org_price={36999}
                            dup_price={56999}
                        />
                    </div>
                    <div>
                        <Card
                            Product_Img={realmeGT2}
                            title={
                                "realme GT 2 Pro (Paper Green 8GB RAM+128GB Storage)"
                            }
                            category={"Qualcomm Snapdragon 8"}
                            org_price={49959}
                            dup_price={57999}
                        />
                    </div>
                    <div>
                        <Card
                            Product_Img={AsusRog5}
                            title={
                                "ASUS ROG 5s Pro (Phantom Black, 512 GB)  (18 GB RAM)"
                            }
                            category={"17.22 cm (6.78 inch) Full HD+ Display"}
                            org_price={79999}
                            dup_price={85999}
                        />
                    </div>
                    <div>
                        <Card
                            Product_Img={NothingPhone}
                            title={
                                "Nothing Phone (1) (Black, 256 GB) (12 GB RAM)"
                            }
                            category={"50 MP Main (Sony & Samsung)"}
                            org_price={35999}
                            dup_price={42999}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileCarousel;
