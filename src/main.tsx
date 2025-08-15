import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import TasksLayout from "./ui/layout/TasksLayout.tsx";
import Tasks from "./ui/pages/Tasks.tsx";
import TaskDetail from "./ui/pages/TaskDetail.tsx";
import CreateTask from "./ui/pages/CreateTask.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<TasksLayout />}>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
          <Route path="/tasks/create" element={<CreateTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
