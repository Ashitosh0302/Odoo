import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";

import Dashboard from "./pages/Dashboard";
import Equipment from "./pages/Equipment";
import Kanban from "./pages/Kanban";
import Calendar from "./pages/Calendar";

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <div className="ml-64">
        <Topbar />
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
