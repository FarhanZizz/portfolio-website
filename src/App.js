import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs";
import Home from "./Pages/Home";
import Main from "./Layouts/Main";
import Project1 from "./Pages/Project1";
import Project2 from "./Pages/Project2";
import Project3 from "./Pages/Project3";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/projects/1", element: <Project1 /> },
        { path: "/projects/2", element: <Project2 /> },
        { path: "/projects/3", element: <Project3 /> },
        { path: "/blogs", element: <Blogs /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
