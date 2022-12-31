import React from "react";

type Props = {};

const OverviewCard = (props: Props) => {
  return (
    <div className="flex my-5 w-full h-auto overflow-hidden relative">
      <div className="grid grid-cols-2 tablet:grid-cols-3 gap-4 w-full">
        {Array(6)
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              className={`flex items-center justify-between p-2 h-20 grow bg-sky-700 rounded-md gap-2`}
            >
              <div className="w-24 h-full bg-pink-500 flex items-center justify-center rounded-md">
                <span className="text-xl font-semibold text-sky-50">50</span>
              </div>
              <div className="flex w-full flex-col items-start">
                <h3 className="text-sm font-semibold text-sky-50">Products</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OverviewCard;
