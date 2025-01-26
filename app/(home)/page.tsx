import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  CarIcon,
  Facebook,
  HandHeartIcon,
  LayoutDashboardIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  PiggyBankIcon,
} from "lucide-react";
const page = () => {
  return (
    <>
      {/* hero */}
      <div className="w-full">
        <div className="relative w-full h-[500px]">
          <Image
            src="/images/home-hero.jpg"
            alt="home-hero"
            fill
            className="w-full h-full"
          />
        </div>
        <div className="text-center py-4  bg-gray-50">
          <Button
            variant={"default"}
            size={"lg"}
            className="text-4xl  py-4 h-auto  w-full lg:w-96"
          >
            <a href="tel:+6687545386" className="flex space-x-3 items-center">
              <PhoneIcon className=" !size-9  shrink-0" />
              โทรด่วน
            </a>
          </Button>
        </div>
      </div>

      {/* services */}
      <div className="py-7 lg:py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl lg:text-5xl text-primary">บริการรถน้ำ</h2>
          <p className="text-sm lg:text-lg text-gray-500">
            ให้บริการตลอด 24 ชั่วโมงบริการทุกพื้นที่ในจังหวัดภูเก็ต
          </p>

          <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-16 gap-7">
            <li className="flex flex-col items-center jus">
              <HandHeartIcon className="!size-24 mb-4 text-primary" />
              <h3 className="text-lg mb-4 text-primary">
                ให้คำปรึกษา - ประเมินหน้างานฟรี
              </h3>
              <p className=" text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                explicabo voluptas at,
              </p>
            </li>
            <li className="flex flex-col items-center jus">
              <LayoutDashboardIcon className="!size-24 mb-4 text-primary" />
              <h3 className="text-lg mb-4 text-primary">
                งานเล็ก - งานใหญ่ รับจบในที่เดียว
              </h3>
              <p className=" text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                explicabo voluptas at,
              </p>
            </li>
            <li className="flex flex-col items-center jus">
              <PiggyBankIcon className="!size-24 mb-4 text-primary" />
              <h3 className="text-lg mb-4 text-primary">
                บริการสุภาพ ราคากันเอง
              </h3>
              <p className=" text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                explicabo voluptas at,
              </p>
            </li>
            <li className="flex flex-col items-center jus">
              <CarIcon className="!size-24 mb-4 text-primary" />
              <h3 className="text-lg mb-4 text-primary">
                รถสิบล้อ 12,000 ลิตร - รถกะบะ 2,000 ลิตร
              </h3>
              <p className=" text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                explicabo voluptas at,
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-7 lg:py-10 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-2xl lg:text-5xl text-primary">แกลอรี่</h2>
            <p className="text-sm lg:text-lg text-gray-500">
              รูปภาพผลงานของเรา
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 md:mt-16">
            <Image
              src="/images/gallery/g-1.jpg"
              width={400}
              height={400}
              alt="gallery 1"
              className=" w-full h-[230px] md:h-[400px]"
            />
            <Image
              src="/images/gallery/g-2.jpg"
              width={400}
              height={400}
              alt="gallery 2"
              className=" w-full h-[230px] md:h-[400px]"
            />
            <Image
              src="/images/gallery/g-3.jpg"
              width={400}
              height={400}
              alt="gallery 3"
              className=" w-full h-[230px] md:h-[400px]"
            />
            <Image
              src="/images/gallery/g-4.jpg"
              width={400}
              height={400}
              alt="gallery 4"
              className=" w-full h-[230px] md:h-[400px]"
            />
            <Image
              src="/images/gallery/g-5.jpg"
              width={400}
              height={400}
              alt="gallery 5"
              className=" w-full h-[230px] md:h-[400px]"
            />
            <Image
              src="/images/gallery/g-6.jpg"
              width={400}
              height={400}
              alt="gallery 6"
              className=" w-full h-[230px] md:h-[400px]"
            />
          </div>
        </div>
      </div>

      <div className="py-7 lg:py-10">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-2xl lg:text-5xl text-primary">ติดต่อเรา</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-16">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31619.731842395515!2d98.33400523476563!3d7.846147500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502f98f213351f%3A0xf8b948034589b4a4!2z4Lia4Lij4Li04LiB4Liy4Lij4LiZ4LmJ4Liz4LmD4LiK4LmJ4Lig4Li54LmA4LiB4LmH4LiVKOC4meC5ieC4s-C4muC5iOC4reC4muC4suC4lOC4suC4pSDguYDguIjguYnguLLguYPguKvguI3guYgp!5e0!3m2!1sen!2sth!4v1737897127869!5m2!1sen!2sth"
                width={"100%"}
                height={450}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div>
              <ul className="text-2xl w-full h-full flex  flex-col justify-center space-y-4 mt-4 md:mt-0 px-4 md:px-20">
                <li className="flex space-x-4 items-center">
                  <MapPinIcon className="" />
                  <span>ฉลอง 34/2 เมือง Phuket 83130</span>
                </li>
                <li className="flex space-x-4 items-center">
                  <PhoneIcon className="" />
                  <a href="tel:+6687545386" className="">
                    087545386
                  </a>
                </li>
                <li className="flex space-x-4 items-center">
                  <MailIcon className="" />
                  <a href="mailto:mail@mail.com" className="">
                    mail@mail.com
                  </a>
                </li>
                <li className="flex space-x-4 items-center">
                  <Facebook className="" />
                  <a href="#" className="">
                    รถน้ำภูเก็ต
                  </a>
                </li>
                <li className="flex border w-[240px] mx-auto md:mx-0">
                  <Image
                    src="/images/line.jpg"
                    width={240}
                    height={240}
                    alt="line-qr"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
