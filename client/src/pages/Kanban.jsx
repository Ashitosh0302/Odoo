import { useEffect, useState } from "react";
import { fetchKanban } from "../api/requests.api";
import KanbanColumn from "../components/KanbanColumn";

export default function Kanban() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchKanban().then(setData);
  }, []);

  const filter = (status) => data.filter((i) => i.status === status);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Kanban</h2>

      <div className="flex gap-6">
        <KanbanColumn title="New" items={filter("New")} />
        <KanbanColumn title="In Progress" items={filter("In Progress")} />
        <KanbanColumn title="Repaired" items={filter("Repaired")} />
      </div>
    </div>
  );
}
