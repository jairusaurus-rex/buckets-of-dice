import { Outlet } from "react-router-dom";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

