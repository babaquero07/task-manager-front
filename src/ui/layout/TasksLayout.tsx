import { Outlet } from "react-router";
import Navbar from "../molecules/Navbar";
// import Footer from "../molecules/Footer";

const TasksLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default TasksLayout;
