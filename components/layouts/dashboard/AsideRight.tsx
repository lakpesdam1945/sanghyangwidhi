import React, { Dispatch, SetStateAction } from "react";
import { IoMenu } from "react-icons/Io5";

type Props = {
  openSideRight: Dispatch<SetStateAction<boolean>>;
};

const AsideRight = (props: Props) => {
  return (
    <div className="flex w-full flex-col overflow-y-auto">
      <div className="p-5 flex w-full items-center justify-between sticky top-0 z-50 bg-white dark:bg-slate-900 transform ease-in-out transition-all duration-300">
        <span className="text-sm font-semibold text-slate-900 dark:text-sky-50  w-full">
          Sang Hyang Widhi
        </span>
        <IoMenu
          className="h-5 w-5 text-slate-900 dark:text-sky-50 hover:cursor-pointer block laptop:hidden"
          onClick={() => props.openSideRight(false)}
        />
      </div>
      <div className="w-full flex flex-col h-auto p-3">
        <div className="flex flex-col w-full justify-between items-start">
          <span className="text-sm font-semibold text-slate-900 dark:text-sky-50  mb-4">
            Recent Product
          </span>
          {Array(5)
            .fill("")
            .map((_, i) => (
              <div
                key={i}
                className="flex w-full h-16 items-center overflow-hidden rounded-md relative gap-2 bg-white dark:bg-slate-800 mb-4"
              >
                <img
                  src="https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGphcGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="products"
                  className="h-full w-16 p-1 object-cover rounded-md"
                />
                <div className="flex w-full flex-col gap-1">
                  <span className="text-xs font-medium text-slate-900 dark:text-sky-50 ">
                    The Ultimate Twice Album
                  </span>
                  <span className="text-xs font-light text-slate-900 dark:text-sky-50 ">
                    Music
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex w-full py-2"></div>
      <div className="w-full flex flex-col h-auto p-3">
        <div className="flex flex-col w-full justify-between items-start">
          <span className="text-sm font-semibold text-slate-900 dark:text-sky-50  mb-4">
            Recent Product
          </span>
          {Array(5)
            .fill("")
            .map((_, i) => (
              <div
                key={i}
                className="flex w-full h-16 items-center overflow-hidden rounded-md relative gap-2 bg-white dark:bg-slate-800 mb-4"
              >
                <img
                  src="https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGphcGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="products"
                  className="h-full w-16 p-1 object-cover rounded-md"
                />
                <div className="flex w-full flex-col gap-1">
                  <span className="text-xs font-medium text-slate-900 dark:text-sky-50 ">
                    The Ultimate Twice Album
                  </span>
                  <span className="text-xs font-light text-slate-900 dark:text-sky-50 ">
                    Music
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex w-full py-2"></div>
      <div className="w-full flex flex-col h-auto p-3">
        <div className="flex flex-col w-full justify-between items-start">
          <span className="text-sm font-semibold text-slate-900 dark:text-sky-50  mb-4">
            Recent Product
          </span>
          {Array(5)
            .fill("")
            .map((_, i) => (
              <div
                key={i}
                className="flex w-full h-16 items-center overflow-hidden rounded-md relative gap-2 bg-white dark:bg-slate-800 mb-4"
              >
                <img
                  src="https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGphcGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="products"
                  className="h-full w-16 p-1 object-cover rounded-md"
                />
                <div className="flex w-full flex-col gap-1">
                  <span className="text-xs font-medium text-slate-900 dark:text-sky-50 ">
                    The Ultimate Twice Album
                  </span>
                  <span className="text-xs font-light text-slate-900 dark:text-sky-50 ">
                    Music
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AsideRight;
