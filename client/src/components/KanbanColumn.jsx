export default function KanbanColumn({ title, items }) {
  return (
    <div className="bg-gray-100 rounded p-4 w-64">
      <h3 className="font-semibold mb-3">{title}</h3>
      {items.map((i) => (
        <div key={i._id} className="bg-white p-3 rounded shadow mb-2">
          {i.subject}
        </div>
      ))}
    </div>
  );
}
