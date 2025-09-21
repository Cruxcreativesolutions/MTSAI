"use client";

import type React from "react";
import Image from "next/image";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LatestNewsSwiper } from "./LatestNewsSwiper";
import { motion } from "framer-motion";
import {
  AccordionItemData,
  CitiesProps,
  ProblemSolvingProps,
  TechnologyCardProps,
} from "@/types/Home";
import { ReactElement } from "react";

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
          <div className="max-w-7xl mx-6 h-fit absolute bottom-0 text-center text-white flex flex-col justify-center items-center gap-6">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-[32px] md:text-5xl lg:text-[56px] font-bold"
            >
              Solving Traffic Congestion With Trust, Technology, And Voter
              Support
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="md:text-xl bg-[#3725258f] px-5 py-2 rounded-2xl mx-auto"
            >
              Miracle Traffic Solution AI — a ready-to-deploy, self-financing
              solution transforms congestion into opportunity. We help
              governments cut gridlock, win public support, and generate
              hundreds of millions in sustainable annual revenues while building
              smarter, cleaner, and more efficient cities.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-9 mt-8 mb-12"
            >
              <Button className="bg-white text-[#53AA00] text-xl hover:bg-white rounded-full px-10 py-[1.65rem] hover:scale-[103%] sm:w-fit w-full">
                Book a Government Demo
              </Button>
              <Button className="bg-black text-white text-xl hover:bg-black rounded-full px-10 py-[1.65rem] hover:scale-[103%] sm:w-fit w-full">
                Download Investor Deck
              </Button>
            </motion.div>
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
          <div className="space-y-3 max-w-7xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-2xl md:text-[32px] font-bold leading-tight"
            >
              Backed by Cities. Powered by Platforms. Built for Citizens
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-base md:text-lg text-white/90"
            >
              Cities and Super Apps alike trust MTSAI to deliver results without
              political risk.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="relative px-6 pb-16">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-10">
          {data.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true, amount: 0.3 }}
              className={`relative ${index === 0 ? "-mt-16" : ""}`}
            >
              <div className="absolute -top-8 left-6 z-20">
                <div className="w-20 h-20 rounded-full bg-transparent shadow-2xl flex items-center justify-center">
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
            </motion.div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative -mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
            {data.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative flex flex-col"
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left Column - Content */}
        <div className="space-y-6 lg:space-y-8 w-full">
          <div className="space-y-2 text-center lg:text-left">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-[22px] sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
              style={{ color: colors.mainTitle }}
            >
              {mainTitle}
            </motion.h1>
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-[22px] sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
              style={{ color: colors.subtitle }}
            >
              {subtitle}
            </motion.h2>
          </div>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-sm md:text-lg leading-relaxed text-center lg:text-left"
            style={{ color: colors.text }}
          >
            {description}
          </motion.p>

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
              {accordionItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <AccordionItem
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
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Right Column - Image with rounded cuts */}
        <div className="relative self-center">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image src={Traffic} alt="traffic on road" />
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="absolute top-0 w-full h-full flex justify-end items-end"
          >
            <Button
              // onClick={buttonAction}
              className="sm:px-6 md:px-10 lg:px-5 xl:px-11 py-1 sm:py-1.5 md:py-3 sm:text-[21px] text-[#53AA00] rounded-full mr-6 2xl:mr-6 mb-4 2xl:mb-8 bg-white border border-[#53AA00] hover:bg-[#53AA00] hover:text-white"
            >
              {buttonText}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function TrafficSolutions({
  features,
}: {
  features: { icon: ReactElement; title: string }[];
}) {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-6 xl:px-0">
        <div
          className="relative top-20 rounded-2xl z-50 h-[29rem] xs:h-96 sm:h-72 md:h-auto mx-auto w-full"
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
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white mb-5 text-balance"
              >
                The Miracle Traffic Solutions AI
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-6 text-pretty leading-relaxed"
              >
                Miracle Traffic Solutions AI transforms traffic congestion into
                a sustainable revenue stream, providing cities and government
                agencies with a cutting-edge, ready-to-deploy, and
                self-financing solution.
              </motion.p>
            </div>
            <div className="relative top-4 xs:top-8 md:top-10 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto px-10 xl:px-14">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <Card className="bg-white p-6 rounded-2xl shadow-lg border-0">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">{feature.icon}</div>
                      <h3 className="text-xl font-semibold text-[#0052cc]">
                        {feature.title}
                      </h3>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-0">
        <Image
          src={Flyover}
          alt="flyover image"
          className="h-[80rem] sm:h-[75rem] lg:max-h-screen  object-cover"
        />
        <div className="absolute w-full h-full top-0 mx-auto text-center bg-[#52aa00b9] flex justify-center items-end">
          <div className="max-w-7xl mx-auto mb-12 px-2 sm:px-0">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-white mb-8 text-balance"
            >
              Why Our Tolls Don&apos;t Spark Outrage
              <br />
              They Earn Applause
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-lg md:text-xl text-white mb-8 text-pretty leading-relaxed w-10/12 mx-auto"
            >
              MTSAI keeps road users in the loop with regular, personalized
              contact. We gamify compliance, reward high-occupancy travel, and
              recognize positive behavior. That&apos;s why public approval goes
              up not down after launch.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-black hover:bg-black/90 text-white px-8 py-4 text-lg rounded-full font-semibold"
              >
                See Full Platform
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function KeyDifferentiators({
  data,
}: {
  data: { icon: ReactElement; title: string }[];
}) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 xl:px-0 py-16 space-y-10">
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 text-center lg:text-left mx-3 sm:mx-0">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-3 col-span-2"
        >
          <p className="text-[22px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Key Differentiators
          </p>
          <p className="text-[14px] sm:text-lg lg:text-2xl xl:text-[26px] text-[#797979]">
            Why should cities and governments choose Miracle Traffic Solutions
            AI?
          </p>
        </motion.div>
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[10px] sm:text-xs lg:text-base xl:text-lg text-[#797979]"
        >
          Miracle Traffic Solutions AI offers a highly customizable, risk-free
          traffic management system, setting itself apart from other tolling
          software solutions.
        </motion.p>
      </div>
      <div className="relative">
        <div className="mb-8">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-key-diff",
              prevEl: ".swiper-button-prev-key-diff",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="key-differentiators-swiper"
          >
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <SwiperSlide>
                  <Card className="bg-[#0052CC] px-6 py-8 h-full w-full min-h-[320px] flex flex-col justify-between">
                    <div className="flex flex-col items-start space-y-4 flex-1">
                      <div className="flex-shrink-0">{item.icon}</div>
                      <p className="text-[26px] lg:text-3xl xl:text-4xl font-semibold text-white text-balance leading-tight flex-1 flex items-center">
                        {item.title}
                      </p>
                    </div>
                  </Card>
                </SwiperSlide>
              </motion.div>
            ))}
          </Swiper>
        </div>
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
    <div className="mx-6 xl:mx-0">
      <div className="bg-black rounded-3xl max-w-7xl mx-auto flex flex-col lg:flex-row justify-between overflow-hidden mb-16 2xl:mb-28">
        <div className="flex flex-col gap-8 lg:gap-0 justify-between px-14 py-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-white leading-11"
          >
            <p className="text-[39px]">Let’s Talk About</p>
            <p className="text-[34px] font-bold">
              What Miracle Traffic Solutions AI
            </p>
            <p className="text-[34px] font-bold">Can Do for Your City.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-x-4 mb-4 flex flex-col lg:flex-row space-y-3 mt-10"
          >
            <Button className="bg-white shadow-2xl text-[#53AA00] rounded-full text-xl py-6 px-7 lg:w-fit w-full">
              Book a Demo
            </Button>
            <Button className="bg-[#53AA00] shadow-2xl text-white rounded-full  text-xl py-6 px-7 lg:w-fit w-full">
              Contact Us
            </Button>
          </motion.div>
        </div>
        <Image
          src={cars}
          alt="Cars"
          className="w-full relative lg:block right-5 xs:right-8 sm:right-12 lg:right-0"
        />
      </div>
    </div>
  );
}

