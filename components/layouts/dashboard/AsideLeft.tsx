import Link from "next/link";
import React from "react";
import { IoList, IoLogOutOutline, IoSettings } from "react-icons/Io5";
type Props = {};

const menu = [
  {
    _id: 1,
    path: "/dashboard",
    label: "Products",
    icons: <IoList className="h-5 w-5" />,
    active: true,
  },
  {
    _id: 2,
    path: "/dashboard",
    label: "Categories",
    icons: <IoList className="h-5 w-5" />,
    active: false,
  },
  {
    _id: 3,
    path: "/dashboard",
    label: "Blogs",
    icons: <IoList className="h-5 w-5" />,
    active: false,
  },
  {
    _id: 4,
    path: "/dashboard",
    label: "Orders",
    icons: <IoList className="h-5 w-5" />,
    active: false,
  },
  {
    _id: 5,
    path: "/dashboard",
    label: "Users",
    icons: <IoList className="h-5 w-5" />,
    active: false,
  },
  {
    _id: 6,
    path: "/dashboard",
    label: "Role and Permissions",
    icons: <IoList className="h-5 w-5" />,
    active: false,
  },
];

const AsideLeft = (props: Props) => {
  return (
    <div className="hidden tablet:flex">
      <aside className="left-0 top-0 flex flex-col tablet:w-60 bg-white h-screen tablet:sticky ">
        <div className="p-5 items-center w-full flex bg-white">
          <Link
            href={"/dashboard"}
            className="font-semibold text-sm text-sky-900 text-center w-full"
          >
            Sang Hyang Widhi
          </Link>
        </div>
        <div className="p-5 flex flex-col flex-grow items-start justify-between hover:overflow-y-scroll overflow-hidden">
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full">
              <h3 className="text-sm font-semibold text-sky-900">Dashboard</h3>
              <ul className="flex flex-col mt-4 w-full gap-2">
                {menu.map((menu, i) => (
                  <li
                    key={i}
                    className="w-full flex group/menu group-hover:bg-sky-900 group-hover:text-sky-100"
                  >
                    <Link
                      href={menu.path}
                      className={`${
                        menu.active ? "bg-sky-900" : ""
                      } px-2 py-2 w-full flex items-center gap-2 rounded-md hover:bg-sky-900 hover:text-sky-100`}
                    >
                      <span
                        className={`${
                          menu.active ? "text-sky-100" : "text-sky-900"
                        } group-hover/menu:text-sky-100`}
                      >
                        {menu.icons}
                      </span>
                      <div className="w-full flex items-center justify-between">
                        <span
                          className={`${
                            menu.active ? "text-sky-100" : "text-sky-900"
                          } text-xs font-medium group-hover/menu:text-sky-100`}
                        >
                          {menu.label}
                        </span>
                        {/* <span
                        className={`${
                          menu.active
                            ? "bg-sky-100 text-sky-900"
                            : "bg-sky-900 text-sky-100"
                        } text-xs font-medium p-1 rounded-md `}
                      >
                        {menu._id + 1}
                      </span> */}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex mt-10 flex-col w-full">
            <div className="flex flex-col w-full h-auto rounded-md bg-sky-900 items-center justify-center p-4 gap-3">
              <h3 className="text-sm font-semibold text-sky-100">
                Hy, Superuser
              </h3>
              <p className="text-xs font-normal text-sky-50 leading-relaxed text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                praesentium ea.
              </p>
              <Link
                href={"/dashboard"}
                className="bg-sky-50 text-sky-900 text-xs font-medium px-4 py-2 rounded-md"
              >
                Start Jurney !!!
              </Link>
            </div>
            <div className="mt-5 flex flex-col w-full gap-2">
              <div className="flex items-center gap-2 px-2 py-2 w-full">
                <IoSettings className="h-5 w-5 text-sky-900" />
                <span className="text-xs font-medium text-sky-900">
                  Settings
                </span>
              </div>
              <div className="flex items-center gap-2 px-2 py-2 w-full">
                <IoLogOutOutline className="h-5 w-5 text-sky-900" />
                <span className="text-xs font-medium text-sky-900">Logout</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default AsideLeft;
