import { useState } from "react";
import type { GetTasksResponse, Task } from "../interfaces/Task.interface";
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

  return {
    tasks,
    loading,
    error,
    getTasks,
    pages,
  };
};

export default useTasks;
