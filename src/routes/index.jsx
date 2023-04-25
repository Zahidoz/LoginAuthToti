import { createBrowserRouter } from "react-router-dom";
import AccauntPage from "../Pages/AccauntPage";
import MainPage from "../Pages/MainPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/accaunt',
        element: <AccauntPage/>
    }
])