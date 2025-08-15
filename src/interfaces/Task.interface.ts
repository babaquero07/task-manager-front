export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: number;
  dueDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetTasksResponse {
  ok: boolean;
  message: string;
  count: number;
  pages: number;
  tasks: Task[];
}

export interface GetTaskResponse {
  ok: boolean;
  message: string;
  task: Task;
}

export interface DeleteTaskResponse {
  ok: boolean;
  message: string;
}

export interface CreateTask {
  title: string;
  description: string;
  status: string;
}

export interface CreateTaskResponse {
  ok: boolean;
  message: string;
  task: Task;
}

export interface UpdateTask {
  title?: string;
  description?: string;
  status?: string;
}

export interface UpdateTaskResponse {
  ok: boolean;
  message: string;
  task: Task;
}
