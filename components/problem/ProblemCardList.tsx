import ProblemCard from "./ProblemCard";

export default function ProblemCardList() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-6 h-full ">
        <ProblemCard id="two-sum" title="Two Sum" description="Find indices that add up to target" />
        {/* <ProblemCard />
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
        <ProblemCard /> */}
      </div>
  )
}