import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { DiceRollerProvider } from "../../contexts/DiceRollerContext";
import { MessagerProvider } from "../../contexts/MessagerContext";

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

