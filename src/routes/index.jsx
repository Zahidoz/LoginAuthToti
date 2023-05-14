import { createBrowserRouter } from "react-router-dom";
import Accaunt from "../Layouts/mainChildren/Accaunt";
import Payment from "../Layouts/mainChildren/Payment";
import Point from "../Layouts/mainChildren/Point";
import Schedule from "../Layouts/mainChildren/Schedule";
import MainLayout from "../Layouts/MainLayout";
import MainPage from "../Pages/MainPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: "userPage",
        element: ( <MainLayout/>),
        children: [
            {
                index: true,  
                element: <Accaunt/>
            },
            {
                path: "point",  
                element: <Point/>
            },
            {
                path: "schedule",  
                element: <Schedule/>
            },
            {
                path: "payment",  
                element: <Payment/>
            },
        ]
    }

])