import React from "react";

type Props = {
  isOpen: boolean;
};

const Drawer = (props: Props) => {
  return (
    <div
      className={`${
        props.isOpen
          ? "transition-opacity opacity-100 duration-500 translate-x-0"
          : "transition-all delay-500 opacity-0 translate-x-full"
      } delay-400 duration-500 ease-in-out transition-all transform flex w-full h-screen bg-black/50 top-0 z-50 fixed`}
    >
      <div className="flex w-60 h-screen bg-white">drawer</div>
    </div>
  );
};

export default Drawer;
