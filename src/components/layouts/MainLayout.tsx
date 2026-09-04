import { DiceRollerProvider } from "../../contexts/DiceRollerContext";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { MessagerProvider } from "../../contexts/MessagerContext";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="">
      <Header />
      <Menu />
      <MessagerProvider>
        <DiceRollerProvider>
          <Outlet />
        </DiceRollerProvider>
      </MessagerProvider>
    </div>
  );
};

