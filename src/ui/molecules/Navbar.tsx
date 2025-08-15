import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-200">
      <Link to="/tasks" className="text-2xl font-bold">
        Task Manager 🖊️
      </Link>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition-colors"
        onClick={() => navigate("/tasks/create")}
      >
        Crear tarea
      </button>
    </nav>
  );
};

export default Navbar;
