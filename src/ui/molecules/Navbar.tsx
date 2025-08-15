const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-200">
      <p className="text-2xl font-bold">Task Manager 🖊️</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Crear tarea
      </button>
    </nav>
  );
};

export default Navbar;
