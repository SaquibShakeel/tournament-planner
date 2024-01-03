"use client";
import TeamInput from "./TeamInput";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const AllTeams = () => {
  const router = useRouter();

  const participants = useSelector((state: any) => state.participants);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-700 w-[80%] rounded-lg p-6">
      <h3 className="font-semibold text-gray-400 mb-1 text-xl">Team Entry</h3>
      <div className="grid grid-cols-3 gap-2 border-t-2 border-blue-400 py-6">
        {participants.map((teamName: string, index: number) => (
          <div
            key={index}
            className="transform transition-all bg-transparent shadow-sm shadow-blue-400 hover:scale-105 hover:bg-blue-400 duration-300 ease-in-out text-white px-4 py-2 rounded-sm"
          >
            {teamName}
          </div>
        ))}
        <TeamInput />
      </div>
      <button
        onClick={() => {
          router.push("/tournament");
        }}
        disabled={participants.length < 3}
        className="transform transition-all border-none outline-none rounded-md bg-blue-400 disabled:bg-gray-500 disabled:cursor-not-allowed py-2 px-4 font-bold hover:scale-110 hover:bg-blue-500 ease-in-out duration-300"
      >
        START
      </button>
    </div>
  );
};

export default AllTeams;
