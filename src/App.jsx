import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import Home from "./pages/home/Home";
import './index.css'
import About from "./pages/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);


export default function App() {
  return (
    <>
        <Toaster
          position="bottom-left"
          reverseOrder={false}
        />
        <RouterProvider router={router} />
    </>
  )
}