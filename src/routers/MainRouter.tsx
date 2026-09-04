import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../components/layouts/MainLayout";
import { HomePage } from "../components/pages/home/HomePage";
import { WikiMainLayout } from "../components/pages/wiki/WikiMainLayout";
import { DiceRollerMainLayout } from "../components/pages/dice-roller/DiceRollerMainLayout";
import { PageNotFound } from "../components/commons/PageNotFound";

const MainRouter = createBrowserRouter([
    {
        element: <MainLayout />,
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
    },
    {
        path: "*",
        element: <PageNotFound />
    },
]);

export default MainRouter;