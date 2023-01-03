import { useState } from "react";
import type { LayoutProps } from "../../types/pageWithLayout";
import AsideLeft from "./dashboard/AsideLeft";
import AsideRight from "./dashboard/AsideRight";
import Footer from "./dashboard/Footer";
import Header from "./dashboard/Header";
import MobileMenu from "./dashboard/MobileMenu/MobileMenu";

const Dashboard: LayoutProps = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const closeSidebarLeft = () => {
    setOpen(false);
  };
  const closeSidebarRight = () => {
    setOpenRight(false);
  };

  return (
    <>
      <div className="flex h-screen overflow-y-auto bg-slate-50">
        <aside
          className={`${
            open ? "translate-x-0" : "-translate-x-full"
          } fixed left-0 top-0 z-50 flex h-screen w-72 bg-white tablet:sticky tablet:translate-x-0 transform ease-in-out transition-all duration-300 border-r-[1px] border-slate-300`}
        >
          <>
            <AsideLeft openSideLeft={setOpen} />
          </>
        </aside>

        <main className="flex h-screen w-full flex-col overflow-y-auto">
          <header className="w-full sticky z-40 top-0 left-0 bg-white p-5 border-b-[1px] border-slate-300">
            <Header
              openSideRight={setOpenRight}
              openSideLeft={setOpen}
              isOpen={open}
              trigerCloseSidebarLeft={closeSidebarLeft}
              trigerCloseSidebarRight={closeSidebarRight}
            />
          </header>
          {/* main content */}
          <main className="flex-1 p-5">{children}</main>

          <footer className="tablet:flex hidden sticky bottom-0 z-40 bg-white p-3 border-t-[1px] border-slate-300">
            <Footer />
          </footer>

          <div className="flex tablet:hidden sticky bottom-0 z-40 bg-white px-5 py-4 border-t-[1px] border-slate-300">
            <MobileMenu />
          </div>
        </main>
        <aside
          className={`${
            openRight ? "-translate-x-0" : "translate-x-full"
          } flex-row-reverse fixed right-0 top-0 z-50 flex h-screen w-72 bg-white laptop:sticky laptop:translate-x-0 transform ease-in-out transition-all duration-300`}
        >
          <>
            <AsideRight openSideRight={setOpenRight} />
          </>
        </aside>
      </div>
    </>
  );
};

export default Dashboard;
