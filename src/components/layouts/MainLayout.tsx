import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Menu } from "./Menu";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
        <Header />
        <Menu/>
      <Outlet />
    </div>
  );
};

