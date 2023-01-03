import { Dispatch, SetStateAction, useEffect } from "react";

const useOutsideClick = (
  ref: React.MutableRefObject<null>,
  openSidebar: Dispatch<SetStateAction<boolean>>
) => {
  useEffect(() => {
    document.addEventListener(
      "click",
      (e) => {
        if (e.target !== ref.current) {
          e.stopPropagation;
          openSidebar(false);
          console.log(openSidebar);
          // console.log(ref.current);
          // console.log(e.target);
        }
      },
      false
    );
    return () => {
      document.addEventListener(
        "click",
        (e) => {
          if (e.target !== ref.current) {
            e.stopPropagation;
            openSidebar(false);
          }
        },
        false
      );
    };
  }, []);
};

export default useOutsideClick;
