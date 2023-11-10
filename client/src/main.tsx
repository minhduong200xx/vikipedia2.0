import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n/i18n.ts";
import Loading from "./pages/Loading.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Loading />}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
