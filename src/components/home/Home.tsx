import type React from "react";
import Image, { type StaticImageData } from "next/image";
import banner from "@/assets/home/Home_banner.webp";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Traffic from "@/assets/home/traffic-on-road.webp";
import Flyover from "@/assets/home/flyover.webp";
import cars from "@/assets/home/cars.webp";
import university from "@/assets/home/university.png";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import img from "@/assets/home/card1.png";
import abc from "@/assets/home/card2.png";
import xyz from "@/assets/home/card3.png";
import faq from "@/assets/home/FAQ.png";
import bme from "@/assets/home/BME.png";
import buda from "@/assets/home/OBuda.png";
import crux from "@/assets/home/logos/Crux.png";
import ondc from "@/assets/home/logos/ONDC.png";
import adaptive from "@/assets/home/logos/Adaptive.png";
import india from "@/assets/home/logos/Reindia.png";
import fastag from "@/assets/home/logos/fastag.png";
import handol from "@/assets/home/logos/handol.png";
import cell from "@/assets/home/logos/openxcell.png";
import { KeyDifferentiatorsSwiper } from "./KeyDifferentiatorsSwiper";
import { LatestNewsSwiper } from "./LatestNewsSwiper";

export function HeroSection() {
  return (
    <div className=" w-full">
      <div className="relative">
        <Image
          src={banner}
          alt="Shanghai interchange"
          className="w-full h-[55rem] xs:h-[50rem] lg:h-auto object-cover"
        />
        <div className="w-full h-full absolute top-0 bg-[linear-gradient(0deg,rgba(83,170,0,0.64)_0%,rgba(83,170,0,0)_81.24%)]"></div>
        <div className="flex justify-center items-center">
          <div className="container h-fit absolute bottom-0 text-center text-white flex flex-col justify-center items-center gap-6">
            <p className="text-[32px] md:text-5xl lg:text-[56px] font-bold">
              Solving Traffic Congestion With Trust, Technology, And Voter
              Support
            </p>
            <div className="md:text-xl bg-[#3725258f] px-5 py-2 rounded-2xl mx-5 sm:mx-auto">
              Miracle Traffic Solution AI — a ready-to-deploy, self-financing
              solution transforms congestion into opportunity. We help
              governments cut gridlock, win public support, and generate
              hundreds of millions in sustainable annual revenues while building
              smarter, cleaner, and more efficient cities.
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-9 mt-8 mb-12">
              <Button className="bg-white text-[#53AA00] text-xl hover:bg-white rounded-full px-10 py-[1.65rem] hover:scale-[103%] sm:w-fit w-full">
                Book a Government Demo
              </Button>
              <Button className="bg-black text-white text-xl hover:bg-black rounded-full px-10 py-[1.65rem] hover:scale-[103%] sm:w-fit w-full">
                Download Investor Deck
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* <video
        src="/videos/MTS_Video.mp4"
        className="w-full h-full"
        // controls
        autoPlay={true}
        loop
        muted
      /> */}
    </div>
  );
}

