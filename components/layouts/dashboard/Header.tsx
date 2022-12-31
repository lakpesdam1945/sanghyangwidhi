import React, { useState } from "react";
import {
  IoChatboxEllipses,
  IoMenu,
  IoNotifications,
  IoSunny,
} from "react-icons/Io5";
import Drawer from "./Drawer";

type Props = {};

const Header = (props: Props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <div className="flex w-full sticky z-50 top-0">
        <nav className="flex w-full items-center justify-between bg-white py-5 px-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="mr-4">
                <IoMenu
                  className="w-5 h-5 text-sky-900"
                  onClick={() => setOpenDrawer(!openDrawer)}
                />
              </div>
              <ul className="flex items-center gap-4">
                <li className="text-xs text-sky-900 font-medium">Message</li>
                <li className="text-xs text-sky-900 font-medium">Schedules</li>
              </ul>
            </div>
            <div className="flex">
              <ul className="flex items-center gap-4">
                <li>
                  <IoChatboxEllipses className="w-5 h-5 text-sky-900" />
                </li>
                <li>
                  <IoNotifications className="w-5 h-5 text-sky-900" />
                </li>
                <li>
                  <IoSunny className="w-5 h-5 text-yellow-500" />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Drawer isOpen={openDrawer} />
    </>
  );
};

export default Header;
