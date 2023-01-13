import { getCookie } from "cookies-next";
import useGlobalStore from "hooks/useGlobalStore";
import http from "lib/axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { IoBag, IoMenu, IoPerson } from "react-icons/Io5";
import { GetUser, UserTypes } from "types/UserTypes";

type Props = {
  user?: UserTypes | undefined;
};

const Navbar = (props: Props) => {
  const name = props.user;
  // getCookie
  const { setIsOpen, setClose } = useGlobalStore();
  const trigerCloseOfCanvasRef = useDetectClickOutside({
    onTriggered: setClose,
  });
  return (
    <div className="px-4 laptop:px-20 4K:px-96 w-full bg-sky-500 fixed z-50 top-0 py-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div ref={trigerCloseOfCanvasRef}>
            <IoMenu className="w-5 h-5 text-sky-50" onClick={setIsOpen} />
          </div>
          <Link href={"/"} className="font-bold text-sky-50">
            Sang Hyang Widhi
          </Link>
        </div>
        <div className="hidden items-center tablet:flex gap-4">
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
          <div className="relative overflow-hidden flex gap-4">
            {props.user ? (
              <Link href={"/"} className="text-xs text-sky-50">
                {name?.name}
              </Link>
            ) : (
              <Link href={"/login"} className="text-xs text-sky-50">
                Login
              </Link>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 tablet:hidden">
          <Link href={"/"}>
            <IoBag className="text-sky-50 w-5 h-5" />
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
