import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import TasksLayout from "./ui/layout/TasksLayout.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<TasksLayout />}>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
