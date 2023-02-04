import React from "react";
import {logo, bdFlag} from "../../assets/index"

function FooterMiddle() {
    return (
        <div className="w-full bg-amazon_light text-white">
            <div className="w-full border-b[1px] border-gray-500 py-10">
                <div className="max-w-5xl mx-auto text-gray-300">
                    <div className="w-full grid grid-cols-4 place-items-center items-start">
                        <div>
                            <h3 className="font-titleFont text-white text-base font-semibold mb-3">
                                Get to Know Us
                            </h3>
                            <ul className="flex flex-col gap-2 font-bodyFont">
                                <li className="footerLink">Careers</li>
                                <li className="footerLink">Blog</li>
                                <li className="footerLink">About Amazon</li>
                                <li className="footerLink">Investor Relations</li>
                                <li className="footerLink">Amazon Devices</li>
                                <li className="footerLink">Amazon Science</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-titleFont text-white text-base font-semibold mb-3">
                                Make Money with Us
                            </h3>
                            <ul className="flex flex-col gap-2 font-bodyFont">
                                <li className="footerLink">Sell products on Amazon</li>
                                <li className="footerLink">Sell on amazon Business</li>
                                <li className="footerLink">Sell apps on Amazon</li>
                                <li className="footerLink">Become an Affiliate</li>
                                <li className="footerLink">Advertise Your Products</li>
                                <li className="footerLink">Sell Product with us</li>
                                <li className="footerLink">Host an Amazon Hub</li>
                                <li className="footerLink">See More Make Money with Us</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-titleFont text-white text-base font-semibold mb-3">
                                Amazon Payment products
                            </h3>
                            <ul className="flex flex-col gap-2 font-bodyFont">
                                <li className="footerLink">Amazon Business Card</li>
                                <li className="footerLink">Shop with Points</li>
                                <li className="footerLink">Reload Your Balance</li>
                                <li className="footerLink">Amazon Currency Converter</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-titleFont text-white text-base font-semibold mb-3">
                                Let Us Help You
                            </h3>
                            <ul className="flex flex-col gap-2 font-bodyFont">
                                <li className="footerLink">Amazon and COVID-19</li>
                                <li className="footerLink">Your Account</li>
                                <li className="footerLink">Your Orders</li>
                                <li className="footerLink">Shipping Rates & Policies</li>
                                <li className="footerLink">Returns & Replacements</li>
                                <li className="footerLink">Manage Your Content and Devices</li>
                                <li className="footerLink">Amazon Assistant</li>
                                <li className="footerLink">FAQ & Help</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-6 items-center justify-center py-6">
                <div>
                  <img className="w-40 pt-3" src={logo} alt="logo" />
                </div>
                <div className="flex gap-2">
                  <p className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
                    English
                  </p>
                </div>
                <div className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
                  <img className="w-6 " src={bdFlag} alt="FlagImg" />
                  <p>India</p>
                </div>
            </div>
        </div>
    );
}

export default FooterMiddle;
