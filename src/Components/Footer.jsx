import React from "react";
import { Facebook, Locate, LocateIcon, Mail } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
// import { BiLocation } from 'react-icons/bi';\
import { MapPin } from "lucide-react";

import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex justify-center w-[100%] items-center bg-gray-900 flex-col">
      <div className="grid grid-cols-3 px-[20px] justify-start w-[80%] pt-[20px] ">
        <div>
          <img className="w-[100px]"
            src="https://bastikipathshala-org.translate.goog/wp-content/uploads/2024/02/Basti_Ki_Pathshala-_Official_Logo-removebg-preview.png?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc"
            alt=""
          />
          <p className="text-[#D1D5DA]">Transforming lives through education in urban communities.</p>
          <div className="flex gap-[20px] text-[#D1D5DA]">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
        <div className="text-center">
          <p className="font-[600] text-xl text-white">Quick Links</p>
          <ul className="text-[#D1D5DA]">
            <li>About Us</li>
            <li>Programs</li>
            <li>Contacts</li>
            <li>Donate</li>
          </ul>
        </div>

        <div className="flex flex-col gap-[10px] text-left">
            <p className="text-xl font-[600] text-white">Contact Info</p>
        <div className="text-[#D1D5DA]">

            <p className="flex gap-[10px]">
              <MapPin /> 123 Community Lane Mumbai, Maharashtra 400017
            </p>
          </div>
          <div className="text-[#D1D5DA]">
            <p className="flex gap-[10px]">
              <Phone /> +91 98765 43210
            </p>
          </div>
          <div className="text-[#D1D5DA]">
            <p className="flex gap-[10px]">
              <Mail /> info@bastikipathshale.org
            </p>
          </div>
        </div>
      </div>

      <div className="w-[80%] py-[10px] bg-[#1F2937] flex justify-center items-center flex-col text-center text-[#D1D5DA]">

        <Mail size={50}/>
        <p className="font-bold text-xl">Stay Updated</p>
        <p className="text-[20px]">Subscribe to our newsletter for updates on our impact and programs</p>
        <div className="flex  py-[10px] gap-[30px]">
        <input className=" bg-[#374151]  h-[50px] px-[10px] rounded-l  w-[300px]" type="email" placeholder="Enter Email Id" />
        <button className=" rounded bg-[#2463EB] text-white h-[50px]  px-[20px]">Subscribe</button>
        </div>
        
      </div>
      <hr className="border-white w-[100%]" />
      <p className="text-white">© 2024 Basti Ki Pathshale. All rights reserved.</p>
    </div>
  );
};

export default Footer;
