import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Overlay from "./Components/Overlay";
import { App as Canvas } from "./Components/Canvas";
import { Loader } from "@react-three/drei";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <Suspense fallback={<Loader />}>
        <Canvas />
      </Suspense>
      <Overlay />
    </>
  </React.StrictMode>
);
