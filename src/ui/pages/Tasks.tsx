import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import StatusFilter from "../molecules/StatusFilter";
import useTasks from "../../hooks/useTasks";
import Loading from "../atoms/Loading";
import Pagination from "../molecules/Pagination";
import TaskList from "../organisms/TaskList";

const options: { label: string; value: string | null }[] = [
  {
    label: "Pendiente",
    value: "pendiente",
  },
  {
    label: "En progreso",
    value: "en_progreso",
  },
  {
    label: "Completada",
    value: "completada",
  },
  {
    label: "Todas",
    value: null,
  },
];

const Tasks = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filter, setFilter] = useState<string | null>(null);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const { tasks, loading, error, getTasks, pages } = useTasks();

  const currentPage = searchParams.get("page") || "1";

  const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = e.target.value;
    setSearchParams({ page });
  };

  useEffect(() => {
    if (!filter) {
      getTasks({ offset: (+currentPage - 1) * 5 });
    } else {
      getTasks({ offset: (+currentPage - 1) * 5, status: filter });
    }
  }, [filter, currentPage]);

  if (loading)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loading />
      </div>
    );

  return (
    <>
      <header className="bg-white mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Task Manager
          </h1>
          <p className="text-gray-600">
            Explora y filtra entre 100 tareas disponibles
          </p>
        </div>

        <div className="w-full flex justify-center">
          <StatusFilter options={options} onChange={handleFilter} />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TaskList tasks={tasks} />
      </main>

      <Pagination
        pages={pages}
        currentPage={+currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Tasks;
