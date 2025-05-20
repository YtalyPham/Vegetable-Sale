import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterCustom from "./router";
import "./style/style.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SESSION_KEY } from "utils/constant";
import { ReactSession } from "react-client-session";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

ReactSession.setStoreType("sessionStorage");
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RouterCustom />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
