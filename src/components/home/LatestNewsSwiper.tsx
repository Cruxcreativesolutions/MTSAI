"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface TechnologyCardProps {
  image: string | StaticImageData;
  imageAlt: string;
  category: string;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
}

function TechnologyCard({
  image,
  imageAlt,
  category,
  title,
  author,
  date,
}: TechnologyCardProps) {
  return (
    <div className="max-w-md mx-auto p-4 py-2 h-full">
      <Card className="overflow-hidden border-2 border-[#4B6BFB0D] rounded-2xl shadow-lg bg-[#ffffff] h-full flex flex-col">
        <div className="w-full h-full rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            className="w-full h-[280px] object-cover px-2.5"
            width={400}
            height={280}
          />
        </div>

        <CardContent className="p-6 space-y-4 flex-1 flex flex-col justify-between">
          <div className="space-y-3">
            <Badge
              variant="secondary"
              className="bg-[#4B6BFB0D] text-[#4B6BFB] px-3 py-1 text-sm font-medium"
            >
              {category}
            </Badge>
            <h3 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2">
              {title}
            </h3>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback className="bg-[#53aa00]/10 text-[#53aa00] text-sm font-medium">
                  {author.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex lg:flex-row flex-col gap-4">
                <p className="text-sm font-medium text-gray-900">
                  {author.name}
                </p>
                <p className="text-xs text-gray-500">{date}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface LatestNewsSwiperProps {
  cardData: TechnologyCardProps[];
}

export function LatestNewsSwiper({ cardData }: LatestNewsSwiperProps) {
  return (
    <>
      <div className="mb-8">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-latest-news",
            prevEl: ".swiper-button-prev-latest-news",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="latest-news-swiper"
        >
          {cardData.map((item, index) => (
            <SwiperSlide key={index} className="w-full py-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: false, amount: 0.3 }}
                className="hover:scale-[103%] transition-all"
              >
                <TechnologyCard
                  title={item.title}
                  author={item.author}
                  category={item.category}
                  date={item.date}
                  image={item.image}
                  imageAlt={item.imageAlt}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="space-x-4 flex md:hidden mx-auto w-fit mt-3 gap-3">
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
              fill="#000000"
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
              d="M34.5714 17.5713C34.5714 22.1179 32.7653 26.4782 29.5504 29.6932C26.3355 32.9081 21.9751 34.7142 17.4286 34.7142C15.1773 34.7142 12.9482 34.2708 10.8683 33.4093C8.7884 32.5477 6.89858 31.285 5.30671 29.6932C3.71485 28.1013 2.45212 26.2115 1.59061 24.1316C0.7291 22.0517 0.285686 19.8226 0.285686 17.5713C0.285686 13.0248 2.0918 8.6644 5.30671 5.44949C8.52162 2.23458 12.882 0.428467 17.4286 0.428467C19.6798 0.428467 21.909 0.87188 23.9889 1.73339C26.0688 2.5949 27.9586 3.85763 29.5504 5.44949C31.1423 7.04135 32.405 8.93117 33.2665 11.011C34.128 13.0909 34.5714 15.3201 34.5714 17.5713ZM7.14286 19.2856H20.8571L14.8571 25.2856L17.2914 27.7199L27.44 17.5713L17.2914 7.42275L14.8571 9.85704L20.8571 15.857H7.14286V19.2856Z"
              fill="#000000"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
