import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";
import Image from "next/image";
type Props = {};

const Carousel = (props: Props) => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="h-full"
      >
        {Array(10)
          .fill("")
          .map((_, i) => (
            <SwiperSlide
              key={i}
              className="flex h-full w-full items-center justify-center rouded-md bg-sky-500 rounded-md overflow-hidden relative"
            >
              <div
                className="relative flex w-full overflow-hidden"
                style={{ width: "900px", height: "500px" }}
              >
                <Image
                  src={
                    "https://images.unsplash.com/photo-1476158085676-e67f57ed9ed7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kb25lc2lhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  }
                  alt=" Bank NU, NUMart, hingga Bus NUGo Wujud Nyata NU Magelang Bangun Kemandirian Ekonomi"
                  fill
                  priority
                  sizes="  (max-width: 320px) 100vw,(max-width: 768px) 50vw,(max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex gap-2 flex-col absolute h-auto justify-center bg-black/50 p-4 bottom-0 w-full">
                <span className="px-2 py-1 rounded-md bg-emerald-500 text-sky-50 text-xs font-light w-20 text-center">
                  Ekonomi
                </span>
                <h3 className="text-sm font-semibold text-sky-50 leading-relaxed">
                  Bank NU, NUMart, hingga Bus NUGo Wujud Nyata NU Magelang
                  Bangun Kemandirian Ekonomi
                </h3>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Carousel;
