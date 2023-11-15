import React from "react";
import { createRoot } from "react-dom/client";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
