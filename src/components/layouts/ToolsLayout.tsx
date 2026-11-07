import { Outlet } from "react-router-dom";
import { ToolsMenu } from "./ToolsMenu";

export const ToolsLayout = () => {
  return (
    <div className="">
      <ToolsMenu />
      <Outlet />
    </div>
  );
};

