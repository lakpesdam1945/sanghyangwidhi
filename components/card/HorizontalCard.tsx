import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const HorizontalCard = (props: Props) => {
  return (
    <>
      <Link href={"/"} className="w-full relative">
        <div className="flex w-full h-full bg-white gap-2 p-2 hover:shadow-md rounded-md items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 px-2 py-1 bg-emerald-500 rounded-bl-md tablet:hidden">
            <h3 className="text-xs text-sky-50 font-light">Ekonomi</h3>
          </div>
          <div className="relative h-28 tablet:h-20 w-3/6 rounded-md">
            <Image
              alt="populer"
              src={
                "https://images.unsplash.com/photo-1598063413828-0d42356b9573?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kb25lc2lhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              }
              sizes="(max-width: 320px) 100vw,(max-width: 768px) 50vw,(max-width: 1200px) 50vw, 33vw"
              fill
              priority
              style={{ objectFit: "cover" }}
              className="rounded-md h-full"
            />
          </div>
          <div className="w-full gap-1 flex flex-col">
            <h3 className="text-sm font-medium line-clamp-3 text-slate-900">
              Digelar Besok, Simposium Tradisi Islam Nusantara Rekam
              Perkembangan Kebudayaan Islam di Indonesia
            </h3>
            <h5 className="text-xs font-light text-slate-500">- Edi Koswara</h5>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HorizontalCard;
