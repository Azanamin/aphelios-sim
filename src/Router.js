import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import GunInfo from "./View/GunInfo";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/:gunName',
                element: <GunInfo />,
            }
        ]
    }
])

export default Router;