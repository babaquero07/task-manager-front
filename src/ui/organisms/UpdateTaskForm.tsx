import { useForm } from "react-hook-form";
import type { Task } from "../../interfaces/Task.interface";
import { ToastContainer, toast } from "react-toastify";
import useTasks from "../../hooks/useTasks";
import { useNavigate } from "react-router";

interface UpdateTaskFormProps {
  task: Task;
}

const formOptions: { label: string; value: string }[] = [
  { label: "Pendiente", value: "pendiente" },
  { label: "En progreso", value: "en_progreso" },
  { label: "Completada", value: "completada" },
];

const UpdateTaskForm = ({ task }: UpdateTaskFormProps) => {
  const { register, handleSubmit, reset } = useForm<Task>({
    defaultValues: {
      title: task.title,
      description: task.description,
      status: task.status,
    },
  });

  const navigate = useNavigate();
  const { updateTask, error } = useTasks();

  const onSubmit = async (data: Task) => {
    await updateTask(task.id, data);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Tarea actualizada correctamente");

      reset();

      setTimeout(() => {
        navigate("/tasks");
      }, 2000);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-4"
      >
        <input
          type="text"
          {...register("title", { required: true })}
          placeholder="Título"
          className="border border-gray-300 rounded-md p-2"
        />
        <textarea
          rows={4}
          cols={30}
          {...register("description", { required: true })}
          placeholder="Descripción"
          className="border border-gray-300 rounded-md p-2"
        />
        <select
          {...register("status", { required: true })}
          className="w-full p-2 rounded-md border border-gray-300"
        >
          <option value="">Selecciona un estado</option>
          {formOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition-colors"
        >
          Actualizar tarea
        </button>
      </form>

      <ToastContainer />
    </>
  );
};

export default UpdateTaskForm;
