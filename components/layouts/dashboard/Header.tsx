import React, { Dispatch, SetStateAction, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import {
  IoChatboxEllipses,
  IoMenu,
  IoMoon,
  IoNotifications,
  IoSunny,
} from "react-icons/Io5";

type Props = {
  openSideLeft: Dispatch<SetStateAction<boolean>>;
  openSideRight: Dispatch<SetStateAction<boolean>>;
  trigerCloseSidebarLeft: () => void;
  trigerCloseSidebarRight: () => void;
  isOpen: boolean;
};

const Header = (props: Props) => {
  /**
   * TODO: FIX CODE AMBURADUL
   */
  const [darkMode, setDarkMode] = useState(true);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };
  const refLeft = useDetectClickOutside({
    onTriggered: props.trigerCloseSidebarLeft,
  });
  const refRight = useDetectClickOutside({
    onTriggered: props.trigerCloseSidebarRight,
  });
  return (
    <>
      <nav className="sticky">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div ref={refLeft} className="flex tablet:hidden">
              <IoMenu
                className="h-5 w-5 text-sky-900 dark:text-sky-50 hover:cursor-pointer "
                onClick={() => props.openSideLeft(true)}
              />
            </div>

            <span className="text-sm font-medium text-sky-900 dark:text-sky-50">
              Dashboard
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <IoChatboxEllipses className="w-5 h-5 text-sky-900 dark:text-sky-50" />
            <IoNotifications className="w-5 h-5 text-sky-900 dark:text-sky-50" />
            <div>
              {!darkMode ? (
                <IoSunny
                  className="w-5 h-5 text-amber-500 hover:cursor-pointer"
                  onClick={() => handleDarkMode()}
                />
              ) : (
                <IoMoon
                  className="w-5 h-5 text-amber-500 hover:cursor-pointer"
                  onClick={() => handleDarkMode()}
                />
              )}
            </div>

            <div className="flex laptop:hidden" ref={refRight}>
              <IoMenu
                className="h-5 w-5 text-sky-900 dark:text-sky-50 hover:cursor-pointer"
                onClick={() => props.openSideRight(true)}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
