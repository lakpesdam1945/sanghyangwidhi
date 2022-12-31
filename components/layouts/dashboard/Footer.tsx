import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex w-full sticky z-20 bottom-0">
      <footer className="flex text-xs font-semibold bg-white text-sky-600 w-full p-3 items-center justify-center">
        Sang Hyang Widhi
      </footer>
    </div>
  );
};

export default Footer;
