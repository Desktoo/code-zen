import ProblemCard from "@/components/problem/ProblemCard";
import ProblemCardList from "@/components/problem/ProblemCardList";

export default function Problems() {
  return (
    <div className="flex flex-col min-h-screen">
      <ProblemCardList />
      <h1>Problems page</h1>
    </div>
  )
}