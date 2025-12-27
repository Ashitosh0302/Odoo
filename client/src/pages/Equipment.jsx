import { useEffect, useState } from "react";
import { getEquipment } from "../api/equipment.api.js";

export default function Equipment() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getEquipment().then(setData);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Equipment</h2>

      <div className="bg-white rounded shadow">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="text-left">Department</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr key={e._id} className="border-t">
                <td className="p-3">{e.name}</td>
                <td>{e.department}</td>
                <td>{e.isScrapped ? "Scrapped" : "Active"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
