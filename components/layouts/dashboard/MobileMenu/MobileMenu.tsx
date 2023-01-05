import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  IoBookmark,
  IoHome,
  IoImage,
  IoPerson,
  IoSearch,
} from "react-icons/Io5";

type Props = {};

const mobileMenu = [
  {
    _id: 1,
    label: "home",
    path: "/dashboard",
    icon: IoHome,
  },
  {
    _id: 2,
    label: "home",
    path: "/dashboard/search",
    icon: IoSearch,
  },
  {
    _id: 3,
    label: "home",
    path: "/dashboard/galery",
    icon: IoImage,
  },
  {
    _id: 4,
    label: "home",
    path: "/dashboard/bookmark",
    icon: IoBookmark,
  },
  {
    _id: 5,
    label: "home",
    path: "/dashboard/user",
    icon: IoPerson,
  },
];

const MobileMenu = (props: Props) => {
  const router = useRouter();
  return (
    <div className="flex w-full items-center justify-between bg">
      {mobileMenu.map((menu, i) => {
        const Icon = menu.icon;
        return (
          <Link key={i} href={menu.path}>
            <Icon
              className={`${
                router.pathname == menu.path
                  ? "text-sky-900 dark:text-sky-50"
                  : "text-slate-500 dark:text-sky-500"
              } w-5 h-5`}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default MobileMenu;
