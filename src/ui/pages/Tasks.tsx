import { useEffect, useState } from "react";
import StatusFilter from "../molecules/StatusFilter";

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
  const [filter, setFilter] = useState<string | null>(null);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    console.log(filter);
  }, [filter]);

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
    </>
  );
};

export default Tasks;
