import Link from "next/link";
import React from "react";
import {
  IoBag,
  IoBookmark,
  IoHome,
  IoSearch,
  IoSettings,
} from "react-icons/Io5";

type Props = {};

const MobileMenu = (props: Props) => {
  return (
    <div className="flex items-center justify-between gap-4 w-full px-4 py-4 bg-slate-100 fixed z-50 bottom-0">
      <Link href={"/"}>
        <IoHome className="w-5 h-5 text-sky-900" />
      </Link>
      <Link href={"/"}>
        <IoSearch className="w-5 h-5 text-slate-500" />
      </Link>
      <Link href={"/"}>
        <IoBookmark className="w-5 h-5 text-slate-500" />
      </Link>
      <Link href={"/"}>
        <IoBag className="w-5 h-5 text-slate-500" />
      </Link>
      <Link href={"/"}>
        <IoSettings className="w-5 h-5 text-slate-500" />
      </Link>
    </div>
  );
};

export default MobileMenu;
