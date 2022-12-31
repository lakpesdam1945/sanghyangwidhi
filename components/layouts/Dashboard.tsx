import type { LayoutProps } from "../../types/pageWithLayout";
import AsideLeft from "./dashboard/AsideLeft";
import AsideRight from "./dashboard/AsideRight";
import Drawer from "./dashboard/Drawer";
import Footer from "./dashboard/Footer";
import Header from "./dashboard/Header";

const Dashboard: LayoutProps = ({ children }) => {
  return (
    <>
      <div className="flex scroll-smooth antialiased w-full min-h-screen relative">
        <AsideLeft />
        <main className="flex flex-col flex-grow">
          <Header />
          <main className="flex bg-sky-50 p-4 flex-grow rounded-2xl">
            {children}
          </main>
          <Footer />
        </main>
        <AsideRight />
      </div>
    </>
  );
};

export default Dashboard;
