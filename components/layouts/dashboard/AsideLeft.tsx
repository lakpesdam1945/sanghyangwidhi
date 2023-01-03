import React, { Dispatch, SetStateAction } from "react";
import { IoList, IoLogOutOutline, IoMenu, IoSettings } from "react-icons/Io5";
type Props = {
  openSideLeft: Dispatch<SetStateAction<boolean>>;
  trigerCloseSidebar?: () => void;
};

const menu = [
  {
    _id: 1,
    path: "/dashboard",
    label: "Products",
    icons: IoList,
    active: true,
  },
  {
    _id: 2,
    path: "/dashboard",
    label: "Categories",
    icons: IoList,
    active: false,
  },
  {
    _id: 3,
    path: "/dashboard",
    label: "Blogs",
    icons: IoList,
    active: false,
  },
  {
    _id: 4,
    path: "/dashboard",
    label: "Orders",
    icons: IoList,
    active: false,
  },
  {
    _id: 5,
    path: "/dashboard",
    label: "Users",
    icons: IoList,
    active: false,
  },
  {
    _id: 6,
    path: "/dashboard",
    label: "Role and Permissions",
    icons: IoList,
    active: false,
  },
];

const AsideLeft = (props: Props) => {
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="p-5 flex w-full items-center justify-between">
          <span className="text-sm font-semibold text-slate-900 w-full">
            Sang Hyang Widhi
          </span>
          <div>
            <IoMenu
              className="h-5 w-5 text-slate-900 hover:cursor-pointer block tablet:hidden"
              onClick={() => props.openSideLeft(false)}
            />
          </div>
        </div>
        <div className="flex flex-col p-3 gap-4 grow overflow-y-auto">
          <div className="gap-4 flex flex-col">
            {menu.map((data) => {
              const Icon = data.icons;
              return (
                <span key={data._id} className="inline-flex gap-2 items-center">
                  <Icon className="w-5 h-5 text-slate-900" />
                  <span className="text-sm font-medium text-slate-900 w-full">
                    {data.label}
                  </span>
                </span>
              );
            })}
          </div>
          <hr />
        </div>
        <div className="flex flex-col p-3 gap-4 mb-4">
          <span className="inline-flex gap-2 items-center">
            <IoSettings className="w-5 h-5 text-slate-900" />
            <span className="text-sm font-medium text-slate-900 w-full">
              Settings
            </span>
          </span>
          <span className="inline-flex gap-2 items-center">
            <IoLogOutOutline className="w-5 h-5 text-slate-900" />
            <span className="text-sm font-medium text-slate-900 w-full">
              Logout
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default AsideLeft;
