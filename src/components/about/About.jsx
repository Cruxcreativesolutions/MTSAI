"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import waveSvg from "../../assets/about/wavesvg.svg"
import Pointor from "../../assets/about/pointor.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ComparisonImage from "../../assets/about/comparissionImage.png"
import { Card } from "../ui/cardwithcenterIcon";
import "swiper/css"
import "swiper/css/autoplay"
import { TimelineCard } from "../ui/timelinecards";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import cell from "@/assets/home/logos/openxcell.png";
import crux from "@/assets/home/logos/Crux.png";
import adaptive from "@/assets/home/logos/Adaptive.png";

export const WhoWeAre = ({ title, description, stats, backgroundImage, bottomImage }) => {
  return (
    <section className="relative w-full text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
      </div>

      <div className="relative container mx-auto px-6 py-20 text-center">
        {/* Heading */}
        <motion.h2
          className="text-5xl md:text-5xl font-bold mb-6 mt-10"
         initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.02,  duration: 0.6 }}
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="max-w-5xl mx-auto text-sm md:text-lg text-gray-200 leading-relaxed mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {description}
        </motion.p>
      {/* stats */}
    
      <motion.div
        className="w-full max-w-md mx-auto flex justify-center items-center gap-6 mb-12 px-6 py-6 rounded-xl"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        style={{
          background: "#000917",
          boxShadow: `
            0 0 0 1px #57789D,
            0 4px 20px rgba(0, 82, 204, 0.3),
            0 8px 40px rgba(0, 82, 204, 0.2),
            0 16px 60px rgba(0, 9, 23, 0.4),
            0 32px 80px rgba(0, 9, 23, 0.2)
          `,
          border: "1px solid #57789D",
        }}
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center flex-1">
            {/* Stat content */}
            <div className="flex flex-col items-center justify-center text-center flex-1">
              <motion.h3
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text"
              style={{
                  background: "linear-gradient(90deg, #ffffff 0%, #0052CC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </motion.h3>
              <motion.p  initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }} className="text-sm uppercase tracking-wide text-gray-300 mt-1">{stat.label}
              </motion.p>
            </div>

            {/* Divider except for last item */}
            {index < stats.length - 1 && <div className="hidden md:block w-px h-12 bg-white/30 mx-4"></div>}
          </div>
        ))}
      </motion.div>
        {/* Bottom Image */}
        <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="relative mx-auto w-full max-w-5xl"
        transition={{ delay: 0.8, duration: 0.9 }}
        >
          {/* Box Shadow Behind */}
          <Image
            src={bottomImage}
            alt="Traffic AI"
            width={600}
            height={600}
            className="w-full "
          />
        </motion.div>
      </div>
    </section>
  );
};

export const ProblemSolvingSec = ({ title, description, description2,description3, imageSrc }) => {
  const words = title.split(" ");
  const firstTwo = words.slice(0, 2).join(" ");
  const rest = words.slice(2).join(" ");

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold"
      >
        <span className="text-blue-600">{firstTwo}</span>{" "}
        <span className="text-black">{rest}</span>
      </motion.h2>

      {/* Descriptions */}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-md text-black font-light py-2"
      >
        {description}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-md text-black font-light py-4"
      >
        {description2}
      </motion.p>

      {/* Image Container */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[500px] my-2">
        <Image
          src={imageSrc}
          alt="Traffic comparison"
          fill
          className="object-cover"
          quality={90}
        />

        {/* Top Center Border */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[150px] h-3 bg-green-600 rounded-b-md "></div>

      </div>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-md text-black font-light py-4"
      >
        {description3}
      </motion.p>
    </div>
  );
};

export const TrafficComparisonSection = () => {
  const buttons = [
    {
      label: "Without MTSAI",
      position: "absolute bg-[#53AA00] text-white text-md md:text-xl font-bold py-2 px-2 md:py-4 md:px-6 rounded-lg shadow-2xl cursor-pointer -top-5 left-6 md:top-8 md:left-2",
      initial: { opacity: 0, x: -50, y: -50 },
      delay: 0,
    },
    {
      label: "With MTSAI",
      position: "absolute bg-[#53AA00] text-white font-bold md:text-xl text-md p-2 md:py-4 md:px-6 rounded-lg shadow-2xl cursor-pointer -bottom-2 right-6 md:bottom-8 md:right-1",
      initial: { opacity: 0, x: 50, y: 50 },
      delay: 0.2,
    },
  ];

  return (
    <section className="relative w-full py-8 md:py-16  flex justify-center items-center">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Main Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 sm:h-96 md:h-[400px]">
          <Image
            src={ComparisonImage}
            alt="Traffic comparison: without MTSAI (left, congested) and with MTSAI (right, flowing)"
            fill
            quality={90}
            className="object-cover object-center"
          />
        </div>

        {/* Buttons (mapped) */}
        {buttons.map((btn, idx) => (
          <motion.div
            key={idx}
            className={btn.position}
            initial={btn.initial}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: btn.delay }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 10px 15px -3px rgba(0,0,0,0.2), 0 4px 6px -2px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {btn.label}
          </motion.div>
        ))}
      </div>
    </section>
  );
};


