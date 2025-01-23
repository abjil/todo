import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.scss';
import './assets/scss/normalize.scss'
import './assets/scss/style.scss'
import { ToDoListPage } from './Pages/ToDoListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { ToDo } from './models/todo-item';
import { NotFound } from './Pages/404';
import { ItemDescription } from './Pages/ItemDescription';
import { Layout } from './layouts/layout';


const todos: ToDo[] = [
  {
    id: 0,
    text: '1st',
    isDone: false
  },
  {
    id: 1,
    text: '2nd',
    isDone: true
  },
  {
    id: 2,
    text: '3rd',
    isDone: false
  },
  {
    id: 3,
    text: '4th',
    isDone: true
  }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage todos={todos} />,
      },
      {
        path: '/todo',
        element: <ToDoListPage />,
      },
      {
        path: '/list/:id',
        element: <ItemDescription todos={todos} />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  },
], { basename: '/app/' })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
