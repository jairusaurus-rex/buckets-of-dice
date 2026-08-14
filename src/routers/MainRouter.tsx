import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../components/layouts/MainLayout";
import { HomePage } from "../pages/home/HomePage";

const MainRouter = createBrowserRouter([
    {
        element: <MainLayout children={undefined} />,
        children: [
            {
                path: "/",
                element: <HomePage />
            }
        ]
    }
]);

export default MainRouter;