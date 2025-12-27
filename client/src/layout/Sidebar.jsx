import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="fixed h-screen w-64 bg-white shadow">
      <div className="p-6 text-xl font-bold text-blue-600">
        GearGuard
      </div>

      <nav className="flex flex-col gap-2 px-4">
        <Link className="p-2 rounded hover:bg-gray-100" to="/">Dashboard</Link>
        <Link className="p-2 rounded hover:bg-gray-100" to="/equipment">Equipment</Link>
        <Link className="p-2 rounded hover:bg-gray-100" to="/kanban">Kanban</Link>
        <Link className="p-2 rounded hover:bg-gray-100" to="/calendar">Calendar</Link>
      </nav>
    </aside>
  );
}
