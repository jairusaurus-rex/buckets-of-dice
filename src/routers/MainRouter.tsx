import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../components/layouts/MainLayout";
import { HomePage } from "../pages/home/HomePage";
import { WikiMainLayout } from "../pages/wiki/WikiMainLayout";
import { DiceRollerMainLayout } from "../pages/dice-roller/DiceRollerMainLayout";

const MainRouter = createBrowserRouter([
    {
        element: <MainLayout  />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/wiki",
                element: <WikiMainLayout />
            },
            {
                path: "/wiki/:articleId",
                element: <WikiMainLayout />
            },
            {
                path: "/dice-app",
                element: <DiceRollerMainLayout />
            },
        ]
    }
]);

export default MainRouter;