import { DiceRollerProvider } from "../../contexts/DiceRollerContext";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { MessagerProvider } from "../../contexts/MessagerContext";
import { SignalRProvider } from "../../contexts/SignalRContext";
import { UserProvider } from "../../contexts/UserContext";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="">
      <Header />
      <Menu />
      <UserProvider>
        <MessagerProvider>
          <SignalRProvider>
            <DiceRollerProvider>
              <Outlet />
            </DiceRollerProvider>
          </SignalRProvider>
        </MessagerProvider>
      </UserProvider>
    </div>
  );
};