export const IndiaStory = ({ title, items }) => {
  return (
    <section className="relative w-full">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 py-10">
 <div className="flex justify-center md:justify-between items-center gap-4 mb-12">
        <motion.h2 initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.1 }}
         className="text-3xl md:text-4xl font-bold text-black ">
          <span className="text-blue-600">{title.split(" ")[0]}</span>{" "}
          {title.split(" ").slice(1).join(" ")}
        </motion.h2>
        <motion.div initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }} className="hidden md:flex flex-1 h-[2px] bg-green-500" />
      </div>

      {/* Timeline container */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Items */}
        <div className="relative z-10 grid md:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
                 {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.6 + 0.4,
                  duration: 0.6,
                }}
                className="text-center px-4"
              >
                <h3 className="font-bold text-md md:text-xl text-blue-700 ">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
              {/* Circle */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: idx * 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
                className="relative mb-6"
              >
                <Image
                  src={Pointor} // 👉 your circle svg
                  alt="circle"
                  width={60}
                  height={60}
                />
              </motion.div>

           
            </div>
          ))}
        </div>
      </div>
      </div>
       {/* Background Line SVG */}
       <div className="hidden md:block absolute bottom-0 left-0 w-full z-0">
          <Image
            src={waveSvg} // 👉 use your wave line svg
            alt="timeline line"
            width={1200}
            height={800}
            className="w-full h-full"
          />
      </div>
    </section>
  );
};

export const ImpactSection = ({ impact }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <motion.h2  
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.1 }}
      className="text-3xl md:text-[45px] font-bold text-center mb-12">
        Our <span className="text-blue-600">Impact</span>
      </motion.h2>

      {/* Mobile view */}
    <div className="block sm:hidden space-y-6">
  {impact.map((item, idx) => (
    <motion.div
      key={idx}
      className="bg-white rounded-lg border-[1px] border-green-500 border-b-8 p-6 h-64 flex flex-col justify-between text-center "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.2, duration: 0.6 }}
    >
      <h3 className="text-center font-bold text-xl text-blue-700 mb-2">
        {item.title}
      </h3>
      <p className="text-center text-md " dangerouslySetInnerHTML={{__html:item.description}}></p>
    </motion.div>
  ))}
</div>

{/* Tablet & Desktop*/}
<div className="hidden sm:block">
  <Swiper
    modules={[Pagination, Autoplay]}
    spaceBetween={20}
    pagination={{ clickable: true }}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    loop={true}
    className="pb-10"
    breakpoints={{
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1400: { slidesPerView: 5 },
    }}
  >
    {impact.map((item, idx) => (
      <SwiperSlide key={idx}>
        <motion.div
          className="bg-white rounded-lg border-2 border-green-500 border-b-10 p-6 h-72 flex flex-col justify-between text-center "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2, duration: 0.6 }}
        >
          <h3 className="font-bold text-[22px]  text-blue-700 ">
            {item.title}
          </h3>
          <p className="px-2 text-lg" dangerouslySetInnerHTML={{__html:item?.description}}></p>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </section>
  );
};

