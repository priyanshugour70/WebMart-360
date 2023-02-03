import React, { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { logo } from "../../assets/index";

function Header() {
    const [showAll, setShowAll] = useState(false);

    const allItems = [
        { _id: 112, title: "Health & Household" },
        { _id: 113, title: "Home & Kitchen" },
        { _id: 114, title: "Industrial & Scientific" },
        { _id: 115, title: "Kindle Store" },
        { _id: 116, title: "Luggage" },
        { _id: 117, title: "Men's Fashion" },
        { _id: 118, title: "Music, CDs & Vinyl" },
        { _id: 119, title: "Pet Supplies" },
        { _id: 120, title: "Prime Video" },
        { _id: 121, title: "Software" },
        { _id: 122, title: "Sports & Outdoors" },
        { _id: 123, title: "Tools & Home Improvement" },
        { _id: 124, title: "Toys & Games" },
        { _id: 126, title: "Video Games" },
        { _id: 127, title: "Women's Fashion" },
    ];

    return (
        <div>
            <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4 ">
                <div className="headerHover">
                    <img className="w-24 mt-2" src={logo} alt="logo" />
                </div>
                <div className="headerHover">
                    <LocationOnOutlinedIcon />
                    <p className="text-sm text-lightText font-light flex flex-col">
                        Deliver to
                        <span className="text-sm font-semibold -mt-1 text-whiteText">
                            {" "}
                            Bhopal
                        </span>
                    </p>
                </div>
                <div className="h-10 rounded-md flex flex-grow relative">
                    <span
                        onClick={() => setShowAll(!showAll)}
                        className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
                    >
                        All
                        <span></span>
                        <ArrowDropDownOutlinedIcon />
                    </span>
                    {showAll && (
                        <div>
                            <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50">
                                {/* <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"> All Departments </li> */}
                                {allItems.map((item) => (
                                    <li
                                        className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                                        key={item._id}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <input
                        className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
                        type="text"
                    />
                    <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
                        <SearchIcon />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Header;
