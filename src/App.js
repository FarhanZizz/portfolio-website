import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs";
import Home from "./Pages/Home";
import Main from "./Layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/blogs", element: <Blogs /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
