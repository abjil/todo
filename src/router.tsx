import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { Layout } from "./layouts/layout";
import { NotFound } from "./Pages/404";
import { ViewListPage } from "./Pages/ViewListPage";
import { ViewListItem } from "./Pages/ViewListItem";
import { ToDoListPage } from "./Pages/ToDoListPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            { path: '/', element: <ToDoListPage /> },
            { path: '/list', element: <ViewListPage /> },
            { path: '/list/:id', element: <ViewListItem /> }
        ]
    },
    { path: '*', element: <NotFound /> }
], { basename: '/todo' })