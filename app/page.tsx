import AllTeams from "./components/AllTeams";

export default function Home() {  
  return (
    <main className="w-full min-h-[100vh] flex flex-col items-center justify-start">
      <div className="flex flex-col items-center justify-center p-10">
        <p className="text-sm text-gray-400">CREATE YOUR OWN TOURNAMENT WITH</p>
        <h1 className="text-4xl font-bold text-white">Tournament Planner</h1>
      </div>
      <AllTeams/>
    </main>
  )
}
