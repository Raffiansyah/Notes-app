import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Home from "../Pages/Home";
import Register from "../Pages/RegisterPage";
import Login from "../Pages/LoginPage";
import PrivateRoutes from "../PrivateRotes/PrivateRoutes";
import Archive from "../Pages/Archive";
import DetailNote from "../Pages/DetailNote";

const Layout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <PrivateRoutes><Home /></PrivateRoutes>,
      },
      {
        path: "/archive",
        element: <PrivateRoutes><Archive /></PrivateRoutes>,
      },
      {
        path: "/active",
        element: <PrivateRoutes><p>active</p></PrivateRoutes>,
      },
      {
        path: "/notes/:id",
        element: <PrivateRoutes><DetailNote /></PrivateRoutes>,
      },
      {
        path: "/notes/new",
        element: <PrivateRoutes><p>new</p></PrivateRoutes>,
      },
    ],
  },
]);
