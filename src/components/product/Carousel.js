import React from "react";
import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { iphone } from "../../assets/index";

function Carousel({title}) {
    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 400;
    };
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 400;
    };

    return (
        <div className="App bg-gray-200 w-[99vw] h-[48vh]">
            <div className="relative">
                <div className="text-center py-4  text-xl font-bold">
                    {title}
                </div>
                
                <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
                    
                    <div className="absolute right-0 mid">
                        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-slate-500"><FiChevronRight /></button>
                    </div>
                    <div className="absolute left-0 mid">
                        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-slate-500"><FiChevronLeft /></button>
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
