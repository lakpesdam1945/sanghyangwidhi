import React from "react";

type Props = {};

const AsideRight = (props: Props) => {
  return (
    <div className="hidden laptop:flex ">
      <aside className="flex flex-col w-60 bg-white h-screen sticky z-50 right-0 top-0 p-3 hover:overflow-y-scroll overflow-hidden">
        <div className="w-full flex flex-col h-auto">
          <div className="flex flex-col w-full justify-between items-start">
            <span className="text-sm font-semibold text-sky-900 mb-4">
              Recent Product
            </span>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <div
                  key={i}
                  className="flex w-full h-12 items-center overflow-hidden rounded-md relative gap-2 bg-white mb-2"
                >
                  <img
                    src="https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGphcGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="products"
                    className="h-full w-16 p-1 object-cover rounded-md"
                  />
                  <div className="flex w-full flex-col gap-1">
                    <span className="text-xs font-medium text-sky-900">
                      The Ultimate Twice Album
                    </span>
                    <span className="text-xs font-light text-sky-900">
                      Music
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex w-full py-2"></div>
        <div className="w-full flex flex-col h-auto">
          <div className="flex flex-col w-full justify-between items-start">
            <span className="text-sm font-semibold text-sky-900 mb-4">
              Recent Blogs
            </span>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <div
                  key={i}
                  className="flex w-full h-12 items-center overflow-hidden rounded-md relative gap-2 bg-white mb-2"
                >
                  <img
                    src="https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGphcGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="products"
                    className="h-full w-16 p-1 object-cover rounded-md"
                  />
                  <div className="flex w-full flex-col gap-1">
                    <span className="text-xs font-medium text-sky-900">
                      The Ultimate Twice Album
                    </span>
                    <span className="text-xs font-light text-sky-900">
                      Music
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex w-full py-2"></div>
        <div className="w-full flex flex-col h-auto">
          <div className="flex flex-col w-full justify-between items-start">
            <span className="text-sm font-semibold text-sky-900 mb-4">
              Recent Categories
            </span>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <div
                  key={i}
                  className="flex w-full h-12 items-center overflow-hidden rounded-md relative gap-2 bg-white mb-2"
                >
                  <img
                    src="https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGphcGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="products"
                    className="h-full w-16 p-1 object-cover rounded-md"
                  />
                  <div className="flex w-full flex-col gap-1">
                    <span className="text-xs font-medium text-sky-900">
                      The Ultimate Twice Album
                    </span>
                    <span className="text-xs font-light text-sky-900">
                      Music
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default AsideRight;
