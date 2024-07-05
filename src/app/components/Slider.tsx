"use client";
import { ProductType, ProductsData } from "@/services/types";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider() {
  const [macs, setMacs] = useState<ProductType[]>([]);
  const [iphones, setIphones] = useState<ProductType[]>([]);
  const [ipads, setIpads] = useState<ProductType[]>([]);
  const [watches, setWatches] = useState<ProductType[]>([]);

  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api");
      const data: ProductsData = await response.json(); //converte a res para ProductsData
      setMacs(data.macs);
      setIphones(data.iphones);
      setIpads(data.ipads);
      setWatches(data.watches);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-4">Carregando...</div>;
  }

  return (
    <div className="lg:mx-20 md:mx-4 px-8 py-10">
      <h1 className="mb-2 font-bold">Mac</h1>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          // responsive
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1700: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
        }}
      >
        {macs.map((mac) => (
          <SwiperSlide key={mac.id}>
            <ProductCard product={mac} />
          </SwiperSlide>
        ))}
      </Swiper>

      <h1 className="mb-2 font-bold">iPhone</h1>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          // responsive
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1700: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
        }}
      >
        {iphones.map((iphone) => (
          <SwiperSlide key={iphone.id}>
            <ProductCard product={iphone} />
          </SwiperSlide>
        ))}
      </Swiper>

      <h1 className="mb-2 font-bold">iPad</h1>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          // responsive
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1700: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
        }}
      >
        {ipads.map((ipad) => (
          <SwiperSlide key={ipad.id}>
            <ProductCard product={ipad} />
          </SwiperSlide>
        ))}
      </Swiper>

      <h1 className="mb-2 font-bold">Apple Watch e Acessórios</h1>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          // responsive
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1700: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
        }}
      >
        {watches.map((watch) => (
          <SwiperSlide key={watch.id}>
            <ProductCard product={watch} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
