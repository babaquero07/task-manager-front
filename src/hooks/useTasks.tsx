import { useState } from "react";
import type {
  CreateTask,
  CreateTaskResponse,
  DeleteTaskResponse,
  GetTaskResponse,
  GetTasksResponse,
  Task,
} from "../interfaces/Task.interface";
import taskManagerApi from "../api/axios-config";

interface GetTasksOptions {
  limit?: number;
  offset?: number;
  status?: string | null;
}

const DEFAULT_LIMIT = 5;
const DEFAULT_OFFSET = 0;

const useTasks = () => {
  const [pages, setPages] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getTasks = async (options: GetTasksOptions): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const {
        limit = DEFAULT_LIMIT,
        offset = DEFAULT_OFFSET,
        status = null,
      } = options;

      const response = await taskManagerApi.get<GetTasksResponse>("/tasks", {
        params: {
          offset,
          limit,
          status,
        },
      });

      setTasks(response.data.tasks);
      setPages(response.data.pages);
      setLoading(false);
    } catch (error) {
      console.log(error);

      setError("Error al obtener las tareas");
    } finally {
      setLoading(false);
    }
  };

  const getTask = async (id: number): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const response = await taskManagerApi.get<GetTaskResponse>(
        `/tasks/${id}`
      );

      setTask(response.data.task);
    } catch (error) {
      console.log(error);
      setError("Error al obtener la tarea");
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id: number): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      await taskManagerApi.delete<DeleteTaskResponse>(`/tasks/${id}`);
    } catch (error) {
      console.log(error);
      setError("Error al eliminar la tarea");
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (task: CreateTask) => {
    try {
      setLoading(true);
      setError(null);

      const res = await taskManagerApi.post<CreateTaskResponse>("/tasks", task);

      return res;
    } catch (error) {
      console.log(error);
      setError("Error al crear la tarea");
    } finally {
      setLoading(false);
    }
  };

  return {
    tasks,
    loading,
    error,
    getTasks,
    getTask,
    deleteTask,
    createTask,
    task,
    pages,
  };
};

export default useTasks;
