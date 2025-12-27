import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Overview</h2>

      <div className="grid grid-cols-4 gap-6">
        <StatCard title="Total Equipment" value="24" />
        <StatCard title="Open Requests" value="7" />
        <StatCard title="Preventive Tasks" value="5" />
        <StatCard title="Scrapped Assets" value="2" />
      </div>
    </div>
  );
}
