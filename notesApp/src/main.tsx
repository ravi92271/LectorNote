import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

RouterDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
