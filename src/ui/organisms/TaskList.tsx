import { useNavigate } from "react-router";
import TaskCard from "../molecules/TaskCard";
import type { Task } from "../../interfaces/Task.interface";

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
  const navigate = useNavigate();

  const handleNavigate = (taskId: number) => {
    navigate(`/tasks/${taskId}`);
  };

  return (
    <>
      {tasks.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              handleClick={() => handleNavigate(task.id)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default TaskList;
