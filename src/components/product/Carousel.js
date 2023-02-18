import React from "react";
import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { iphone, samsung_s23 } from "../../assets/index";

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
                        <Card Product_Img={iphone} title={"Apple iPhone 13 (128GB) - Midnight"} category={"5.4 cm (6.1-inch) display1"} org_price={130000} dup_price={149000}/>
                    </div>
                    <div>
                        <Card Product_Img={samsung_s23} title={"Samsung Galaxy S23 Ultra 5G (512GB) - Snapdragon 8 Gen 2"} category={"6.8 inches (17.27 cm)-120 Hz "} org_price={124000} dup_price={179000}/>
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
