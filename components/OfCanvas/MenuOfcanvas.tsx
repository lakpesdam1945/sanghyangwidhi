import useGlobalStore from "hooks/useGlobalStore";
import Link from "next/link";
import React from "react";
import { IoDiamondSharp, IoHome, IoLogIn, IoMenu } from "react-icons/Io5";

type Props = {};

const MenuOfcanvas = (props: Props) => {
  const { isOpen, setIsOpen } = useGlobalStore();
  return (
    <>
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transform transition-all translate-x-0 duration-300 ease-in-out fixed flex flex-col z-50 top-0 left-0 w-[320px] bg-slate-50 overflow-y-auto h-screen`}
      >
        <div className="flex w-full items-center justify-between border-b-[1px] border-sky-900 p-4">
          <Link href={"/"} className="text-sm font-semibold text-sky-900">
            Sang Hyang Widhi
          </Link>
          <IoMenu className="text-sky-900 w-5 h-5" onClick={setIsOpen} />
        </div>
        <div className="p-4 flex-col flex-1 w-full h-screen overflow-y-auto">
          <div className="pb-4 gap-2 flex flex-col justify-between">
            <div className="flex gap-4 items-center px-4 py-3 rounded-md bg-sky-900 group/menu hover:bg-sky-700">
              <IoHome className="h-5 w-5 text-sky-50 group-hover/menu:text-sky-50" />
              <Link
                href={"/"}
                className="text-sm text-sky-50 font-semibold group-hover/menu:text-sky-50"
              >
                Dashboard
              </Link>
            </div>
            <div className="flex flex-col flex-1 gap-2">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <Link
                    key={i}
                    href={"/"}
                    className="inline-flex gap-2 px-4 py-3 rounded-md group/menu hover:bg-sky-700"
                  >
                    <IoDiamondSharp className="w-5 h-5 text-sky-900 group-hover/menu:text-sky-50" />
                    <span className="text-sm font-medium text-sky-900 group-hover/menu:text-sky-50">
                      Dashboard
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 p-4">
          <Link
            href={"/login"}
            className="inline-flex gap-2 px-4 py-3 rounded-md bg-sky-500 group/menu hover:bg-sky-700"
          >
            <IoLogIn className="w-5 h-5 text-sky-50" />
            <span className="text-sm font-medium text-sky-50">Login</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MenuOfcanvas;
