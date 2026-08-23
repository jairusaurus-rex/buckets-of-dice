import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { DiceRollerProvider } from "../../contexts/DiceRollerContext";

export const MainLayout = () => {
  return (
    <div className="">
      <Header />
      <Menu />
      <DiceRollerProvider>
        <Outlet />
      </DiceRollerProvider>
    </div>
  );
};

