import type { LayoutProps } from "../../types/pageWithLayout";

const MainLayout: LayoutProps = ({ children }) => {
  return <div className="flex h-auto w-full overflow-auto">{children}</div>;
};

export default MainLayout;
