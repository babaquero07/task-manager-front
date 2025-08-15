import type { Task } from "../../interfaces/Task.interface";

interface TaskCardProps {
  task: Task;
  handleClick: (taskId: number) => void;
}

const getStatusClass = (status: string) => {
  switch (status) {
    case "pendiente":
      return "bg-yellow-100 text-yellow-800";
    case "en_progreso":
      return "bg-blue-100 text-blue-800";
    case "completada":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const TaskCard = ({ task, handleClick }: TaskCardProps) => {
  return (
    <div
      className={`p-4 rounded-lg hover:shadow-lg transition-shadow duration-200 min-h-[160px] cursor-pointer ${getStatusClass(
        task.status
      )}`}
      onClick={() => handleClick(task.id)}
    >
      <div className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="text-gl font-semibold text-gray-900 line-clamp-2 leading-tight">
            {task.title}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full shrink-0">
            #{task.id}
          </span>
        </div>
      </div>
      <div className="text-gray-700 text-sm leading-relaxed line-clamp-4">
        {task.description}
      </div>

      <div className="flex flex-col mt-4">
        <span className={`text-gray-500 text-sm font-semibold`}>
          Estado: {task.status}
        </span>

        <span className="text-gray-500 text-sm">
          Prioridad: {task.priority}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