export function TechnicalUniversity() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-16 max-w-7xl lg:mx-auto lg:px-6 xl:px-0 mb-16">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex-1 relative lg:mt-0 mt-10"
      >
        <motion.div
        // initial={{ opacity: 0, y: -30 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.8, delay: 0.8 }}
        // viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src={bme}
            alt="BME Business partner"
            className="absolute -top-16 sm:-top-28 2xl:-top-24 object-cover w-48 sm:w-auto"
          />
        </motion.div>
        <motion.div
        // initial={{ opacity: 0, y: 30 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.8, delay: 0.8 }}
        // viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src={buda}
            alt="OBuda university"
            className="absolute -bottom-10 sm:-bottom-16 right-0 object-cover w-48 sm:w-auto"
          />
        </motion.div>
        <motion.div
          // initial={{ x: -50, opacity: 0 }}
          // whileInView={{ x: 0, opacity: 1 }}
          // transition={{ duration: 0.5, delay: 0.2 }}
          // viewport={{ once: false, amount: 0.3 }}
          className="sm:rounded-tl-xl overflow-hidden"
        >
          <Image
            src={university}
            alt="Hungry's university"
            className="aspect-video w-full py-4 object-cover object-top"
          />
        </motion.div>
      </motion.div>
      <div className="flex-1 lg:text-left text-center mx-6 lg:mx-0">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[22px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold flex-1"
        >
          <p>Working with</p>
          <p className="text-[#0052CC]">Hungary&apos;s Leading</p>
          <p className="text-[#0052CC]">Technical Universities</p>
        </motion.div>
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[#797979] text-sm lg:text-base xl:text-lg mt-10"
        >
          Miracle Traffic AI is proud to collaborate with one of Europe&apos;s
          top technical universities like Budapest University of Technology and
          Economics (BME), investing millions in AI, traffic cameras, and
          traffic lights to tackle congestion. Our partnership ensures the
          highest standards in traffic management technology.
        </motion.p>
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[#797979] font-semibold text-sm lg:text-base xl:text-lg mt-6"
        >
          Want to join the Miracle Traffic AI and become a partner?
        </motion.p>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Button className="bg-white text-[#53AA00] border border-[#53AA00] text-xl px-9 py-6 rounded-full mt-5 w-full sm:w-fit">
            More about Partnerships
          </Button>
        </motion.div>
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
      <div className="max-w-7xl mx-auto px-6 xl:px-0 flex items-center justify-center gap-4 mb-12">
        <div className="bg-[#53AA00] md:block hidden h-[2px] w-full" />
        <p className="text-[22px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold whitespace-nowrap">
          Built by <span className="text-[#0052CC]">World&apos;s Best</span>
        </p>
        <div className="bg-[#53AA00] md:block hidden h-[2px] w-full" />
      </div>
      <div className="overflow-hidden space-y-8 relative mx-auto max-w-7xl px-6 xl:px-0">
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
    <div className="max-w-7xl px-6 xl:px-0 mx-auto mb-14">
      <div className="flex gap-4 items-center mb-10 md:mb-14">
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-5xl font-bold whitespace-nowrap text-center sm:text-left w-fit mx-auto"
        >
          Latest News
        </motion.p>
        <div className="bg-[#53AA00] h-[2px] w-full md:block hidden" />
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="md:flex hidden gap-4"
        >
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
        </motion.div>
      </div>
      <div className="relative">
        <LatestNewsSwiper cardData={cardData} />
      </div>
    </div>
  );
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
      <div className="max-w-7xl px-6 xl:px-0 mx-auto w-full h-full z-10 py-10 pt-4">
        <div>
          <p className="text-white text-center text-[22px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold mt-14 sm:mt-20 mb-4">
            FAQs
          </p>
          <div className="text-white mx-4 xs:mx-3">
            <Accordion
              type="single"
              collapsible
              defaultValue={defaultOpenItem}
              className="w-full"
            >
              {accordionItems.map((item, idx) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b"
                  style={{ borderColor: "#d9d9d9" }}
                >
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                    viewport={{ once: false, amount: 0.3 }}
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
                  </motion.div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
