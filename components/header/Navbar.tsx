import Link from "next/link";
import React from "react";
import { IoBag, IoPerson, IoSearch } from "react-icons/Io5";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="px-4 dekstop:px-28 4K:px-96 w-full bg-sky-900 fixed z-50 top-0 py-4">
      <div className="flex justify-between items-center">
        <Link href={"/"} className="font-bold text-sky-50">
          Sang Hyang Widhi
        </Link>
        <div className="hidden tablet:flex gap-4">
          <Link href={"/"} className="text-xs text-sky-50">
            About
          </Link>
          <Link href={"/"} className="text-xs text-sky-50">
            Blogs
          </Link>
          <Link href={"/"} className="text-xs text-sky-50">
            Products
          </Link>
          <Link href={"/"} className="text-xs text-sky-50">
            Categories
          </Link>
        </div>
        <div className="flex items-center justify-between gap-4 tablet:hidden">
          <Link href={"/"}>
            <IoBag className="text-sky-50 w-5 h-5" />
          </Link>
          <Link href={"/"}>
            <IoSearch className="text-sky-50 w-5 h-5" />
          </Link>
          <Link href={"/"}>
            <IoPerson className="text-sky-50 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
