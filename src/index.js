import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import rockets from './pages/rockets';
import mission from './pages/mission';
import myProfile from './pages/myProfile';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <rockets />,
  },
  {
    path : "mission",
    element : <App/>
  },
  {
    path: "myProfile",
    element: <myProfile />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