interface CardData {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface CitiesProps {
  data: CardData[];
}

export function Cities({ data }: CitiesProps) {
  return (
    <div className="w-full relative">
      <div className="w-full h-80 md:h-80 bg-[conic-gradient(from_159.65deg_at_25.8%_85.64%,#000917_-54.6deg,#0052CC_284.85deg,#000917_305.4deg,#0052CC_644.85deg)] text-white relative overflow-hidden rounded-b-4xl">
        {/* Network pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Cpath d='M30 29v2M29 30h2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Header section */}
        <div className="relative z-10 pt-8 md:pt-11 pb-12 md:pb-16 text-center px-4">
          <div className="space-y-3 max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-[32px] font-bold leading-tight">
              Backed by Cities. Powered by Platforms. Built for Citizens
            </h1>
            <p className="text-base md:text-lg text-white/90">
              Cities and Super Apps alike trust MTSAI to deliver results without
              political risk.
            </p>
          </div>
        </div>
      </div>

      <div className="relative px-4 pb-16">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {data.map((card, index) => (
            <div
              key={index}
              className={`relative ${index === 0 ? "-mt-16" : ""}`}
            >
              <div className="absolute -top-8 left-6 z-20">
                <div className="w-20 h-20 rounded-full bg-transparent shadow-lg flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#53aa00] flex items-center justify-center">
                    <div className="w-6 h-6 text-white [&>svg]:w-full [&>svg]:h-full">
                      {card.icon}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 pt-16 shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-black mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative -mt-20">
          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
            {data.map((card, index) => (
              <div key={index} className="relative flex flex-col">
                <div className="absolute -top-8 left-6 z-20">
                  <div className="w-20 h-20 rounded-full bg-transparent shadow-lg flex items-center justify-center">
                    <div className="rounded-full bg-[#53aa00] flex items-center justify-center p-2.5">
                      <div className="size-10 text-white [&>svg]:w-full [&>svg]:h-full">
                        {card.icon}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 pt-16 shadow-xl border border-gray-100 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm flex-1">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export interface AccordionItemData {
  id: string;
  title: string;
  content: string;
}

export interface ProblemSolvingProps {
  mainTitle: string;
  subtitle: string;
  description: string;
  accordionItems: AccordionItemData[];
  defaultOpenItem?: string;
  buttonText: string;
  colors?: {
    mainTitle?: string;
    subtitle?: string;
    text?: string;
    border?: string;
    accent?: string;
    button?: string;
    buttonText?: string;
    buttonHover?: string;
    buttonHoverText?: string;
    overlay?: string;
  };
}

export function ProblemSolving({
  mainTitle,
  subtitle,
  description,
  accordionItems,
  defaultOpenItem,
  buttonText,
  colors = {
    mainTitle: "#000000",
    subtitle: "#0052cc",
    text: "#000000",
    border: "#d9d9d9",
    accent: "#0052cc",
    button: "#ffffff",
    buttonText: "#53aa00",
    buttonHover: "#53aa00",
    buttonHoverText: "#ffffff",
    overlay: "#53aa00",
  },
}: ProblemSolvingProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left Column - Content */}
        <div className="space-y-6 lg:space-y-8 w-full">
          <div className="space-y-2 text-center lg:text-left">
            <h1
              className="text-[22px] sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
              style={{ color: colors.mainTitle }}
            >
              {mainTitle}
            </h1>
            <h2
              className="text-[22px] sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
              style={{ color: colors.subtitle }}
            >
              {subtitle}
            </h2>
          </div>

          <p
            className="text-sm md:text-lg leading-relaxed text-center lg:text-left"
            style={{ color: colors.text }}
          >
            {description}
          </p>

          <div
            className="border-t pt-4 lg:pt-6"
            style={{ borderColor: colors.border }}
          >
            <Accordion
              type="single"
              collapsible
              defaultValue={defaultOpenItem}
              className="w-full"
            >
              {accordionItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b"
                  style={{ borderColor: colors.border }}
                >
                  <AccordionTrigger
                    className="text-xs md:text-lg font-semibold hover:no-underline py-4 lg:py-6 text-left"
                    style={{ color: colors.text }}
                  >
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-[10px] sm:text-base leading-relaxed pb-6 lg:pb-8"
                    style={{ color: colors.text }}
                  >
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Right Column - Image with rounded cuts */}
        <div className="relative self-center">
          <Image src={Traffic} alt="traffic on road" />
          <div className="absolute top-0 w-full h-full flex justify-end items-end">
            <Button
              // onClick={buttonAction}
              className="sm:px-6 md:px-10 lg:px-5 xl:px-11 py-1 sm:py-1.5 md:py-3 sm:text-[21px] text-[#53AA00] rounded-full mr-6 mb-4 bg-white border border-[#53AA00] hover:bg-[#53AA00] hover:text-white"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TrafficSolutions() {
  const features = [
    {
      icon: (
        <svg
          width="54"
          height="55"
          viewBox="0 0 54 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.80243 20.4211V13.6889C6.80243 9.97087 9.81651 6.95679 13.5346 6.95679H24.7548"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M47.1965 27.1528V40.6171C47.1965 44.3352 44.1824 47.3493 40.4643 47.3493H38.2203"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="40.4645"
            cy="13.6886"
            r="8.97619"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43.4551 12.1931L39.717 15.9331L37.471 13.6891"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.4884 37.9246V45.1056C31.4884 46.3449 30.4837 47.3496 29.2443 47.3496H27.0227C25.7834 47.3496 24.7787 46.3449 24.7787 45.1056V43.6223H11.2695V45.1056C11.2695 46.3449 10.2648 47.3496 9.02547 47.3496H6.80386C5.56451 47.3496 4.55981 46.3449 4.55981 45.1056V37.9246C4.55981 35.4459 6.5692 33.4365 9.04791 33.4365H27.0003C29.479 33.4365 31.4884 35.4459 31.4884 37.9246Z"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5357 38.3732H10.1696"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.8774 38.3732H22.5114"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28.1335 33.2954L31.4884 31.6191"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.92589 33.2954L4.55981 31.6191"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5663 24.9092C11.0087 24.9131 9.65721 25.9852 9.29896 27.5011L7.87624 33.5824L9.29896 27.5011C9.65721 25.9852 11.0087 24.9131 12.5663 24.9092H23.4813C25.039 24.9131 26.3904 25.9852 26.7487 27.5011L28.1714 33.5824"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Smarter Tolls",
    },
    {
      icon: (
        <svg
          width="54"
          height="55"
          viewBox="0 0 54 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.25 24.9031H22.6372C24.3652 24.9031 26.0933 24.2439 27.4095 22.9254C30.0465 20.2884 30.0465 16.0156 27.4095 13.3786C24.7725 10.7416 20.4998 10.7416 17.8628 13.3786"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.75 33.9031H26.2462C27.6862 33.9031 29.1262 34.4521 30.2242 35.5501C32.4202 37.7461 32.4202 41.3078 30.2242 43.5061C28.0282 45.7043 24.4665 45.7021 22.2682 43.5061"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.75 29.4034H41.9783C43.3283 29.4034 44.676 28.8882 45.7065 27.8599C47.7653 25.8012 47.7653 22.4622 45.7065 20.4034C43.6478 18.3447 40.3088 18.3447 38.25 20.4034"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42.75 45.1531V40.6531"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40.5 42.9031H45"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36 11.4031V6.90308"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.75 9.15308H38.25"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "More Riders",
    },
    {
      icon: (
        <svg
          width="57"
          height="57"
          viewBox="0 0 57 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.174 21.157V16.4895H35.5065"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.8374 21.8245L26.8386 18.8233L33.1724 23.4908L40.1737 16.4895"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.1726 31.6585L40.1739 31.6587"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.1726 38.6602L40.1739 38.6604"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.50134 31.8921V47.7616C7.504 49.8233 11.6808 51.4956 16.8363 51.4956C21.9919 51.4956 26.1687 49.8233 26.1713 47.7616V31.8921"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.1687 31.8917C26.1687 33.9534 21.9893 35.6257 16.8337 35.6257C11.6781 35.6257 7.50134 33.9534 7.50134 31.8917C7.50134 29.8273 11.6834 28.1577 16.8363 28.1577C21.9893 28.1577 26.1687 29.83 26.1713 31.8917"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.50293 39.8267C7.50293 41.8884 11.6797 43.5607 16.8353 43.5607C21.9908 43.5607 26.1703 41.8884 26.1703 39.8267"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.1686 21.1568V11.8218C12.1686 9.24401 14.2583 7.1543 16.8361 7.1543H44.8411C47.4189 7.1543 49.5086 9.24401 49.5086 11.8218V42.1605C49.5086 44.7383 47.4189 46.828 44.8411 46.828H33.1723"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Less Traffic",
    },
    {
      icon: (
        <svg
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.625 21.0281H7.25"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.625 34.5281H7.25"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 27.7781H5"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.4368 41.2778C18.0341 47.5358 26.9126 49.6906 34.7559 46.6947C42.5992 43.6988 47.7802 36.1736 47.7802 27.7776C47.7801 19.3816 42.599 11.8565 34.7557 8.86069C26.9124 5.86486 18.0339 8.01977 12.4366 14.2778"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.482 18.9707C25.861 18.2026 26.6432 17.7163 27.4998 17.7163C28.3563 17.7163 29.1385 18.2026 29.5175 18.9707L30.6623 21.2914C30.9899 21.9556 31.6235 22.416 32.3564 22.5226L34.9172 22.8948C35.7645 23.018 36.4684 23.6115 36.7331 24.4258C36.9978 25.24 36.7774 26.134 36.1645 26.7319L34.3107 28.54C33.7808 29.0569 33.5391 29.8014 33.6642 30.531L34.1016 33.0809C34.2463 33.9249 33.8994 34.7779 33.2066 35.2813C32.5139 35.7847 31.5954 35.8512 30.8374 35.4529L28.5464 34.2488C27.8911 33.9044 27.1083 33.9044 26.453 34.2488L24.162 35.4529C23.404 35.8512 22.4855 35.7847 21.7928 35.2813C21.1 34.7779 20.7531 33.9249 20.8978 33.0809L21.3352 30.531C21.4603 29.8014 21.2186 29.0569 20.6886 28.54L18.835 26.7319C18.2221 26.134 18.0017 25.24 18.2664 24.4257C18.5311 23.6115 19.2351 23.018 20.0824 22.8948L22.6432 22.5226C23.3761 22.416 24.0096 21.9556 24.3373 21.2914L25.482 18.9707Z"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Voter Trust",
    },
    {
      icon: (
        <svg
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.21582 42.7363C7.21582 45.1756 9.19323 47.153 11.6325 47.153"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.2158 11.8201V42.7367"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.4658 47.153H11.6325"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M46.9656 11.8197C46.9656 9.38049 44.9881 7.40308 42.5489 7.40308"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M46.9658 18.4451V11.8201"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.6325 7.40299H42.5492"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.21582 11.8197C7.21582 9.38049 9.19323 7.40308 11.6325 7.40308"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.3616 38.4568V38.4568C17.5322 38.4568 16.0491 36.9737 16.0491 35.1443V35.1443C16.0491 33.3148 17.5322 31.8318 19.3616 31.8318V31.8318C21.1911 31.8318 22.6741 33.3148 22.6741 35.1443V35.1443C22.6741 36.9737 21.1911 38.4568 19.3616 38.4568V38.4568Z"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.0491 16.3732H33.7158"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.0491 24.1025H27.0908"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.4033 46.0492V45.1526C30.4106 42.6017 32.4767 40.5356 35.0276 40.5283H42.3416C44.8925 40.5356 46.9585 42.6017 46.9658 45.1526V46.0492C46.9658 46.659 46.4715 47.1533 45.8617 47.1533H31.5075C30.8977 47.1533 30.4033 46.659 30.4033 46.0492Z"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.2679 30.5731C34.2777 28.1362 36.2594 26.1676 38.6964 26.1741C41.1333 26.1806 43.1045 28.1597 43.1013 30.5966C43.098 33.0336 41.1216 35.0074 38.6846 35.0074C37.5102 35.0074 36.3841 34.5397 35.5553 33.7076C34.7265 32.8755 34.2633 31.7475 34.2679 30.5731V30.5731Z"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Fast Setup",
    },
    {
      icon: (
        <svg
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8271 27.7783L25.2496 33.2233L36.1171 22.3333"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.1596 6.29079C26.7121 4.96329 29.2546 4.96329 30.8296 6.29079L34.3846 9.35079C35.0596 9.93579 36.3196 10.4083 37.2196 10.4083H41.0446C43.4296 10.4083 45.3871 12.3658 45.3871 14.7508V18.5758C45.3871 19.4533 45.8596 20.7358 46.4446 21.4108L49.5046 24.9658C50.8321 26.5183 50.8321 29.0608 49.5046 30.6358L46.4446 34.1908C45.8596 34.8658 45.3871 36.1258 45.3871 37.0258V40.8508C45.3871 43.2358 43.4296 45.1933 41.0446 45.1933H37.2196C36.3421 45.1933 35.0596 45.6658 34.3846 46.2508L30.8296 49.3108C29.2771 50.6383 26.7346 50.6383 25.1596 49.3108L21.6046 46.2508C20.9296 45.6658 19.6696 45.1933 18.7696 45.1933H14.8771C12.4921 45.1933 10.5346 43.2358 10.5346 40.8508V37.0033C10.5346 36.1258 10.0621 34.8658 9.49965 34.1908L6.46215 30.6133C5.15715 29.0608 5.15715 26.5408 6.46215 24.9883L9.49965 21.4108C10.0621 20.7358 10.5346 19.4758 10.5346 18.5983V14.7283C10.5346 12.3433 12.4921 10.3858 14.8771 10.3858H18.7696C19.6471 10.3858 20.9296 9.91329 21.6046 9.32829L25.1596 6.29079Z"
            stroke="#53AA00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "App-Ready",
    },
  ];

  return (
    <div className="">
      <div
        className="relative top-20 container mx-auto rounded-2xl z-50 h-[29rem] xs:h-96 sm:h-72 md:h-auto w-11/12 sm:w-full"
        style={{
          background:
            "conic-gradient(from 161deg at 42.01% 72%, #000917 -54.6deg, #0052CC 284.85deg, #000917 305.4deg, #0052CC 644.85deg)",
        }}
      >
        {/* Starry background overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 15%, rgba(255,255,255,0.8) 1px, transparent 1px),
              radial-gradient(circle at 85% 25%, rgba(255,255,255,0.6) 1px, transparent 1px),
              radial-gradient(circle at 25% 75%, rgba(255,255,255,0.7) 1px, transparent 1px),
              radial-gradient(circle at 75% 85%, rgba(255,255,255,0.5) 1px, transparent 1px),
              radial-gradient(circle at 45% 35%, rgba(255,255,255,0.9) 1px, transparent 1px),
              radial-gradient(circle at 65% 65%, rgba(255,255,255,0.4) 1px, transparent 1px),
              radial-gradient(circle at 35% 55%, rgba(255,255,255,0.6) 1px, transparent 1px),
              radial-gradient(circle at 90% 10%, rgba(255,255,255,0.8) 1px, transparent 1px),
              radial-gradient(circle at 10% 90%, rgba(255,255,255,0.7) 1px, transparent 1px),
              radial-gradient(circle at 55% 15%, rgba(255,255,255,0.5) 1px, transparent 1px),
              radial-gradient(circle at 20% 40%, rgba(255,255,255,0.6) 1px, transparent 1px),
              radial-gradient(circle at 80% 60%, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize:
              "150px 150px, 200px 200px, 180px 180px, 220px 220px, 160px 160px, 240px 240px, 190px 190px, 170px 170px, 210px 210px, 140px 140px, 260px 260px, 130px 130px",
          }}
        />

        <div className="mx-auto text-center">
          <div className="pt-10 px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 text-balance">
              The Miracle Traffic Solutions AI
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-6 text-pretty leading-relaxed">
              Miracle Traffic Solutions AI transforms traffic congestion into a
              sustainable revenue stream, providing cities and government
              agencies with a cutting-edge, ready-to-deploy, and self-financing
              solution.
            </p>
          </div>
          <div className="relative top-4 xs:top-8 md:top-10 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto px-10 xl:px-14">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border-0"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-[#0052cc]">
                    {feature.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-0">
        <Image
          src={Flyover}
          alt="flyover image"
          className="h-[80rem] sm:h-[70rem] lg:max-h-screen  object-cover"
        />
        <div className="absolute w-full h-full top-0 mx-auto text-center bg-[#52aa00b9] flex justify-center items-end">
          <div className="container mx-auto mb-12 px-2 sm:px-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-balance">
              Why Our Tolls Don&apos;t Spark Outrage
              <br />
              They Earn Applause
            </h2>
            <p className="text-lg md:text-xl text-white mb-8 text-pretty leading-relaxed w-10/12 mx-auto">
              MTSAI keeps road users in the loop with regular, personalized
              contact. We gamify compliance, reward high-occupancy travel, and
              recognize positive behavior. That&apos;s why public approval goes
              up not down after launch.
            </p>
            <Button
              size="lg"
              className="bg-black hover:bg-black/90 text-white px-8 py-4 text-lg rounded-full font-semibold"
            >
              See Full Platform
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function KeyDifferentiators({
  data = [
    {
      icon: (
        <svg
          width="81"
          height="81"
          viewBox="0 0 81 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40.5713" cy="40.1431" r="40" fill="#D9D9D9" />
          <g clipPath="url(#clip0_727_10422)">
            <path
              d="M64.2967 22.367H60.8527V20.8363C60.8527 19.9945 60.1639 19.3057 59.322 19.3057H48.6074C47.7655 19.3057 47.0767 19.9945 47.0767 20.8363V22.367H34.066V20.8363C34.066 19.9945 33.3772 19.3057 32.5353 19.3057H21.8206C20.9788 19.3057 20.29 19.9945 20.29 20.8363V22.367H16.846C16.5781 22.367 16.3485 22.4818 16.1954 22.7114C16.0423 22.941 16.0423 23.1706 16.1189 23.4385L17.6113 27.1121V51.8324C17.6113 52.2533 17.9557 52.5977 18.3766 52.5977H28.8617L24.9585 67.3304C24.8437 67.7514 25.1116 68.1723 25.4942 68.2488C25.5708 68.2488 25.609 68.2871 25.6856 68.2871C26.03 68.2871 26.3361 68.0575 26.4126 67.7131L30.5454 52.0237C30.5454 52.0237 30.5454 52.0237 30.5454 51.9855C30.5454 51.9472 30.5454 51.9472 30.5454 51.9089C30.5454 51.8707 30.5454 51.8707 30.5454 51.8324C30.5454 51.8324 30.5454 51.8324 30.5454 51.7941V45.0592H37.5483C37.9692 45.0592 38.3136 44.7148 38.3136 44.2939C38.3136 43.8729 37.9692 43.5285 37.5483 43.5285H30.622V42.6484C30.622 38.86 27.5224 35.7604 23.734 35.7604H22.2033V27.7243H29.0913V34.2297C29.0913 35.7221 30.2776 36.9084 31.77 36.9084H49.3727C50.8651 36.9084 52.0514 35.7221 52.0514 34.2297V27.7243H58.9394V35.7604H57.4087C53.6203 35.7604 50.5207 38.86 50.5207 42.6484V43.5285H43.5179C43.0969 43.5285 42.7525 43.8729 42.7525 44.2939C42.7525 44.7148 43.0969 45.0592 43.5179 45.0592H50.5207V51.8324C50.5207 51.8324 50.5207 51.8324 50.5207 51.8707C50.5207 51.9089 50.5207 51.9089 50.5207 51.9472C50.5207 51.9855 50.5207 51.9855 50.5207 52.0237C50.5207 52.0237 50.5207 52.0237 50.5207 52.062L54.6535 67.7514C54.73 68.0958 55.0362 68.3254 55.3806 68.3254C55.4571 68.3254 55.4954 68.3254 55.5719 68.2871C55.9928 68.1723 56.2224 67.7514 56.1076 67.3687L52.281 52.5977H62.7661C63.187 52.5977 63.5314 52.2533 63.5314 51.8324V27.1121L65.0238 23.4385C65.1003 23.2089 65.1003 22.941 64.9473 22.7114C64.7942 22.4818 64.5646 22.367 64.2967 22.367ZM48.6074 20.8363H59.322V22.367H48.6074V20.8363ZM21.8206 20.8363H32.5353V22.367H21.8206V20.8363ZM29.0913 51.0671H19.142V49.5364H29.0913V51.0671ZM19.142 48.0057V27.7243H20.6726V36.5257V48.0057H19.142ZM29.0913 48.0057H22.2033V43.4137H29.0913V48.0057ZM23.734 37.291C26.4126 37.291 28.6704 39.2809 29.0148 41.883H22.2033V37.291H23.734ZM50.5207 34.2297C50.5207 34.8802 50.0232 35.3777 49.3727 35.3777H31.77C31.1195 35.3777 30.622 34.8802 30.622 34.2297V27.7243H50.5207V34.2297ZM57.4087 37.291H58.9394V41.883H52.1279C52.4723 39.2809 54.73 37.291 57.4087 37.291ZM52.0514 43.4137H58.9394V48.0057H52.0514V43.4137ZM62.0007 51.0671H52.0514V49.5364H59.7047H62.0007V51.0671ZM62.0007 48.0057H60.4701V27.7243H62.0007V48.0057ZM62.2303 26.1937H18.9124L17.994 23.8977H63.1487L62.2303 26.1937Z"
              fill="#0052CC"
            />
            <path
              d="M40.5713 51.0669C40.1504 51.0669 39.806 51.4113 39.806 51.8322V52.5976C39.806 53.0185 40.1504 53.3629 40.5713 53.3629C40.9922 53.3629 41.3366 53.0185 41.3366 52.5976V51.8322C41.3366 51.4113 40.9922 51.0669 40.5713 51.0669Z"
              fill="#0052CC"
            />
            <path
              d="M40.5713 55.3528C40.1504 55.3528 39.806 55.6972 39.806 56.1181V57.8784C39.806 58.2993 40.1504 58.6437 40.5713 58.6437C40.9922 58.6437 41.3366 58.2993 41.3366 57.8784V56.1181C41.3366 55.6972 40.9922 55.3528 40.5713 55.3528Z"
              fill="#0052CC"
            />
            <path
              d="M40.5713 60.6719C40.1504 60.6719 39.806 61.0163 39.806 61.4372V63.1975C39.806 63.6184 40.1504 63.9628 40.5713 63.9628C40.9922 63.9628 41.3366 63.6184 41.3366 63.1975V61.4372C41.3366 61.0163 40.9922 60.6719 40.5713 60.6719Z"
              fill="#0052CC"
            />
            <path
              d="M40.5713 65.991C40.1504 65.991 39.806 66.3354 39.806 66.7563V67.5216C39.806 67.9426 40.1504 68.287 40.5713 68.287C40.9922 68.287 41.3366 67.9426 41.3366 67.5216V66.7563C41.3366 66.3354 40.9922 65.991 40.5713 65.991Z"
              fill="#0052CC"
            />
            <path
              d="M34.4486 33.8469C35.7114 33.8469 36.7446 32.8137 36.7446 31.5509C36.7446 30.2881 35.7114 29.2549 34.4486 29.2549C33.1858 29.2549 32.1526 30.2881 32.1526 31.5509C32.1526 32.8137 33.1858 33.8469 34.4486 33.8469ZM34.4486 30.7856C34.8695 30.7856 35.2139 31.13 35.2139 31.5509C35.2139 31.9718 34.8695 32.3162 34.4486 32.3162C34.0277 32.3162 33.6833 31.9718 33.6833 31.5509C33.6833 31.13 34.0277 30.7856 34.4486 30.7856Z"
              fill="#0052CC"
            />
            <path
              d="M40.5713 33.8469C41.8341 33.8469 42.8673 32.8137 42.8673 31.5509C42.8673 30.2881 41.8341 29.2549 40.5713 29.2549C39.3085 29.2549 38.2753 30.2881 38.2753 31.5509C38.2753 32.8137 39.3085 33.8469 40.5713 33.8469ZM40.5713 30.7856C40.9922 30.7856 41.3366 31.13 41.3366 31.5509C41.3366 31.9718 40.9922 32.3162 40.5713 32.3162C40.1504 32.3162 39.806 31.9718 39.806 31.5509C39.806 31.13 40.1504 30.7856 40.5713 30.7856Z"
              fill="#0052CC"
            />
            <path
              d="M46.694 33.8469C47.9568 33.8469 48.99 32.8137 48.99 31.5509C48.99 30.2881 47.9568 29.2549 46.694 29.2549C45.4312 29.2549 44.398 30.2881 44.398 31.5509C44.398 32.8137 45.4312 33.8469 46.694 33.8469ZM46.694 30.7856C47.1149 30.7856 47.4593 31.13 47.4593 31.5509C47.4593 31.9718 47.1149 32.3162 46.694 32.3162C46.273 32.3162 45.9286 31.9718 45.9286 31.5509C45.9286 31.13 46.273 30.7856 46.694 30.7856Z"
              fill="#0052CC"
            />
          </g>
          <defs>
            <clipPath id="clip0_727_10422">
              <rect
                width="48.9814"
                height="61.2268"
                fill="white"
                transform="translate(16.0806 19.3057)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Dynamic Toll Adjustments",
    },
    {
      icon: (
        <svg
          width="81"
          height="82"
          viewBox="0 0 81 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40.8569" cy="40.1431" r="40" fill="#D9D9D9" />
          <g clipPath="url(#clip0_727_3437)">
            <path
              d="M52.0119 37.5685L50.8838 37.5513C50.642 36.6073 50.2794 35.7209 49.8132 34.9035L50.6132 34.115C50.901 33.8329 51.0622 33.4588 51.0622 33.0559C51.0622 32.6529 50.9126 32.2788 50.6305 31.991L49.0937 30.4254C48.5123 29.8383 47.5626 29.8325 46.9697 30.4139L46.1581 31.2024C45.3408 30.7132 44.4601 30.339 43.5277 30.0858L43.5392 28.9634C43.5392 28.5605 43.3895 28.1863 43.1075 27.8985C42.8254 27.6107 42.4513 27.4496 42.0484 27.4496L39.8553 27.4323H39.8438C39.0265 27.4323 38.353 28.0942 38.3415 28.9231L38.33 30.057C37.3976 30.293 36.5111 30.6499 35.6765 31.1276L34.888 30.3275C34.6059 30.0397 34.226 29.8843 33.8231 29.8786C33.4259 29.8786 33.0518 30.034 32.7755 30.3103L31.2099 31.8471C30.6228 32.4227 30.6113 33.3782 31.1926 33.9711L31.9869 34.7769C31.4977 35.5885 31.1236 36.4749 30.8645 37.4131H29.7364C29.7364 37.4131 29.7306 37.4074 29.7249 37.4074C28.9075 37.4074 28.2341 38.0693 28.2225 38.8982L28.2053 41.0854C28.2053 41.4826 28.3549 41.8625 28.6312 42.1503C28.9133 42.4381 29.2932 42.5992 29.6961 42.5992L30.8242 42.6108C31.0545 43.5317 31.4114 44.4239 31.8891 45.2643L31.089 46.0528C30.8012 46.3349 30.6458 46.709 30.6401 47.1062C30.6401 47.5091 30.7897 47.889 31.0717 48.1768L32.6086 49.7366C33.1899 50.3237 34.1397 50.3353 34.7325 49.7539L35.5384 48.9653C36.3557 49.4546 37.2421 49.8287 38.1689 50.082L38.1573 51.2159C38.1573 52.039 38.825 52.7182 39.6481 52.724L41.8354 52.7413H41.8469C42.2441 52.7413 42.624 52.5858 42.906 52.3038C43.1938 52.0218 43.3492 51.6419 43.3492 51.2505L43.3665 50.1165C44.299 49.8805 45.1854 49.5237 46.0142 49.0459L46.8028 49.846C47.3841 50.4331 48.3339 50.4446 48.9267 49.8633L50.4866 48.3264C50.7744 48.0444 50.9356 47.6702 50.9356 47.2673C50.9356 46.8644 50.7859 46.4903 50.5039 46.2082L49.7153 45.3966C50.2046 44.5678 50.5787 43.6871 50.832 42.7662H51.9544C51.9544 42.7662 51.9601 42.7719 51.9659 42.7719C52.7832 42.7719 53.4567 42.1042 53.4682 41.2811L53.4912 39.0824C53.4912 38.2593 52.8235 37.58 52.0004 37.5743L52.0119 37.5685ZM51.9832 41.2696H50.8607C50.1643 41.2754 49.5772 41.7013 49.3987 42.3748C49.1915 43.1576 48.8692 43.9116 48.449 44.6196C48.0921 45.2067 48.1842 45.9607 48.6677 46.4442L49.4505 47.2558L47.8849 48.7927L47.0963 47.9868C46.6071 47.4976 45.8761 47.3997 45.2775 47.7451C44.5752 48.1538 43.8154 48.4588 43.0211 48.6603C42.3477 48.8272 41.893 49.4086 41.8814 50.105L41.8642 51.2389L39.6654 51.2159L39.6769 50.0935C39.6884 49.4086 39.2279 48.8042 38.566 48.6257C37.7774 48.4128 37.0234 48.0962 36.3212 47.676C36.0794 47.5321 35.8147 47.463 35.5499 47.463C35.1642 47.463 34.7843 47.6127 34.4965 47.8947L33.6907 48.6833L32.1539 47.1119L32.9482 46.3291C33.4432 45.8456 33.5468 45.0973 33.2015 44.5045C32.7928 43.7907 32.482 43.0309 32.2863 42.2424C32.1193 41.5804 31.5265 41.1142 30.8415 41.1085L29.7133 41.0912L29.7364 38.8924H30.8645C30.8645 38.8924 30.8703 38.8982 30.876 38.8982C31.5552 38.8982 32.1481 38.4434 32.3265 37.7873C32.5395 36.9929 32.8619 36.2389 33.282 35.5367C33.6274 34.9438 33.5353 34.1955 33.0576 33.7178L32.269 32.9062L33.8404 31.3694L34.6289 32.1637C35.1067 32.6529 35.8607 32.7566 36.4536 32.4112C37.1558 32.0025 37.9156 31.6975 38.7099 31.496C39.3776 31.3291 39.8438 30.7305 39.8438 30.0513L39.8611 28.9173L42.0599 28.9403L42.0484 30.0743C42.0484 30.7535 42.5031 31.3521 43.1593 31.5305C43.9536 31.7435 44.7076 32.0601 45.4041 32.4803C45.997 32.8314 46.7337 32.745 47.2287 32.2615L48.0346 31.473L49.5657 33.0444L48.7656 33.8329C48.2763 34.3164 48.1727 35.0474 48.5181 35.6576C48.921 36.3483 49.2318 37.1081 49.4333 37.9081C49.5944 38.5758 50.1873 39.0478 50.878 39.0536L52.0062 39.0651L51.9774 41.2639L51.9832 41.2696ZM44.9782 33.9653C43.3435 32.8659 41.3807 32.4688 39.4467 32.8429C37.5127 33.2228 35.8434 34.3279 34.7441 35.9626C32.4704 39.3356 33.3626 43.9289 36.7356 46.2025C37.9962 47.0486 39.4237 47.4573 40.8396 47.4573C43.2111 47.4573 45.548 46.3176 46.9697 44.2052C49.2376 40.8322 48.3454 36.2389 44.9782 33.9653ZM45.7322 43.3648C43.9191 46.0528 40.2583 46.7666 37.576 44.9592C34.888 43.1461 34.1742 39.4853 35.9873 36.7972C36.8622 35.4964 38.1976 34.61 39.7345 34.3107C40.1144 34.2358 40.4943 34.2013 40.8742 34.2013C42.0311 34.2013 43.165 34.5467 44.1435 35.2086C46.8316 37.0217 47.5396 40.6825 45.7322 43.3705V43.3648ZM64.4736 31.3866H66.5515C67.4034 31.3866 68.0941 30.6959 68.0941 29.844V27.7719C68.0941 26.92 67.4034 26.2293 66.5515 26.2293H64.4736C63.6217 26.2293 62.931 26.92 62.931 27.7719V28.0597H56.7203V26.3617C56.7203 25.1817 55.7591 24.2205 54.5791 24.2205H52.835V18.004H53.1228C53.9747 18.004 54.6654 17.3133 54.6654 16.4614V14.3893C54.6654 13.5374 53.9747 12.8467 53.1228 12.8467H51.0507C50.1988 12.8467 49.5081 13.5374 49.5081 14.3893V16.4614C49.5081 17.3133 50.1988 18.004 51.0507 18.004H51.3385V24.2205H41.6052V18.004H41.893C42.7448 18.004 43.4356 17.3133 43.4356 16.4614V14.3893C43.4356 13.5374 42.7448 12.8467 41.893 12.8467H39.8208C38.9689 12.8467 38.2725 13.5374 38.2725 14.3893V16.4614C38.2725 17.3133 38.9689 18.004 39.8208 18.004H40.1086V24.2205H30.3753V18.004H30.6631C31.515 18.004 32.2057 17.3133 32.2057 16.4614V14.3893C32.2057 13.5374 31.515 12.8467 30.6631 12.8467H28.5852C27.7333 12.8467 27.0426 13.5374 27.0426 14.3893V16.4614C27.0426 17.3133 27.7333 18.004 28.5852 18.004H28.8787V24.2205H27.1347C25.9547 24.2205 24.9935 25.1817 24.9935 26.3617V28.0597H18.777V27.5704C18.777 26.8279 18.1784 26.2235 17.4359 26.2235H14.9666C14.224 26.2235 13.6254 26.8279 13.6254 27.5704V30.0397C13.6254 30.7823 14.224 31.3866 14.9666 31.3866H17.4416C18.1841 31.3866 18.7828 30.7823 18.7828 30.0397V29.5505H24.9992V39.2838H18.7828V38.7946C18.7828 38.052 18.1841 37.4534 17.4416 37.4534H14.9666C14.224 37.4534 13.6254 38.0578 13.6254 38.7946V41.2639C13.6254 42.0064 14.224 42.6108 14.9666 42.6108H17.4416C18.1841 42.6108 18.7828 42.0064 18.7828 41.2639V40.7746H24.9992V50.5079H18.7828V50.0187C18.7828 49.2762 18.1841 48.6718 17.4416 48.6718H14.9666C14.224 48.6718 13.6254 49.2762 13.6254 50.0187V52.488C13.6254 53.2305 14.224 53.8349 14.9666 53.8349H17.4416C18.1841 53.8349 18.7828 53.2305 18.7828 52.488V51.9987H24.9992V53.7831C24.9992 54.9631 25.9605 55.9243 27.1404 55.9243H28.8787V62.1407H28.5909C27.739 62.1407 27.0483 62.8315 27.0483 63.6833V65.7555C27.0483 66.6074 27.739 67.2981 28.5909 67.2981H30.6688C31.5207 67.2981 32.2114 66.6074 32.2114 65.7555V63.6833C32.2114 62.8315 31.5207 62.1407 30.6688 62.1407H30.3753V55.9243H40.1144V62.1407H39.8266C38.9747 62.1407 38.2782 62.8315 38.2782 63.6833V65.7555C38.2782 66.6074 38.9747 67.2981 39.8266 67.2981H41.8987C42.7506 67.2981 43.4413 66.6074 43.4413 65.7555V63.6833C43.4413 62.8315 42.7506 62.1407 41.8987 62.1407H41.6109V55.9243H51.3442V62.1407H51.0564C50.2046 62.1407 49.5139 62.8315 49.5139 63.6833V65.7555C49.5139 66.6074 50.2046 67.2981 51.0564 67.2981H53.1286C53.9805 67.2981 54.6712 66.6074 54.6712 65.7555V63.6833C54.6712 62.8315 53.9805 62.1407 53.1286 62.1407H52.8408V55.9243H54.5849C55.7648 55.9243 56.7261 54.9631 56.7261 53.7831V51.9987H62.9368V52.2865C62.9368 53.1384 63.6275 53.8291 64.4794 53.8291H66.5573C67.4091 53.8291 68.0999 53.1384 68.0999 52.2865V50.2144C68.0999 49.3625 67.4091 48.6718 66.5573 48.6718H64.4794C63.6275 48.6718 62.9368 49.3625 62.9368 50.2144V50.5022H56.7261V40.7689H62.9368V41.0566C62.9368 41.9085 63.6275 42.5992 64.4794 42.5992H66.5573C67.4091 42.5992 68.0999 41.9085 68.0999 41.0566V38.9845C68.0999 38.1326 67.4091 37.4419 66.5573 37.4419H64.4794C63.6275 37.4419 62.9368 38.1326 62.9368 38.9845V39.2723H56.7261V29.539H62.9368V29.8268C62.9368 30.6786 63.6275 31.3694 64.4794 31.3694L64.4736 31.3866ZM51.0046 16.4614V14.3893C51.0046 14.3893 51.0277 14.3432 51.0507 14.3432H53.1228C53.1228 14.3432 53.1689 14.3663 53.1689 14.3893V16.4614C53.1689 16.4614 53.1459 16.5075 53.1228 16.5075H51.0507C51.0507 16.5075 51.0046 16.4844 51.0046 16.4614ZM39.769 16.4614V14.3893C39.769 14.3893 39.7978 14.3432 39.8208 14.3432H41.893C41.893 14.3432 41.939 14.3663 41.939 14.3893V16.4614C41.939 16.4614 41.916 16.5075 41.893 16.5075H39.8208C39.8208 16.5075 39.769 16.4844 39.769 16.4614ZM28.5391 16.4614V14.3893C28.5391 14.3893 28.5621 14.3432 28.5852 14.3432H30.6631C30.6631 14.3432 30.7091 14.3663 30.7091 14.3893V16.4614C30.7091 16.4614 30.6861 16.5075 30.6631 16.5075H28.5852C28.5852 16.5075 28.5391 16.4844 28.5391 16.4614ZM17.2862 29.8958H15.122V27.7258H17.2862V29.8958ZM17.2862 41.1257H15.122V38.9557H17.2862V41.1257ZM17.2862 52.3556H15.122V50.1856H17.2862V52.3556ZM30.7149 63.7006V65.7728C30.7149 65.7728 30.6919 65.8188 30.6688 65.8188H28.5909C28.5909 65.8188 28.5449 65.7958 28.5449 65.7728V63.7006C28.5449 63.7006 28.5679 63.6546 28.5909 63.6546H30.6688C30.6688 63.6546 30.7149 63.6776 30.7149 63.7006ZM41.9448 63.7006V65.7728C41.9448 65.7728 41.9217 65.8188 41.8987 65.8188H39.8266C39.792 65.8188 39.7748 65.7958 39.7748 65.7728V63.7006C39.7748 63.7006 39.7978 63.6546 39.8266 63.6546H41.8987C41.8987 63.6546 41.9448 63.6776 41.9448 63.7006ZM53.1746 63.7006V65.7728C53.1746 65.7728 53.1516 65.8188 53.1286 65.8188H51.0564C51.0564 65.8188 51.0104 65.7958 51.0104 65.7728V63.7006C51.0104 63.7006 51.0334 63.6546 51.0564 63.6546H53.1286C53.1286 63.6546 53.1746 63.6776 53.1746 63.7006ZM64.4275 50.2317C64.4275 50.2317 64.4506 50.1856 64.4736 50.1856H66.5515C66.5515 50.1856 66.5975 50.2086 66.5975 50.2317V52.3038C66.5975 52.3038 66.5745 52.3498 66.5515 52.3498H64.4736C64.4736 52.3498 64.4275 52.3268 64.4275 52.3038V50.2317ZM64.4275 39.0018C64.4275 39.0018 64.4506 38.9557 64.4736 38.9557H66.5515C66.5515 38.9557 66.5975 38.9787 66.5975 39.0018V41.0739C66.5975 41.0739 66.5745 41.12 66.5515 41.12H64.4736C64.4736 41.12 64.4275 41.0969 64.4275 41.0739V39.0018ZM55.2238 53.8004C55.2238 54.1572 54.936 54.445 54.5791 54.445H27.1404C26.7836 54.445 26.4958 54.1572 26.4958 53.8004V26.3674C26.4958 26.0106 26.7836 25.7228 27.1404 25.7228H54.5791C54.936 25.7228 55.2238 26.0106 55.2238 26.3674V53.8061V53.8004ZM64.4275 27.7719C64.4275 27.7719 64.4506 27.7258 64.4736 27.7258H66.5515C66.5515 27.7258 66.5975 27.7489 66.5975 27.7719V29.844C66.5975 29.844 66.5745 29.8901 66.5515 29.8901H64.4736C64.4736 29.8901 64.4275 29.8671 64.4275 29.844V27.7719ZM41.5016 35.7899C41.1274 35.4446 40.5115 35.4791 40.1949 35.813L36.5226 39.4968C36.2579 39.7673 36.1773 40.1702 36.3039 40.4695C36.4305 40.8437 36.7874 41.0912 37.1903 41.0912H38.4221V43.9979C38.4221 44.516 38.8423 44.9362 39.3603 44.9362H42.3707C42.883 44.9362 43.3032 44.516 43.3032 43.9979V41.0912H44.5349C44.9148 41.0912 45.2544 40.8667 45.4041 40.5098C45.548 40.1587 45.4674 39.7616 45.2026 39.491L41.5303 35.813C41.5303 35.813 41.5131 35.7957 41.5073 35.7899H41.5016ZM42.7391 39.5946C42.221 39.5946 41.8009 40.0148 41.8009 40.5329V43.4396H39.9129V40.5329C39.9129 40.0148 39.4927 39.5946 38.9747 39.5946H38.5315L40.8626 37.2577L43.1938 39.5946H42.7448H42.7391Z"
              fill="#0052CC"
            />
          </g>
          <defs>
            <clipPath id="clip0_727_3437">
              <rect
                width="54.6816"
                height="68.3521"
                fill="white"
                transform="translate(13.5161 12.7432)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Advanced Technology",
    },
    {
      icon: (
        <svg
          width="81"
          height="89"
          viewBox="0 0 81 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40.3214" cy="40.1431" r="40" fill="#D9D9D9" />
          <path
            d="M37.3212 52.1921C30.6546 52.1921 25.1994 46.7373 25.1994 40.0704C25.1994 33.4034 30.6542 27.9486 37.3212 27.9486C37.9273 27.9486 38.3313 27.5446 38.3313 26.9385V15.8266C38.3313 15.2205 37.9273 14.8164 37.3212 14.8164H32.2705C31.7654 14.8164 31.2603 15.2205 31.2603 15.8266C31.1593 18.2509 29.139 19.7662 27.1187 19.7662C26.1086 19.7662 25.1994 19.3621 24.3913 18.655C23.9873 18.2509 23.3812 18.3519 22.9771 18.655L15.8049 25.8272C15.6029 26.0292 15.5019 26.3322 15.5019 26.5343C15.5019 26.8373 15.6029 27.0394 15.8049 27.2414C16.5121 28.0495 16.9161 28.9586 16.9161 29.9689C16.9161 31.8882 15.5019 34.0094 12.9765 34.1104C12.4714 34.1104 11.9664 34.6155 11.9664 35.1206V45.222C11.9664 45.7271 12.3704 46.2322 12.9765 46.2322C14.5927 46.3332 15.9059 47.2423 16.613 48.7575C17.2191 50.2727 16.9161 51.889 15.8049 53.1012C15.6029 53.3032 15.5019 53.5052 15.5019 53.8083C15.5019 54.1114 15.6029 54.3134 15.8049 54.5154L22.9771 61.6876C23.3812 62.0917 23.9873 62.0917 24.3913 61.6876C25.1994 60.9805 26.1085 60.5764 27.1187 60.5764C29.0381 60.5764 31.1593 61.9906 31.2603 64.516C31.2603 65.0211 31.7654 65.5262 32.2705 65.5262H37.3212C37.9273 65.5262 38.3313 65.1221 38.3313 64.516V53.2024C38.3313 52.5963 37.9273 52.1921 37.3212 52.1921ZM33.1796 63.3041C32.5735 60.2736 29.8462 58.4554 27.2197 58.4554C26.0076 58.4554 24.8964 58.8594 23.8863 59.4655L18.0274 53.6067C19.1386 51.8894 19.3406 49.8691 18.5325 47.9498C17.7244 46.0305 16.1082 44.7174 14.0879 44.3133V36.0304C17.1183 35.4243 18.9366 32.697 18.9366 30.0705C18.9366 28.8584 18.5325 27.7472 17.9264 26.7371L23.7853 20.8782C24.7954 21.5854 25.9065 21.8884 27.1187 21.8884C29.7451 21.8884 32.4725 20.0701 33.0786 17.0397H36.3111V26.2322C28.9372 26.7373 23.1795 32.8988 23.1795 40.2734C23.1795 47.6479 28.9373 53.8096 36.3111 54.3146V63.3047L33.1796 63.3041ZM38.3314 49.162C38.3314 49.7681 37.9273 50.1722 37.3213 50.1722C31.7654 50.1722 27.2198 45.6265 27.2198 40.0707C27.2198 34.5149 31.7654 29.9692 37.3213 29.9692C37.9273 29.9692 38.3314 30.3733 38.3314 30.9794C38.3314 31.5855 37.9273 31.9895 37.3213 31.9895C32.8766 31.9895 29.2401 35.6261 29.2401 40.0707C29.2401 44.5153 32.8766 48.1519 37.3213 48.1519C37.9273 48.1519 38.3314 48.5559 38.3314 49.162ZM46.4126 32.9997C48.3319 32.9997 49.8471 31.6865 50.3522 29.9692H54.6958C55.0999 31.6865 56.7161 32.9997 58.6354 32.9997C60.8577 32.9997 62.676 31.1814 62.676 28.9591C62.676 26.7368 60.8577 24.9185 58.6354 24.9185C56.7161 24.9185 55.2009 26.2317 54.6958 27.9489H50.3522C49.9481 26.5347 48.8369 25.4236 47.4228 25.0196V20.878C47.4228 20.2719 47.8268 19.8678 48.4329 19.8678H54.5948C54.9988 21.5851 56.6151 22.8983 58.5344 22.8983C60.7567 22.8983 62.575 21.08 62.575 18.8577C62.575 16.6354 60.7567 14.8171 58.5344 14.8171C56.6151 14.8171 55.0999 16.1303 54.5948 17.8476H48.4329C46.7157 17.8476 45.4025 19.1607 45.4025 20.878V25.0196C43.6853 25.4236 42.372 27.0398 42.372 28.9592C42.372 29.4642 42.4731 29.8683 42.5741 30.2723L38.7355 34.1109C38.3315 34.1109 37.8264 34.0099 37.3213 34.0099C33.9879 34.0099 31.2604 36.7373 31.2604 40.0707C31.2604 43.4042 33.9879 46.1316 37.3213 46.1316C37.8264 46.1316 38.3315 46.0306 38.7355 45.9296L42.5741 49.7681C42.4731 50.2732 42.372 50.6772 42.372 51.1823C42.372 53.1016 43.6852 54.6168 45.4025 55.1219V59.2635C45.4025 60.9807 46.7156 62.2939 48.4329 62.2939H54.5948C54.9988 64.0112 56.6151 65.3244 58.5344 65.3244C60.7567 65.3244 62.575 63.5061 62.575 61.2838C62.575 59.0615 60.7567 57.2432 58.5344 57.2432C56.6151 57.2432 55.0999 58.5564 54.5948 60.2736H48.4329C47.8268 60.2736 47.4228 59.8696 47.4228 59.2635V55.1219C48.837 54.7179 49.9481 53.6067 50.3522 52.1925H54.6958C55.0999 53.9098 56.7161 55.223 58.6354 55.223C60.8577 55.223 62.676 53.4047 62.676 51.1824C62.676 48.9601 60.8577 47.1418 58.6354 47.1418C56.7161 47.1418 55.2009 48.455 54.6958 50.1722H50.3522C49.9481 48.455 48.3319 47.1418 46.4126 47.1418C45.4024 47.1418 44.4933 47.5459 43.7862 48.152L40.7557 45.1215C42.0689 44.2124 43.0791 42.7982 43.2811 41.0809H54.5947C54.9988 42.7982 56.615 44.1114 58.5343 44.1114C60.7566 44.1114 62.5749 42.2931 62.5749 40.0708C62.5749 37.8485 60.7566 36.0302 58.5343 36.0302C56.615 36.0302 55.0998 37.3434 54.5947 39.0606H43.2811C42.978 37.4444 42.0689 35.9292 40.7557 35.0201L43.7862 31.9896C44.4933 32.5957 45.4024 32.9997 46.4126 32.9997ZM58.5343 16.8373C59.6455 16.8373 60.5546 17.7464 60.5546 18.8576C60.5546 19.9688 59.6455 20.8779 58.5343 20.8779C57.4231 20.8779 56.514 19.9688 56.514 18.8576C56.514 17.7464 57.4231 16.8373 58.5343 16.8373ZM58.5343 59.2635C59.6455 59.2635 60.5546 60.1726 60.5546 61.2838C60.5546 62.395 59.6455 63.3041 58.5343 63.3041C57.4231 63.3041 56.514 62.395 56.514 61.2838C56.514 60.1726 57.4231 59.2635 58.5343 59.2635ZM58.5343 49.162C59.6455 49.162 60.5546 50.0711 60.5546 51.1823C60.5546 52.2935 59.6455 53.2026 58.5343 53.2026C57.4231 53.2026 56.514 52.2935 56.514 51.1823C56.514 50.0711 57.4231 49.162 58.5343 49.162ZM46.4126 49.162C47.5238 49.162 48.4329 50.0711 48.4329 51.1823C48.4329 52.2935 47.5238 53.2026 46.4126 53.2026C45.3014 53.2026 44.3923 52.2935 44.3923 51.1823C44.3923 50.0711 45.3014 49.162 46.4126 49.162ZM58.5343 38.0501C59.6455 38.0501 60.5546 38.9592 60.5546 40.0704C60.5546 41.1816 59.6455 42.0907 58.5343 42.0907C57.4231 42.0907 56.514 41.1816 56.514 40.0704C56.514 38.9592 57.4231 38.0501 58.5343 38.0501ZM37.3216 44.111C35.0993 44.111 33.281 42.2927 33.281 40.0704C33.281 37.8481 35.0993 36.0298 37.3216 36.0298C39.5439 36.0298 41.3622 37.8481 41.3622 40.0704C41.3622 42.2927 39.5439 44.111 37.3216 44.111ZM58.5343 26.9388C59.6455 26.9388 60.5546 27.8479 60.5546 28.9591C60.5546 30.0703 59.6455 30.9794 58.5343 30.9794C57.4231 30.9794 56.514 30.0703 56.514 28.9591C56.514 27.8479 57.4231 26.9388 58.5343 26.9388ZM46.4126 26.9388C47.5238 26.9388 48.4329 27.8479 48.4329 28.9591C48.4329 30.0703 47.5238 30.9794 46.4126 30.9794C45.3014 30.9794 44.3923 30.0703 44.3923 28.9591C44.3923 27.8479 45.3014 26.9388 46.4126 26.9388ZM38.3314 40.0704C38.3314 40.6765 37.9273 41.0805 37.3213 41.0805C36.7152 41.0805 36.3111 40.6765 36.3111 40.0704C36.3111 39.4643 36.7152 39.0602 37.3213 39.0602C37.9273 39.0602 38.3314 39.4643 38.3314 40.0704Z"
            fill="#0052CC"
          />
        </svg>
      ),
      title: "Flexible Hardware & Software Integration",
    },
    {
      icon: (
        <svg
          width="81"
          height="81"
          viewBox="0 0 81 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40.5713" cy="40.1431" r="40" fill="#D9D9D9" />
          <g clipPath="url(#clip0_727_10422)">
            <path
              d="M64.2967 22.367H60.8527V20.8363C60.8527 19.9945 60.1639 19.3057 59.322 19.3057H48.6074C47.7655 19.3057 47.0767 19.9945 47.0767 20.8363V22.367H34.066V20.8363C34.066 19.9945 33.3772 19.3057 32.5353 19.3057H21.8206C20.9788 19.3057 20.29 19.9945 20.29 20.8363V22.367H16.846C16.5781 22.367 16.3485 22.4818 16.1954 22.7114C16.0423 22.941 16.0423 23.1706 16.1189 23.4385L17.6113 27.1121V51.8324C17.6113 52.2533 17.9557 52.5977 18.3766 52.5977H28.8617L24.9585 67.3304C24.8437 67.7514 25.1116 68.1723 25.4942 68.2488C25.5708 68.2488 25.609 68.2871 25.6856 68.2871C26.03 68.2871 26.3361 68.0575 26.4126 67.7131L30.5454 52.0237C30.5454 52.0237 30.5454 52.0237 30.5454 51.9855C30.5454 51.9472 30.5454 51.9472 30.5454 51.9089C30.5454 51.8707 30.5454 51.8707 30.5454 51.8324C30.5454 51.8324 30.5454 51.8324 30.5454 51.7941V45.0592H37.5483C37.9692 45.0592 38.3136 44.7148 38.3136 44.2939C38.3136 43.8729 37.9692 43.5285 37.5483 43.5285H30.622V42.6484C30.622 38.86 27.5224 35.7604 23.734 35.7604H22.2033V27.7243H29.0913V34.2297C29.0913 35.7221 30.2776 36.9084 31.77 36.9084H49.3727C50.8651 36.9084 52.0514 35.7221 52.0514 34.2297V27.7243H58.9394V35.7604H57.4087C53.6203 35.7604 50.5207 38.86 50.5207 42.6484V43.5285H43.5179C43.0969 43.5285 42.7525 43.8729 42.7525 44.2939C42.7525 44.7148 43.0969 45.0592 43.5179 45.0592H50.5207V51.8324C50.5207 51.8324 50.5207 51.8324 50.5207 51.8707C50.5207 51.9089 50.5207 51.9089 50.5207 51.9472C50.5207 51.9855 50.5207 51.9855 50.5207 52.0237C50.5207 52.0237 50.5207 52.0237 50.5207 52.062L54.6535 67.7514C54.73 68.0958 55.0362 68.3254 55.3806 68.3254C55.4571 68.3254 55.4954 68.3254 55.5719 68.2871C55.9928 68.1723 56.2224 67.7514 56.1076 67.3687L52.281 52.5977H62.7661C63.187 52.5977 63.5314 52.2533 63.5314 51.8324V27.1121L65.0238 23.4385C65.1003 23.2089 65.1003 22.941 64.9473 22.7114C64.7942 22.4818 64.5646 22.367 64.2967 22.367ZM48.6074 20.8363H59.322V22.367H48.6074V20.8363ZM21.8206 20.8363H32.5353V22.367H21.8206V20.8363ZM29.0913 51.0671H19.142V49.5364H29.0913V51.0671ZM19.142 48.0057V27.7243H20.6726V36.5257V48.0057H19.142ZM29.0913 48.0057H22.2033V43.4137H29.0913V48.0057ZM23.734 37.291C26.4126 37.291 28.6704 39.2809 29.0148 41.883H22.2033V37.291H23.734ZM50.5207 34.2297C50.5207 34.8802 50.0232 35.3777 49.3727 35.3777H31.77C31.1195 35.3777 30.622 34.8802 30.622 34.2297V27.7243H50.5207V34.2297ZM57.4087 37.291H58.9394V41.883H52.1279C52.4723 39.2809 54.73 37.291 57.4087 37.291ZM52.0514 43.4137H58.9394V48.0057H52.0514V43.4137ZM62.0007 51.0671H52.0514V49.5364H59.7047H62.0007V51.0671ZM62.0007 48.0057H60.4701V27.7243H62.0007V48.0057ZM62.2303 26.1937H18.9124L17.994 23.8977H63.1487L62.2303 26.1937Z"
              fill="#0052CC"
            />
            <path
              d="M40.5713 51.0669C40.1504 51.0669 39.806 51.4113 39.806 51.8322V52.5976C39.806 53.0185 40.1504 53.3629 40.5713 53.3629C40.9922 53.3629 41.3366 53.0185 41.3366 52.5976V51.8322C41.3366 51.4113 40.9922 51.0669 40.5713 51.0669Z"
              fill="#0052CC"
            />
            <path
              d="M40.5713 55.3528C40.1504 55.3528 39.806 55.6972 39.806 56.1181V57.8784C39.806 58.2993 40.1504 58.6437 40.5713 58.6437C40.9922 58.6437 41.3366 58.2993 41.3366 57.8784V56.1181C41.3366 55.6972 40.9922 55.3528 40.5713 55.3528Z"
              fill="#0052CC"
            />
            <path
              d="M40.5713 60.6719C40.1504 60.6719 39.806 61.0163 39.806 61.4372V63.1975C39.806 63.6184 40.1504 63.9628 40.5713 63.9628C40.9922 63.9628 41.3366 63.6184 41.3366 63.1975V61.4372C41.3366 61.0163 40.9922 60.6719 40.5713 60.6719Z"
              fill="#0052CC"
            />
            <path
              d="M40.5713 65.991C40.1504 65.991 39.806 66.3354 39.806 66.7563V67.5216C39.806 67.9426 40.1504 68.287 40.5713 68.287C40.9922 68.287 41.3366 67.9426 41.3366 67.5216V66.7563C41.3366 66.3354 40.9922 65.991 40.5713 65.991Z"
              fill="#0052CC"
            />
            <path
              d="M34.4486 33.8469C35.7114 33.8469 36.7446 32.8137 36.7446 31.5509C36.7446 30.2881 35.7114 29.2549 34.4486 29.2549C33.1858 29.2549 32.1526 30.2881 32.1526 31.5509C32.1526 32.8137 33.1858 33.8469 34.4486 33.8469ZM34.4486 30.7856C34.8695 30.7856 35.2139 31.13 35.2139 31.5509C35.2139 31.9718 34.8695 32.3162 34.4486 32.3162C34.0277 32.3162 33.6833 31.9718 33.6833 31.5509C33.6833 31.13 34.0277 30.7856 34.4486 30.7856Z"
              fill="#0052CC"
            />
            <path
              d="M40.5713 33.8469C41.8341 33.8469 42.8673 32.8137 42.8673 31.5509C42.8673 30.2881 41.8341 29.2549 40.5713 29.2549C39.3085 29.2549 38.2753 30.2881 38.2753 31.5509C38.2753 32.8137 39.3085 33.8469 40.5713 33.8469ZM40.5713 30.7856C40.9922 30.7856 41.3366 31.13 41.3366 31.5509C41.3366 31.9718 40.9922 32.3162 40.5713 32.3162C40.1504 32.3162 39.806 31.9718 39.806 31.5509C39.806 31.13 40.1504 30.7856 40.5713 30.7856Z"
              fill="#0052CC"
            />
            <path
              d="M46.694 33.8469C47.9568 33.8469 48.99 32.8137 48.99 31.5509C48.99 30.2881 47.9568 29.2549 46.694 29.2549C45.4312 29.2549 44.398 30.2881 44.398 31.5509C44.398 32.8137 45.4312 33.8469 46.694 33.8469ZM46.694 30.7856C47.1149 30.7856 47.4593 31.13 47.4593 31.5509C47.4593 31.9718 47.1149 32.3162 46.694 32.3162C46.273 32.3162 45.9286 31.9718 45.9286 31.5509C45.9286 31.13 46.273 30.7856 46.694 30.7856Z"
              fill="#0052CC"
            />
          </g>
          <defs>
            <clipPath id="clip0_727_10422">
              <rect
                width="48.9814"
                height="61.2268"
                fill="white"
                transform="translate(16.0806 19.3057)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "City Control",
    },
    {
      icon: (
        <svg
          width="81"
          height="82"
          viewBox="0 0 81 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40.8569" cy="40.1431" r="40" fill="#D9D9D9" />
          <g clipPath="url(#clip0_727_3437)">
            <path
              d="M52.0119 37.5685L50.8838 37.5513C50.642 36.6073 50.2794 35.7209 49.8132 34.9035L50.6132 34.115C50.901 33.8329 51.0622 33.4588 51.0622 33.0559C51.0622 32.6529 50.9126 32.2788 50.6305 31.991L49.0937 30.4254C48.5123 29.8383 47.5626 29.8325 46.9697 30.4139L46.1581 31.2024C45.3408 30.7132 44.4601 30.339 43.5277 30.0858L43.5392 28.9634C43.5392 28.5605 43.3895 28.1863 43.1075 27.8985C42.8254 27.6107 42.4513 27.4496 42.0484 27.4496L39.8553 27.4323H39.8438C39.0265 27.4323 38.353 28.0942 38.3415 28.9231L38.33 30.057C37.3976 30.293 36.5111 30.6499 35.6765 31.1276L34.888 30.3275C34.6059 30.0397 34.226 29.8843 33.8231 29.8786C33.4259 29.8786 33.0518 30.034 32.7755 30.3103L31.2099 31.8471C30.6228 32.4227 30.6113 33.3782 31.1926 33.9711L31.9869 34.7769C31.4977 35.5885 31.1236 36.4749 30.8645 37.4131H29.7364C29.7364 37.4131 29.7306 37.4074 29.7249 37.4074C28.9075 37.4074 28.2341 38.0693 28.2225 38.8982L28.2053 41.0854C28.2053 41.4826 28.3549 41.8625 28.6312 42.1503C28.9133 42.4381 29.2932 42.5992 29.6961 42.5992L30.8242 42.6108C31.0545 43.5317 31.4114 44.4239 31.8891 45.2643L31.089 46.0528C30.8012 46.3349 30.6458 46.709 30.6401 47.1062C30.6401 47.5091 30.7897 47.889 31.0717 48.1768L32.6086 49.7366C33.1899 50.3237 34.1397 50.3353 34.7325 49.7539L35.5384 48.9653C36.3557 49.4546 37.2421 49.8287 38.1689 50.082L38.1573 51.2159C38.1573 52.039 38.825 52.7182 39.6481 52.724L41.8354 52.7413H41.8469C42.2441 52.7413 42.624 52.5858 42.906 52.3038C43.1938 52.0218 43.3492 51.6419 43.3492 51.2505L43.3665 50.1165C44.299 49.8805 45.1854 49.5237 46.0142 49.0459L46.8028 49.846C47.3841 50.4331 48.3339 50.4446 48.9267 49.8633L50.4866 48.3264C50.7744 48.0444 50.9356 47.6702 50.9356 47.2673C50.9356 46.8644 50.7859 46.4903 50.5039 46.2082L49.7153 45.3966C50.2046 44.5678 50.5787 43.6871 50.832 42.7662H51.9544C51.9544 42.7662 51.9601 42.7719 51.9659 42.7719C52.7832 42.7719 53.4567 42.1042 53.4682 41.2811L53.4912 39.0824C53.4912 38.2593 52.8235 37.58 52.0004 37.5743L52.0119 37.5685ZM51.9832 41.2696H50.8607C50.1643 41.2754 49.5772 41.7013 49.3987 42.3748C49.1915 43.1576 48.8692 43.9116 48.449 44.6196C48.0921 45.2067 48.1842 45.9607 48.6677 46.4442L49.4505 47.2558L47.8849 48.7927L47.0963 47.9868C46.6071 47.4976 45.8761 47.3997 45.2775 47.7451C44.5752 48.1538 43.8154 48.4588 43.0211 48.6603C42.3477 48.8272 41.893 49.4086 41.8814 50.105L41.8642 51.2389L39.6654 51.2159L39.6769 50.0935C39.6884 49.4086 39.2279 48.8042 38.566 48.6257C37.7774 48.4128 37.0234 48.0962 36.3212 47.676C36.0794 47.5321 35.8147 47.463 35.5499 47.463C35.1642 47.463 34.7843 47.6127 34.4965 47.8947L33.6907 48.6833L32.1539 47.1119L32.9482 46.3291C33.4432 45.8456 33.5468 45.0973 33.2015 44.5045C32.7928 43.7907 32.482 43.0309 32.2863 42.2424C32.1193 41.5804 31.5265 41.1142 30.8415 41.1085L29.7133 41.0912L29.7364 38.8924H30.8645C30.8645 38.8924 30.8703 38.8982 30.876 38.8982C31.5552 38.8982 32.1481 38.4434 32.3265 37.7873C32.5395 36.9929 32.8619 36.2389 33.282 35.5367C33.6274 34.9438 33.5353 34.1955 33.0576 33.7178L32.269 32.9062L33.8404 31.3694L34.6289 32.1637C35.1067 32.6529 35.8607 32.7566 36.4536 32.4112C37.1558 32.0025 37.9156 31.6975 38.7099 31.496C39.3776 31.3291 39.8438 30.7305 39.8438 30.0513L39.8611 28.9173L42.0599 28.9403L42.0484 30.0743C42.0484 30.7535 42.5031 31.3521 43.1593 31.5305C43.9536 31.7435 44.7076 32.0601 45.4041 32.4803C45.997 32.8314 46.7337 32.745 47.2287 32.2615L48.0346 31.473L49.5657 33.0444L48.7656 33.8329C48.2763 34.3164 48.1727 35.0474 48.5181 35.6576C48.921 36.3483 49.2318 37.1081 49.4333 37.9081C49.5944 38.5758 50.1873 39.0478 50.878 39.0536L52.0062 39.0651L51.9774 41.2639L51.9832 41.2696ZM44.9782 33.9653C43.3435 32.8659 41.3807 32.4688 39.4467 32.8429C37.5127 33.2228 35.8434 34.3279 34.7441 35.9626C32.4704 39.3356 33.3626 43.9289 36.7356 46.2025C37.9962 47.0486 39.4237 47.4573 40.8396 47.4573C43.2111 47.4573 45.548 46.3176 46.9697 44.2052C49.2376 40.8322 48.3454 36.2389 44.9782 33.9653ZM45.7322 43.3648C43.9191 46.0528 40.2583 46.7666 37.576 44.9592C34.888 43.1461 34.1742 39.4853 35.9873 36.7972C36.8622 35.4964 38.1976 34.61 39.7345 34.3107C40.1144 34.2358 40.4943 34.2013 40.8742 34.2013C42.0311 34.2013 43.165 34.5467 44.1435 35.2086C46.8316 37.0217 47.5396 40.6825 45.7322 43.3705V43.3648ZM64.4736 31.3866H66.5515C67.4034 31.3866 68.0941 30.6959 68.0941 29.844V27.7719C68.0941 26.92 67.4034 26.2293 66.5515 26.2293H64.4736C63.6217 26.2293 62.931 26.92 62.931 27.7719V28.0597H56.7203V26.3617C56.7203 25.1817 55.7591 24.2205 54.5791 24.2205H52.835V18.004H53.1228C53.9747 18.004 54.6654 17.3133 54.6654 16.4614V14.3893C54.6654 13.5374 53.9747 12.8467 53.1228 12.8467H51.0507C50.1988 12.8467 49.5081 13.5374 49.5081 14.3893V16.4614C49.5081 17.3133 50.1988 18.004 51.0507 18.004H51.3385V24.2205H41.6052V18.004H41.893C42.7448 18.004 43.4356 17.3133 43.4356 16.4614V14.3893C43.4356 13.5374 42.7448 12.8467 41.893 12.8467H39.8208C38.9689 12.8467 38.2725 13.5374 38.2725 14.3893V16.4614C38.2725 17.3133 38.9689 18.004 39.8208 18.004H40.1086V24.2205H30.3753V18.004H30.6631C31.515 18.004 32.2057 17.3133 32.2057 16.4614V14.3893C32.2057 13.5374 31.515 12.8467 30.6631 12.8467H28.5852C27.7333 12.8467 27.0426 13.5374 27.0426 14.3893V16.4614C27.0426 17.3133 27.7333 18.004 28.5852 18.004H28.8787V24.2205H27.1347C25.9547 24.2205 24.9935 25.1817 24.9935 26.3617V28.0597H18.777V27.5704C18.777 26.8279 18.1784 26.2235 17.4359 26.2235H14.9666C14.224 26.2235 13.6254 26.8279 13.6254 27.5704V30.0397C13.6254 30.7823 14.224 31.3866 14.9666 31.3866H17.4416C18.1841 31.3866 18.7828 30.7823 18.7828 30.0397V29.5505H24.9992V39.2838H18.7828V38.7946C18.7828 38.052 18.1841 37.4534 17.4416 37.4534H14.9666C14.224 37.4534 13.6254 38.0578 13.6254 38.7946V41.2639C13.6254 42.0064 14.224 42.6108 14.9666 42.6108H17.4416C18.1841 42.6108 18.7828 42.0064 18.7828 41.2639V40.7746H24.9992V50.5079H18.7828V50.0187C18.7828 49.2762 18.1841 48.6718 17.4416 48.6718H14.9666C14.224 48.6718 13.6254 49.2762 13.6254 50.0187V52.488C13.6254 53.2305 14.224 53.8349 14.9666 53.8349H17.4416C18.1841 53.8349 18.7828 53.2305 18.7828 52.488V51.9987H24.9992V53.7831C24.9992 54.9631 25.9605 55.9243 27.1404 55.9243H28.8787V62.1407H28.5909C27.739 62.1407 27.0483 62.8315 27.0483 63.6833V65.7555C27.0483 66.6074 27.739 67.2981 28.5909 67.2981H30.6688C31.5207 67.2981 32.2114 66.6074 32.2114 65.7555V63.6833C32.2114 62.8315 31.5207 62.1407 30.6688 62.1407H30.3753V55.9243H40.1144V62.1407H39.8266C38.9747 62.1407 38.2782 62.8315 38.2782 63.6833V65.7555C38.2782 66.6074 38.9747 67.2981 39.8266 67.2981H41.8987C42.7506 67.2981 43.4413 66.6074 43.4413 65.7555V63.6833C43.4413 62.8315 42.7506 62.1407 41.8987 62.1407H41.6109V55.9243H51.3442V62.1407H51.0564C50.2046 62.1407 49.5139 62.8315 49.5139 63.6833V65.7555C49.5139 66.6074 50.2046 67.2981 51.0564 67.2981H53.1286C53.9805 67.2981 54.6712 66.6074 54.6712 65.7555V63.6833C54.6712 62.8315 53.9805 62.1407 53.1286 62.1407H52.8408V55.9243H54.5849C55.7648 55.9243 56.7261 54.9631 56.7261 53.7831V51.9987H62.9368V52.2865C62.9368 53.1384 63.6275 53.8291 64.4794 53.8291H66.5573C67.4091 53.8291 68.0999 53.1384 68.0999 52.2865V50.2144C68.0999 49.3625 67.4091 48.6718 66.5573 48.6718H64.4794C63.6275 48.6718 62.9368 49.3625 62.9368 50.2144V50.5022H56.7261V40.7689H62.9368V41.0566C62.9368 41.9085 63.6275 42.5992 64.4794 42.5992H66.5573C67.4091 42.5992 68.0999 41.9085 68.0999 41.0566V38.9845C68.0999 38.1326 67.4091 37.4419 66.5573 37.4419H64.4794C63.6275 37.4419 62.9368 38.1326 62.9368 38.9845V39.2723H56.7261V29.539H62.9368V29.8268C62.9368 30.6786 63.6275 31.3694 64.4794 31.3694L64.4736 31.3866ZM51.0046 16.4614V14.3893C51.0046 14.3893 51.0277 14.3432 51.0507 14.3432H53.1228C53.1228 14.3432 53.1689 14.3663 53.1689 14.3893V16.4614C53.1689 16.4614 53.1459 16.5075 53.1228 16.5075H51.0507C51.0507 16.5075 51.0046 16.4844 51.0046 16.4614ZM39.769 16.4614V14.3893C39.769 14.3893 39.7978 14.3432 39.8208 14.3432H41.893C41.893 14.3432 41.939 14.3663 41.939 14.3893V16.4614C41.939 16.4614 41.916 16.5075 41.893 16.5075H39.8208C39.8208 16.5075 39.769 16.4844 39.769 16.4614ZM28.5391 16.4614V14.3893C28.5391 14.3893 28.5621 14.3432 28.5852 14.3432H30.6631C30.6631 14.3432 30.7091 14.3663 30.7091 14.3893V16.4614C30.7091 16.4614 30.6861 16.5075 30.6631 16.5075H28.5852C28.5852 16.5075 28.5391 16.4844 28.5391 16.4614ZM17.2862 29.8958H15.122V27.7258H17.2862V29.8958ZM17.2862 41.1257H15.122V38.9557H17.2862V41.1257ZM17.2862 52.3556H15.122V50.1856H17.2862V52.3556ZM30.7149 63.7006V65.7728C30.7149 65.7728 30.6919 65.8188 30.6688 65.8188H28.5909C28.5909 65.8188 28.5449 65.7958 28.5449 65.7728V63.7006C28.5449 63.7006 28.5679 63.6546 28.5909 63.6546H30.6688C30.6688 63.6546 30.7149 63.6776 30.7149 63.7006ZM41.9448 63.7006V65.7728C41.9448 65.7728 41.9217 65.8188 41.8987 65.8188H39.8266C39.792 65.8188 39.7748 65.7958 39.7748 65.7728V63.7006C39.7748 63.7006 39.7978 63.6546 39.8266 63.6546H41.8987C41.8987 63.6546 41.9448 63.6776 41.9448 63.7006ZM53.1746 63.7006V65.7728C53.1746 65.7728 53.1516 65.8188 53.1286 65.8188H51.0564C51.0564 65.8188 51.0104 65.7958 51.0104 65.7728V63.7006C51.0104 63.7006 51.0334 63.6546 51.0564 63.6546H53.1286C53.1286 63.6546 53.1746 63.6776 53.1746 63.7006ZM64.4275 50.2317C64.4275 50.2317 64.4506 50.1856 64.4736 50.1856H66.5515C66.5515 50.1856 66.5975 50.2086 66.5975 50.2317V52.3038C66.5975 52.3038 66.5745 52.3498 66.5515 52.3498H64.4736C64.4736 52.3498 64.4275 52.3268 64.4275 52.3038V50.2317ZM64.4275 39.0018C64.4275 39.0018 64.4506 38.9557 64.4736 38.9557H66.5515C66.5515 38.9557 66.5975 38.9787 66.5975 39.0018V41.0739C66.5975 41.0739 66.5745 41.12 66.5515 41.12H64.4736C64.4736 41.12 64.4275 41.0969 64.4275 41.0739V39.0018ZM55.2238 53.8004C55.2238 54.1572 54.936 54.445 54.5791 54.445H27.1404C26.7836 54.445 26.4958 54.1572 26.4958 53.8004V26.3674C26.4958 26.0106 26.7836 25.7228 27.1404 25.7228H54.5791C54.936 25.7228 55.2238 26.0106 55.2238 26.3674V53.8061V53.8004ZM64.4275 27.7719C64.4275 27.7719 64.4506 27.7258 64.4736 27.7258H66.5515C66.5515 27.7258 66.5975 27.7489 66.5975 27.7719V29.844C66.5975 29.844 66.5745 29.8901 66.5515 29.8901H64.4736C64.4736 29.8901 64.4275 29.8671 64.4275 29.844V27.7719ZM41.5016 35.7899C41.1274 35.4446 40.5115 35.4791 40.1949 35.813L36.5226 39.4968C36.2579 39.7673 36.1773 40.1702 36.3039 40.4695C36.4305 40.8437 36.7874 41.0912 37.1903 41.0912H38.4221V43.9979C38.4221 44.516 38.8423 44.9362 39.3603 44.9362H42.3707C42.883 44.9362 43.3032 44.516 43.3032 43.9979V41.0912H44.5349C44.9148 41.0912 45.2544 40.8667 45.4041 40.5098C45.548 40.1587 45.4674 39.7616 45.2026 39.491L41.5303 35.813C41.5303 35.813 41.5131 35.7957 41.5073 35.7899H41.5016ZM42.7391 39.5946C42.221 39.5946 41.8009 40.0148 41.8009 40.5329V43.4396H39.9129V40.5329C39.9129 40.0148 39.4927 39.5946 38.9747 39.5946H38.5315L40.8626 37.2577L43.1938 39.5946H42.7448H42.7391Z"
              fill="#0052CC"
            />
          </g>
          <defs>
            <clipPath id="clip0_727_3437">
              <rect
                width="54.6816"
                height="68.3521"
                fill="white"
                transform="translate(13.5161 12.7432)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Security and Redundancy",
    },
    {
      icon: (
        <svg
          width="81"
          height="89"
          viewBox="0 0 81 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40.3214" cy="40.1431" r="40" fill="#D9D9D9" />
          <path
            d="M37.3212 52.1921C30.6546 52.1921 25.1994 46.7373 25.1994 40.0704C25.1994 33.4034 30.6542 27.9486 37.3212 27.9486C37.9273 27.9486 38.3313 27.5446 38.3313 26.9385V15.8266C38.3313 15.2205 37.9273 14.8164 37.3212 14.8164H32.2705C31.7654 14.8164 31.2603 15.2205 31.2603 15.8266C31.1593 18.2509 29.139 19.7662 27.1187 19.7662C26.1086 19.7662 25.1994 19.3621 24.3913 18.655C23.9873 18.2509 23.3812 18.3519 22.9771 18.655L15.8049 25.8272C15.6029 26.0292 15.5019 26.3322 15.5019 26.5343C15.5019 26.8373 15.6029 27.0394 15.8049 27.2414C16.5121 28.0495 16.9161 28.9586 16.9161 29.9689C16.9161 31.8882 15.5019 34.0094 12.9765 34.1104C12.4714 34.1104 11.9664 34.6155 11.9664 35.1206V45.222C11.9664 45.7271 12.3704 46.2322 12.9765 46.2322C14.5927 46.3332 15.9059 47.2423 16.613 48.7575C17.2191 50.2727 16.9161 51.889 15.8049 53.1012C15.6029 53.3032 15.5019 53.5052 15.5019 53.8083C15.5019 54.1114 15.6029 54.3134 15.8049 54.5154L22.9771 61.6876C23.3812 62.0917 23.9873 62.0917 24.3913 61.6876C25.1994 60.9805 26.1085 60.5764 27.1187 60.5764C29.0381 60.5764 31.1593 61.9906 31.2603 64.516C31.2603 65.0211 31.7654 65.5262 32.2705 65.5262H37.3212C37.9273 65.5262 38.3313 65.1221 38.3313 64.516V53.2024C38.3313 52.5963 37.9273 52.1921 37.3212 52.1921ZM33.1796 63.3041C32.5735 60.2736 29.8462 58.4554 27.2197 58.4554C26.0076 58.4554 24.8964 58.8594 23.8863 59.4655L18.0274 53.6067C19.1386 51.8894 19.3406 49.8691 18.5325 47.9498C17.7244 46.0305 16.1082 44.7174 14.0879 44.3133V36.0304C17.1183 35.4243 18.9366 32.697 18.9366 30.0705C18.9366 28.8584 18.5325 27.7472 17.9264 26.7371L23.7853 20.8782C24.7954 21.5854 25.9065 21.8884 27.1187 21.8884C29.7451 21.8884 32.4725 20.0701 33.0786 17.0397H36.3111V26.2322C28.9372 26.7373 23.1795 32.8988 23.1795 40.2734C23.1795 47.6479 28.9373 53.8096 36.3111 54.3146V63.3047L33.1796 63.3041ZM38.3314 49.162C38.3314 49.7681 37.9273 50.1722 37.3213 50.1722C31.7654 50.1722 27.2198 45.6265 27.2198 40.0707C27.2198 34.5149 31.7654 29.9692 37.3213 29.9692C37.9273 29.9692 38.3314 30.3733 38.3314 30.9794C38.3314 31.5855 37.9273 31.9895 37.3213 31.9895C32.8766 31.9895 29.2401 35.6261 29.2401 40.0707C29.2401 44.5153 32.8766 48.1519 37.3213 48.1519C37.9273 48.1519 38.3314 48.5559 38.3314 49.162ZM46.4126 32.9997C48.3319 32.9997 49.8471 31.6865 50.3522 29.9692H54.6958C55.0999 31.6865 56.7161 32.9997 58.6354 32.9997C60.8577 32.9997 62.676 31.1814 62.676 28.9591C62.676 26.7368 60.8577 24.9185 58.6354 24.9185C56.7161 24.9185 55.2009 26.2317 54.6958 27.9489H50.3522C49.9481 26.5347 48.8369 25.4236 47.4228 25.0196V20.878C47.4228 20.2719 47.8268 19.8678 48.4329 19.8678H54.5948C54.9988 21.5851 56.6151 22.8983 58.5344 22.8983C60.7567 22.8983 62.575 21.08 62.575 18.8577C62.575 16.6354 60.7567 14.8171 58.5344 14.8171C56.6151 14.8171 55.0999 16.1303 54.5948 17.8476H48.4329C46.7157 17.8476 45.4025 19.1607 45.4025 20.878V25.0196C43.6853 25.4236 42.372 27.0398 42.372 28.9592C42.372 29.4642 42.4731 29.8683 42.5741 30.2723L38.7355 34.1109C38.3315 34.1109 37.8264 34.0099 37.3213 34.0099C33.9879 34.0099 31.2604 36.7373 31.2604 40.0707C31.2604 43.4042 33.9879 46.1316 37.3213 46.1316C37.8264 46.1316 38.3315 46.0306 38.7355 45.9296L42.5741 49.7681C42.4731 50.2732 42.372 50.6772 42.372 51.1823C42.372 53.1016 43.6852 54.6168 45.4025 55.1219V59.2635C45.4025 60.9807 46.7156 62.2939 48.4329 62.2939H54.5948C54.9988 64.0112 56.6151 65.3244 58.5344 65.3244C60.7567 65.3244 62.575 63.5061 62.575 61.2838C62.575 59.0615 60.7567 57.2432 58.5344 57.2432C56.6151 57.2432 55.0999 58.5564 54.5948 60.2736H48.4329C47.8268 60.2736 47.4228 59.8696 47.4228 59.2635V55.1219C48.837 54.7179 49.9481 53.6067 50.3522 52.1925H54.6958C55.0999 53.9098 56.7161 55.223 58.6354 55.223C60.8577 55.223 62.676 53.4047 62.676 51.1824C62.676 48.9601 60.8577 47.1418 58.6354 47.1418C56.7161 47.1418 55.2009 48.455 54.6958 50.1722H50.3522C49.9481 48.455 48.3319 47.1418 46.4126 47.1418C45.4024 47.1418 44.4933 47.5459 43.7862 48.152L40.7557 45.1215C42.0689 44.2124 43.0791 42.7982 43.2811 41.0809H54.5947C54.9988 42.7982 56.615 44.1114 58.5343 44.1114C60.7566 44.1114 62.5749 42.2931 62.5749 40.0708C62.5749 37.8485 60.7566 36.0302 58.5343 36.0302C56.615 36.0302 55.0998 37.3434 54.5947 39.0606H43.2811C42.978 37.4444 42.0689 35.9292 40.7557 35.0201L43.7862 31.9896C44.4933 32.5957 45.4024 32.9997 46.4126 32.9997ZM58.5343 16.8373C59.6455 16.8373 60.5546 17.7464 60.5546 18.8576C60.5546 19.9688 59.6455 20.8779 58.5343 20.8779C57.4231 20.8779 56.514 19.9688 56.514 18.8576C56.514 17.7464 57.4231 16.8373 58.5343 16.8373ZM58.5343 59.2635C59.6455 59.2635 60.5546 60.1726 60.5546 61.2838C60.5546 62.395 59.6455 63.3041 58.5343 63.3041C57.4231 63.3041 56.514 62.395 56.514 61.2838C56.514 60.1726 57.4231 59.2635 58.5343 59.2635ZM58.5343 49.162C59.6455 49.162 60.5546 50.0711 60.5546 51.1823C60.5546 52.2935 59.6455 53.2026 58.5343 53.2026C57.4231 53.2026 56.514 52.2935 56.514 51.1823C56.514 50.0711 57.4231 49.162 58.5343 49.162ZM46.4126 49.162C47.5238 49.162 48.4329 50.0711 48.4329 51.1823C48.4329 52.2935 47.5238 53.2026 46.4126 53.2026C45.3014 53.2026 44.3923 52.2935 44.3923 51.1823C44.3923 50.0711 45.3014 49.162 46.4126 49.162ZM58.5343 38.0501C59.6455 38.0501 60.5546 38.9592 60.5546 40.0704C60.5546 41.1816 59.6455 42.0907 58.5343 42.0907C57.4231 42.0907 56.514 41.1816 56.514 40.0704C56.514 38.9592 57.4231 38.0501 58.5343 38.0501ZM37.3216 44.111C35.0993 44.111 33.281 42.2927 33.281 40.0704C33.281 37.8481 35.0993 36.0298 37.3216 36.0298C39.5439 36.0298 41.3622 37.8481 41.3622 40.0704C41.3622 42.2927 39.5439 44.111 37.3216 44.111ZM58.5343 26.9388C59.6455 26.9388 60.5546 27.8479 60.5546 28.9591C60.5546 30.0703 59.6455 30.9794 58.5343 30.9794C57.4231 30.9794 56.514 30.0703 56.514 28.9591C56.514 27.8479 57.4231 26.9388 58.5343 26.9388ZM46.4126 26.9388C47.5238 26.9388 48.4329 27.8479 48.4329 28.9591C48.4329 30.0703 47.5238 30.9794 46.4126 30.9794C45.3014 30.9794 44.3923 30.0703 44.3923 28.9591C44.3923 27.8479 45.3014 26.9388 46.4126 26.9388ZM38.3314 40.0704C38.3314 40.6765 37.9273 41.0805 37.3213 41.0805C36.7152 41.0805 36.3111 40.6765 36.3111 40.0704C36.3111 39.4643 36.7152 39.0602 37.3213 39.0602C37.9273 39.0602 38.3314 39.4643 38.3314 40.0704Z"
            fill="#0052CC"
          />
        </svg>
      ),
      title: "Cost and Experience Sharing",
    },
  ],
}) {
  return (
    <div className="container py-16 mx-auto space-y-10">
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 text-center lg:text-left mx-3 sm:mx-0">
        <div className="space-y-3 col-span-2">
          <p className="text-[22px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Key Differentiators
          </p>
          <p className="text-[14px] sm:text-lg lg:text-2xl xl:text-[26px] text-[#797979]">
            Why should cities and governments choose Miracle Traffic Solutions
            AI?
          </p>
        </div>
        <p className="text-[10px] sm:text-xs lg:text-base xl:text-lg text-[#797979]">
          Miracle Traffic Solutions AI offers a highly customizable, risk-free
          traffic management system, setting itself apart from other tolling
          software solutions.
        </p>
      </div>
      <div className="relative">
        <KeyDifferentiatorsSwiper data={data} />
      </div>
      <div className="flex items-center justify-center gap-5">
        {/* Left swiper button */}
        <button className="swiper-button-prev-key-diff">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.428574 17.5713C0.428574 13.0248 2.23469 8.6644 5.4496 5.44949C8.66451 2.23458 13.0249 0.428467 17.5714 0.428467C19.8227 0.428467 22.0518 0.87188 24.1317 1.73339C26.2116 2.5949 28.1014 3.85763 29.6933 5.44949C31.2851 7.04135 32.5479 8.93117 33.4094 11.011C34.2709 13.0909 34.7143 15.3201 34.7143 17.5713C34.7143 22.1179 32.9082 26.4782 29.6933 29.6932C26.4783 32.9081 22.118 34.7142 17.5714 34.7142C15.3202 34.7142 13.091 34.2708 11.0111 33.4093C8.93128 32.5477 7.04146 31.285 5.4496 29.6932C2.23469 26.4782 0.428574 22.1179 0.428574 17.5713ZM27.8571 15.857H14.1429L20.1429 9.85704L17.7086 7.42275L7.56 17.5713L17.7086 27.7199L20.1429 25.2856L14.1429 19.2856H27.8571V15.857Z"
              fill="black"
            />
          </svg>
        </button>
        {/* Right swiper button */}
        <button className="swiper-button-next-key-diff">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.5714 17.5713C34.5714 22.1179 32.7653 26.4782 29.5504 29.6932C26.3355 32.9081 21.9751 34.7142 17.4286 34.7142C15.1773 34.7142 12.9482 34.2708 10.8683 33.4093C8.78842 32.5477 6.89861 31.285 5.30675 29.6932C2.09184 26.4782 0.285721 22.1179 0.285721 17.5713C0.285721 13.0248 2.09184 8.6644 5.30675 5.44949C8.52166 2.23458 12.882 0.428467 17.4286 0.428467C19.6798 0.428467 21.909 0.87188 23.9889 1.73339C26.0687 2.5949 27.9585 3.85763 29.5504 5.44949C31.1423 7.04135 32.405 8.93117 33.2665 11.011C34.128 13.0909 34.5714 15.3201 34.5714 17.5713ZM7.14286 19.2856H20.8571L14.8571 25.2856L17.2914 27.7199L27.44 17.5713L17.2914 7.42275L14.8571 9.85704L20.8571 15.857H7.14286V19.2856Z"
              fill="black"
            />
          </svg>
        </button>
        <div className="bg-[#53AA00] h-[2px] w-full md:block hidden" />
      </div>
    </div>
  );
}

export function Talk() {
  return (
    <div className="mx-3 sm:mx-0">
      <div className="bg-black rounded-3xl container sm:mx-auto flex flex-col lg:flex-row justify-between overflow-hidden mb-16">
        <div className="flex flex-col gap-8 lg:gap-0 justify-between px-14 py-10">
          <div className="text-white leading-11">
            <p className="text-[39px]">Let’s Talk About</p>
            <p className="text-[34px] font-bold">
              What Miracle Traffic Solutions AI
            </p>
            <p className="text-[34px] font-bold">Can Do for Your City.</p>
          </div>
          <div className="space-x-4 mb-4 flex flex-col lg:flex-row space-y-3">
            <Button className="bg-white shadow-2xl text-[#53AA00] rounded-full text-xl py-6 px-7 lg:w-fit w-full">
              Book a Demo
            </Button>
            <Button className="bg-[#53AA00] shadow-2xl text-white rounded-full  text-xl py-6 px-7 lg:w-fit w-full">
              Contact Us
            </Button>
          </div>
        </div>
        <Image
          src={cars}
          alt="Cars"
          className="w-full relative lg:block right-12 lg:right-0"
        />
      </div>
    </div>
  );
}

export function TechnicalUniversity() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-16 container mx-auto mb-16">
      <div className="flex-1 relative lg:mt-0 mt-10">
        <Image
          src={bme}
          alt="BME Business partner"
          className="absolute -top-28"
        />
        <Image
          src={buda}
          alt="OBuda university"
          className="absolute -bottom-16 right-0"
        />
        <div className="sm:rounded-tl-xl overflow-hidden">
          <Image
            src={university}
            alt="Hungry's university"
            className="aspect-video w-full py-4 object-cover object-top"
          />
        </div>
      </div>
      <div className="flex-1 lg:text-left text-center mx-3.5 lg:mx-0">
        <div className="text-[22px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold flex-1">
          <p>Working with</p>
          <p className="text-[#0052CC]">Hungary&apos;s Leading</p>
          <p className="text-[#0052CC]">Technical Universities</p>
        </div>
        <p className="text-[#797979] text-sm lg:text-base xl:text-lg mt-10">
          Miracle Traffic AI is proud to collaborate with one of Europe&apos;s
          top technical universities like Budapest University of Technology and
          Economics (BME), investing millions in AI, traffic cameras, and
          traffic lights to tackle congestion. Our partnership ensures the
          highest standards in traffic management technology.
        </p>
        <p className="text-[#797979] font-semibold text-sm lg:text-base xl:text-lg mt-6">
          Want to join the Miracle Traffic AI and become a partner?
        </p>
        <Button className="bg-white text-[#53AA00] border border-[#53AA00] text-xl px-9 py-6 rounded-full mt-5 w-full sm:w-fit">
          More about Partnerships
        </Button>
      </div>
    </div>
  );
}

export function WorldsBest({
  data = [
    {
      img: crux,
      alt: "crux",
    },
    {
      img: ondc,
      alt: "ondc",
    },
    {
      img: adaptive,
      alt: "adaptive",
    },
    {
      img: india,
      alt: "india",
    },
    {
      img: fastag,
      alt: "fastag",
    },
    {
      img: handol,
      alt: "handol",
    },
    {
      img: cell,
      alt: "openxcell",
    },
  ],
}) {
  return (
    <div className="mb-14">
      <div className="container mx-auto flex items-center justify-center gap-4 mb-12">
        <div className="bg-[#53AA00] md:block hidden h-[2px] w-full" />
        <p className="text-[22px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold whitespace-nowrap">
          Built by <span className="text-[#0052CC]">World&apos;s Best</span>
        </p>
        <div className="bg-[#53AA00] md:block hidden h-[2px] w-full" />
      </div>
      <div className="overflow-hidden space-y-8 relative">
        {/* Left blur overlay */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Right blur overlay */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* First row - moving left to right */}
        <div className="flex animate-marquee-left">
          {[...data, ...data].map((logo, index) => (
            <div
              key={`left-${index}`}
              className="flex-shrink-0 mx-4 bg-white rounded-lg shadow-md p-6 w-[200px] h-[100px] flex items-center justify-center border"
            >
              <Image
                src={logo.img || "/placeholder.svg"}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Second row - moving right to left */}
        <div className="flex animate-marquee-right">
          {[...data, ...data].map((logo, index) => (
            <div
              key={`right-${index}`}
              className="flex-shrink-0 mx-4 bg-white rounded-lg shadow-md p-6 w-[200px] h-[100px] flex items-center justify-center border"
            >
              <Image
                src={logo.img || "/placeholder.svg"}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LatestNews() {
  const cardData = [
    {
      image: img,
      imageAlt: "Futuristic autonomous car with technology visualization",
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      author: {
        name: "Tracey Wilson",
        avatar: "/placeholder.svg?height=48&width=48",
        initials: "TW",
      },
      date: "August 20, 2022",
    },
    {
      image: abc,
      imageAlt: "AI and machine learning visualization",
      category: "AI & ML",
      title:
        "Artificial Intelligence Revolution: Transforming Industries Through Smart Automation",
      author: {
        name: "Marcus Chen",
        avatar: "/placeholder.svg?height=48&width=48",
        initials: "MC",
      },
      date: "September 15, 2022",
    },
    {
      image: xyz,
      imageAlt: "Cybersecurity and digital protection",
      category: "Security",
      title:
        "Cybersecurity in the Digital Age: Protecting Your Business from Modern Threats",
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=48&width=48",
        initials: "SJ",
      },
      date: "October 3, 2022",
    },
  ];
  return (
    <div className="container mx-auto mb-14">
      <div className="flex gap-4 items-center mb-14">
        <p className="text-5xl font-bold whitespace-nowrap text-center sm:text-left w-fit mx-auto">
          Latest News
        </p>
        <div className="bg-[#53AA00] h-[2px] w-full md:block hidden" />
        <div className="md:flex hidden gap-4">
          {/* Left swiper button */}
          <button className="swiper-button-prev-latest-news">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.428574 17.5713C0.428574 13.0248 2.23469 8.6644 5.4496 5.44949C8.66451 2.23458 13.0249 0.428467 17.5714 0.428467C19.8227 0.428467 22.0518 0.87188 24.1317 1.73339C26.2116 2.5949 28.1014 3.85763 29.6933 5.44949C31.2851 7.04135 32.5479 8.93117 33.4094 11.011C34.2709 13.0909 34.7143 15.3201 34.7143 17.5713C34.7143 22.1179 32.9082 26.4782 29.6933 29.6932C26.4783 32.9081 22.118 34.7142 17.5714 34.7142C15.3202 34.7142 13.091 34.2708 11.0111 33.4093C8.93128 32.5477 7.04146 31.285 5.4496 29.6932C2.23469 26.4782 0.428574 22.1179 0.428574 17.5713ZM27.8571 15.857H14.1429L20.1429 9.85704L17.7086 7.42275L7.56 17.5713L17.7086 27.7199L20.1429 25.2856L14.1429 19.2856H27.8571V15.857Z"
                fill="black"
              />
            </svg>
          </button>
          {/* Right swiper button */}
          <button className="swiper-button-next-latest-news">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.5714 17.5713C34.5714 22.1179 32.7653 26.4782 29.5504 29.6932C26.3355 32.9081 21.9751 34.7142 17.4286 34.7142C15.1773 34.7142 12.9482 34.2708 10.8683 33.4093C8.78842 32.5477 6.89861 31.285 5.30675 29.6932C2.09184 26.4782 0.285721 22.1179 0.285721 17.5713C0.285721 13.0248 2.09184 8.6644 5.30675 5.44949C8.52166 2.23458 12.882 0.428467 17.4286 0.428467C19.6798 0.428467 21.909 0.87188 23.9889 1.73339C26.0687 2.5949 27.9585 3.85763 29.5504 5.44949C31.1423 7.04135 32.405 8.93117 33.2665 11.011C34.128 13.0909 34.5714 15.3201 34.5714 17.5713ZM7.14286 19.2856H20.8571L14.8571 25.2856L17.2914 27.7199L27.44 17.5713L17.2914 7.42275L14.8571 9.85704L20.8571 15.857H7.14286V19.2856Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative">
        <LatestNewsSwiper cardData={cardData} />
      </div>
    </div>
  );
}

interface TechnologyCardProps {
  image: string | StaticImageData;
  imageAlt: string;
  category: string;
  title: string;
  author: {
    name: string;
    avatar: string;
    initials: string;
  };
  date: string;
}

export function TechnologyCard({
  image,
  imageAlt,
  category,
  title,
  author,
  date,
}: TechnologyCardProps) {
  return (
    <div className="max-w-md mx-auto p-4 h-full">
      <Card className="overflow-hidden border-2 border-[#53aa00]/20 rounded-2xl shadow-lg bg-[#ffffff] h-full flex flex-col">
        <div className="relative">
          <Image
            src={image}
            alt={imageAlt}
            className="w-full h-[280px] object-cover"
            width={400}
            height={280}
          />
        </div>

        <CardContent className="p-6 space-y-4 flex-1 flex flex-col justify-between">
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="bg-transparent text-[#4b6bfb] hover:bg-[#4b6bfb]/10 font-medium text-sm px-0"
            >
              {category}
            </Badge>

            <h2 className="text-[#181a2a] text-2xl font-bold leading-tight tracking-tight">
              {title}
            </h2>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Avatar className="w-12 h-12">
              <AvatarImage
                src={author.avatar || "/placeholder.svg"}
                alt={author.name}
              />
              <AvatarFallback className="bg-[#97989f]/20 text-[#181a2a] font-medium">
                {author.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-[#181a2a] font-medium text-sm">
                {author.name}
              </span>
              <span className="text-[#97989f] text-sm">{date}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function FAQ({
  accordionItems,
  defaultOpenItem,
}: {
  accordionItems: AccordionItemData[];
  defaultOpenItem?: string;
}) {
  return (
    <div className="relative">
      <Image
        src={faq}
        alt=""
        className="absolute top-0 w-full h-full object-cover -z-50"
      />
      <div className="absolute top-0 w-full h-full bg-[#000000e5] -z-20" />
      <div className="w-full h-full z-10 py-10 pt-4">
        <div>
          <p className="text-white text-center text-[22px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold mt-20 mb-4">
            FAQs
          </p>
          <div className="container mx-auto text-white">
            <Accordion
              type="single"
              collapsible
              defaultValue={defaultOpenItem}
              className="w-full"
            >
              {accordionItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b"
                  style={{ borderColor: "#d9d9d9" }}
                >
                  <AccordionTrigger
                    className="text-xs md:text-lg font-semibold hover:no-underline py-4 lg:py-6 text-left"
                    // style={{ color: "#000000" }}
                  >
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-[10px] sm:text-base leading-relaxed pb-6 lg:pb-8"
                    // style={{ color: "#000000" }}
                  >
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
