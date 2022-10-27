import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import GunInfo from "./View/GunInfo";
import Loader from "./View/Loader";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Loader />,
        errorElement: <Loader />
    }
    ,
    {
        path: '/aphelios-sim',
        element: <App />,
        children: [
            {
                path: '/aphelios-sim/:gunName',
                element: <GunInfo />,
            }
        ],
        errorElement: <Loader />
    }
])

export default Router;