import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import useTasks from "../../hooks/useTasks";
import Loading from "../atoms/Loading";
import TaskCard from "../molecules/TaskCard";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { task, loading, error, getTask, deleteTask } = useTasks();

  useEffect(() => {
    if (id) {
      getTask(+id);
    }
  }, [id]);

  const handleDeleteTask = async () => {
    if (id) {
      await deleteTask(+id);

      if (error) {
        toast.error(error);
      } else {
        toast.success("Tarea eliminada correctamente");

        setTimeout(() => {
          navigate("/tasks");
        }, 2000);
      }
    }
  };

  if (loading)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loading />
      </div>
    );

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {task && (
        <>
          <TaskCard task={task} handleClick={() => {}} />

          <div className="flex justify-between gap-2 mt-4">
            {/* TODO: Move to component btn */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600 transition-colors cursor-pointer">
              <span>
                <MdOutlineEdit />
              </span>
              Editar
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-600 transition-colors cursor-pointer"
              onClick={handleDeleteTask}
            >
              <span>
                <MdOutlineDelete />
              </span>
              Eliminar
            </button>
          </div>
        </>
      )}

      <ToastContainer />
    </main>
  );
};

export default TaskDetail;