export const MiracleTracffic=({title,title2,data})=>{
  return(
     <div className="max-w-7xl mx-auto text-center px-3 py-20">
        {/* Section Heading */}
        <div className="flex items-center justify-center mb-4">
          <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.1 }} 
          className="w-40 h-0.5 bg-green-500"></motion.div>
          <motion.h1
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.1 }}
          className="text-3xl md:text-[45px] font-extrabold text-gray-900 mx-4">
           {title}
          </motion.h1>
          <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.1 }}
          className="w-40 h-0.5 bg-green-500"></motion.div>
        </div>

        <motion.h3 
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.1 }}
        className="text-2xl md:text-[40px] font-bold text-blue-600 mb-16">
         {title2}
        </motion.h3>

        {/* Cards Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-16 md:space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
        {
            data?.map((item, indx) => (
            <Card
              key={indx} 
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))
        }
      </motion.div>
      </div>
  )
}

export const HowItStarted=({timelineSteps})=> {
 return (
    <section className="relative px-8 md:px-4 py-10 max-w-6xl mx-auto">
      <div className="bg-[#53AA00] rounded-3xl p-0 md:p-12 relative overflow-visible">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="flex items-center gap-10 mb-12">
            {/* Left text */}
            <div className="text-white flex-1">
              <motion.h2 
              initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }} 
            className="text-4xl font-bold mb-4 text-balance">How it started</motion.h2>
              <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }} 
              className="text-lg leading-relaxed">It started with simple questions...</motion.p>
            </div>

            <div className="flex items-center -mt-20">
              <TimelineCard title={timelineSteps[0].title} image={timelineSteps[0].image} />
              <div className="w-12 h-0 border-t-2 border-dotted border-white"></div>
              <TimelineCard title={timelineSteps[1].title} image={timelineSteps[1].image} />
            </div>
          </div>

          <div className="flex justify-center mb-1">
            <div className="w-0 h-16 border-l-2 border-dotted border-white"></div>
          </div>

          <div className="flex justify-center items-center mb-[-4rem]">
            <TimelineCard title={timelineSteps[2].title} image={timelineSteps[2].image} />
            <div className="w-12 h-0 border-t-2 border-dotted border-white"></div>
            <TimelineCard title={timelineSteps[3].title} image={timelineSteps[3].image} />
            <div className="w-12 h-0 border-t-2 border-dotted border-white"></div>
            <TimelineCard title={timelineSteps[4].title} image={timelineSteps[4].image} />
          </div>
        </div>

       {/* Mobile Layout */}
   <div className="md:hidden">
  <div className="text-white mb-8 text-center">
    <motion.h2
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }} 
    className="text-2xl font-bold mb-3 p-2 text-balance">How it started</motion.h2>
    <motion.p
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }} 
    className="text-base leading-relaxed">
      It started with simple questions...
    </motion.p>
  </div>

  <div className="-mx-2 space-y-12 mb-4">
    {timelineSteps.map((step, index) => (
      <div key={index} className="relative">
        <motion.div
         initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }} 
             className="relative w-full h-48  rounded-lg overflow-visible ">
          {/* Image section */}
          <Image
            src={step.image}
            alt="images"
            className="w-full h-full object-cover rounded-lg"
            width={400}
            height={300}
          />

          {/* Content overlay */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-600 px-4 py-3 w-44 h-32 rounded-xl flex items-center justify-center z-20 shadow-md">
            <motion.p  initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}  className="text-white text-sm leading-tight font-medium text-center">
              {step.title}
            </motion.p>
          </div>
        </motion.div>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  )
}

