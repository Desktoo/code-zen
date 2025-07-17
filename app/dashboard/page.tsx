import DashNav from "./DashNav";

export default function Dashboard() {
  return (
    <div className="flex flex-col  h-screen">
      <DashNav />
      <div className="flex-1 flex flex-col items-center justify-center p-6 ">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p className="text-lg">Welcome to your dashboard!</p>
      </div>
    </div>
  );
}
