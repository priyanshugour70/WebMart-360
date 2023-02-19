import React from "react";
import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { iphone, samsung_s23, GooglePixel, oneplus11, iQOO11, Xiaomi12 } from "../../assets/index";

function Carousel({title}) {
    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 400;
    };
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 400;
    };

    return (
        <div className="App bg-gray-200 w-[99vw] h-[52vh]">
            <div className="relative">
                <div className="text-center py-4  text-xl font-bold">
                    {title}
                </div>
                
                <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
                    
                    <div className="absolute right-0 mid">
                        <button onClick={scrollRight} className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 p-2 m-2 rounded-full "><FiChevronRight /></button>
                    </div>
                    <div className="absolute left-0 mid">
                        <button onClick={scrollLeft} className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 p-2 m-2 rounded-full "><FiChevronLeft /></button>
                    </div>
                    
                    <div>
                        <Card Product_Img={iphone} title={"Apple iPhone 13 (128GB) - Midnight"} category={"16.95 cm (6.7-inch) Super Retina XDR display"} org_price={130000} dup_price={149000}/>
                    </div>
                    <div>
                        <Card Product_Img={samsung_s23} title={"Samsung Galaxy S23 Ultra 5G (512GB) - Snapdragon 8 Gen 2"} category={"6.8 inches (17.27 cm)-120 Hz "} org_price={124000} dup_price={179000}/>
                    </div>
                    <div>
                        <Card Product_Img={GooglePixel} title={"Google Pixel 6 5G (Sorta Seafoam, 8GB RAM, 128GB Storage)"} category={"5.8 cm (6.13 inches)"} org_price={42490} dup_price={99999}/>
                    </div>
                    <div>
                        <Card Product_Img={oneplus11} title={"OnePlus 11 5G (Titan Black, 16GB RAM, 256GB Storage)"} category={"6.7 Inches; 120 Hz AMOLED QHD Display "} org_price={61999} dup_price={81999}/>
                    </div>
                    <div>
                        <Card Product_Img={iQOO11} title={"iQOO 11 5G (Legend, 16GB RAM, 256 GB Storage)"} category={"2K AMOLED display has 77.8% more pixels"} org_price={64999} dup_price={66999}/>
                    </div>
                    <div>
                        <Card Product_Img={Xiaomi12} title={"Xiaomi 12 Pro | 5G (Noir Black, 12GB RAM, 256GB Storage)"} category={"50+50+50MP Flagship (OIS)"} org_price={59999} dup_price={84999}/>
                    </div>
                    <div>
                        <Card Product_Img={iphone} title={"Apple iPhone 13 (128GB) - Midnight"} category={"5.4 cm (6.1-inch) display1"} org_price={130000} dup_price={149000}/>
                    </div>
                    <div>
                        <Card Product_Img={iphone} title={"Apple iPhone 13 (128GB) - Midnight"} category={"5.4 cm (6.1-inch) display1"} org_price={130000} dup_price={149000}/>
                    </div>
                    <div>
                        <Card Product_Img={iphone} title={"Apple iPhone 13 (128GB) - Midnight"} category={"5.4 cm (6.1-inch) display1"} org_price={130000} dup_price={149000}/>
                    </div>
                    <div>
                        <Card Product_Img={iphone} title={"Apple iPhone 13 (128GB) - Midnight"} category={"5.4 cm (6.1-inch) display1"} org_price={130000} dup_price={149000}/>
                    </div>
                    <div>
                        <Card Product_Img={iphone} title={"Apple iPhone 13 (128GB) - Midnight"} category={"5.4 cm (6.1-inch) display1"} org_price={130000} dup_price={149000}/>
                    </div>
                    <div>
                        <Card Product_Img={iphone} title={"Apple iPhone 13 (128GB) - Midnight"} category={"5.4 cm (6.1-inch) display1"} org_price={130000} dup_price={149000}/>
                    </div>
                    <div>
                        <Card Product_Img={iphone} title={"Apple iPhone 13 (128GB) - Midnight"} category={"5.4 cm (6.1-inch) display1"} org_price={130000} dup_price={149000}/>
                    </div>
                    <div>
                        <Card Product_Img={iphone} title={"Apple iPhone 13 (128GB) - Midnight"} category={"5.4 cm (6.1-inch) display1"} org_price={130000} dup_price={149000}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
