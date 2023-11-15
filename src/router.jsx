import { createBrowserRouter } from "react-router-dom";
import Index from './pages/index';
import Foo from './pages/foo';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
    },
    {
        path: "about",
        element: <Foo />,
    },
]);