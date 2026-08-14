import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../components/layouts/MainLayout";
import { HomePage } from "../pages/home/HomePage";
import { WikiMainLayout } from "../pages/wiki/WikiMainLayout";
import { DiceRoller } from "../pages/dice-roller/DiceRoller";

const MainRouter = createBrowserRouter([
    {
        element: <MainLayout children={undefined} />,
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
                element: <DiceRoller />
            },
        ]
    }
]);

export default MainRouter;