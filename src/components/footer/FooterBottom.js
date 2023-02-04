import React from "react";
import { footerBottomItem } from "../../constants/Index";

function FooterBottom() {
    return (
        <div className="w-full bg-footerBottom py-8">
            <div className="max-w-5xl mx-auto">
                <div className="w-full grid grid-cols-7 gap-3 place-content-center text-gray-400">
                    {footerBottomItem.map((item) => (
                        <div className="group cursor-pointer" key={item._id}>
                            <h3 className="w-24 font-semibold text-[12px] group-hover:underline text-[#DDD] leading-3 mb-[2px]">{item.title}</h3>
                            <p className="w-24 tracking-tight text-[12px] text-[#999] group-hover:underline leading-3">{item.des}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;
