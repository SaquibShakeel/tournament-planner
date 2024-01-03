"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Match, useMatchGenerator } from "../Hooks/useMatchGenerator";
import MatchCard from "../components/MatchCard";

const page = () => {
  const participants = useSelector((state: any) => state.participants);
  const temp = [];
  temp.push(useMatchGenerator(participants));
  const [matches, setMatches] = useState<Match[][]>(temp);

  const nextRoundHandler = () => {
    try {
      let n = matches.length;
      const qualifiedTeams: string[] = matches[n - 1].map((match: Match) => {
        if (!match.winner) {
          throw new Error("All matches should be completed!");
        }
        return match.winner;
      });

      const nextRound: Match[] = useMatchGenerator(qualifiedTeams);
      setMatches([...matches, nextRound]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[100vh] w-full">
    <div className="flex flex-col items-center justify-center gap-4 p-10 rounded-md shadow-2xl shadow-blue-400 w-[90%]">
      {matches.map((round: Match[], index: number) => (
        <div className={`flex flex-col items-${round.length > 4 ? 'start': 'center'} justify-center gap-4 w-full overflow-auto round_card`} key={index}>
          <h2 className="font-semibold text-lg text-blue-500 self-center">
            {round.length === 2
              ? "Semifinals"
              : round.length === 1
              ? "Finals"
              : `Round ${index + 1}`}
          </h2>
          <div className="flex items-start justify-between gap-4">
            {round.map((match: Match, indexInner: number) => (
              <MatchCard key={indexInner} match={match} />
            ))}
          </div>
        </div>
      ))}
      {matches[matches.length - 1].length > 1 && (
        <button
          className="border-none outline-none py-2 px-4 bg-yellow-600 rounded-md"
          onClick={nextRoundHandler}
        >
          Next Round
        </button>
      )}
    </div>
    </div>
  );
};

export default page;
