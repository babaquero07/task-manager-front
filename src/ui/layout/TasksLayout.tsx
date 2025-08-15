import { Outlet } from "react-router";

const TasksLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex justify-between items-center p-4">
        <span className="text-2xl font-bold">Task Manager 🖊️</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Crear tarea
        </button>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="bg-white border-t mt-12 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-600">
            Repositorio
            <a
              href="https://jsonplaceholder.typicode.com"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Task Manager Front
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TasksLayout;