export const JourneySec = ({ description, data }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.1 }}
        className="text-3xl md:text-[45px] font-bold text-center mb-8"
      >
        Our <span className="text-[#0152CA]">Journey</span>
      </motion.h2>
      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12"
      >
        {description}
      </motion.p>

      {/* Journey timeline column */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-7 items-center">
        {data?.map((item, indx) => (
          <div key={indx} className="relative w-full max-w-md ">
            {/* Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="h-[400px] relative z-10 border shadow-lg rounded-lg p-6 bg-white hover:bg-[#0152CA] hover:text-white transition-colors duration-300"
            >
              <h3 className="font-bold text-2xl mb-2 md:h-12">{item.title}</h3>
              <p className="text-base mb-4 md:h-20">{item.description}</p>
              <div className="flex justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="rounded-md object-contain"
                />
              </div>
            </motion.div>

             {/* Horizontal dotted line (not after last card) */}
           {indx !== data.length - 1 && indx !== 2 && (
  <div className="hidden md:block absolute top-1/2 -right-7 transform -translate-y-1/2 w-7 border-t-2 border-dotted border-black z-10"></div>
)}

          </div>
        ))}
      </div>
    </section>
  );
};



export const PartnersSection=()=> {
  const partners = [
    { name: "Openxcell", logo: cell },
    { name: "CRUX", logo: crux },
    { name: "Adaptive Recognition", logo: adaptive },
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
        initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2, duration: 0.1 }}
         className="text-3xl font-bold text-balance md:text-4xl">
          Our <span className="text-[#0152CA]">Partners</span>
        </motion.h2>
        <motion.div className="mt-8 flex items-center justify-center gap-8 md:flex-row flex-col"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }} >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-24 w-48 items-center justify-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  )
} 




export const MobilityRevolutionSection = () => {
  const revolutionItems = [
    {
      title: "Government Leaders",
      buttonText: "Schedule a Pilot City Demo",
      bgColor: "bg-green-600",
     
    },
    {
      title: "SuperApp Partners",
      buttonText: "Explore Integration Opportunities",
      bgColor: "bg-blue-600",
     
    },
    {
      title: "Investors",
      buttonText: "Access Pre-IPO Information",
      bgColor: "bg-indigo-600",
     
    },
    {
      title: "Citizens",
      buttonText: "Discover How You Save Money",
      bgColor: "bg-green-600",
   
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading row */}
       <div className="flex items-center justify-between gap-4">
  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2, duration: 0.1 }}
    className="text-3xl md:text-[45px] font-bold text-black text-center md:text-left"
  >
    Join India&apos;s
    <span className="text-[#0152CA] px-1">Mobility Revolution</span>
  </motion.h2>

  {/* Line */}
  <div className="hidden md:block h-1 w-24 bg-[#53AA00] md:w-lg" />
</div>


        {/* Cards */}
  <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 justify-center">
  {revolutionItems.map((item, index) => (
    <div
      key={index}
      className={cn(
        "mb-2 relative flex flex-col justify-between rounded-lg p-6 sm:p-8 text-white shadow-lg w-full max-w-[450px] md:h-48 h-20 mx-auto",
        item.bgColor
      )}
    >
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.1 }}
        className="text-center md:text-left text-xl sm:text-2xl md:text-[35px] font-semibold"
      >
        {item.title}
      </motion.h3>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        className={cn(
          // default mobile → stick slightly out at bottom center
          "absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] flex justify-center",
          // desktop → move to right middle
          "md:static md:mt-6 md:flex md:justify-start md:w-auto md:translate-x-0 md:translate-y-0 md:absolute md:top-1/2 md:right-[-4rem] md:-translate-y-1/2"
        )}
      >
        <Button
          className={cn(
            "rounded-full bg-white font-medium transition-colors duration-300 shadow-lg",
            "w-full px-4 py-3 text-sm",
            "sm:w-auto sm:px-6 sm:py-3 sm:text-base",
            "border-[#53AA00] text-[#53AA00] hover:bg-[#53AA00] hover:text-white border-1"
          )}
        >
          {item.buttonText}
        </Button>
      </motion.div>
    </div>
  ))}
</div>



      </div>
    </section>
  );
};


