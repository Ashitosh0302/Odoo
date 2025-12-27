import { useEffect, useState } from "react";
import { getKanbanRequests } from "../api/requests.api";

export default function Kanban() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getKanbanRequests().then(setData);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Kanban</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
