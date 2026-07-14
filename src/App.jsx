import { RouterProvider } from "react-router";
import { router } from "./router/router";
import "./common/styles/global.css";

export function App() {

  return (
    <RouterProvider router={router}/>
  )
}