import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Menu } from "./Menu";

export const MainLayout = () => {
  return (
    <div className="">
        <Header />
        <Menu/>
      <Outlet />
    </div>
  );
};

