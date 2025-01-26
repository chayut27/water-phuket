import { Facebook, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-50 py-10 text-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="">
            <div className="text-5xl">Logo</div>
            <ul className="flex flex-col gap-2 mt-10">
              <li className="flex space-x-2 items-center">
                <MapPinIcon className=" !size-4" />
                <span>ฉลอง 34/2 เมือง Phuket 83130</span>
              </li>
              <li className="flex space-x-2 items-center">
                <PhoneIcon className=" !size-4" />
                <a href="tel:+6687545386" className="">
                  087545386
                </a>
              </li>
              <li className="flex space-x-2 items-center">
                <MailIcon className=" !size-4" />
                <a href="mailto:mail@mail.com" className="">
                  mail@mail.com
                </a>
              </li>
              <li className="flex space-x-2 items-center">
                <Facebook className=" !size-4" />
                <a href="#" className="">
                  รถน้ำภูเก็ต
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-5 md:mt-0">
            <ul className=" space-y-3 text-lg">
              <li>หน้าแรก</li>
              <li>เกี่ยวกับ</li>
              <li>ติดต่อเรา</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mt-4 md:mt-0 mb-5 text-lg">บริการ</li>
              <li>
                <ul className="space-y-2">
                  <li>ให้คำปรึกษา - ประเมินหน้างานฟรี</li>
                  <li>งานเล็ก - งานใหญ่ รับจบในที่เดียว</li>
                  <li>บริการสุภาพ ราคากันเอง</li>
                  <li>รถสิบล้อ 12,000 ลิตร - รถกะบะ 2,000 ลิตร</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <hr />
          <div className="w-full text-center pt-7">
            &copy; 2025, รถน้ำภูเก็ต888.com. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
