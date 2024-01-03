'use client'
import React, {useState} from "react";
import { Match } from "../Hooks/useMatchGenerator";

interface Props {
  match: Match;
}

const Winner = () => {
  return (
    <p className="text-green-500 font-extralight text-sm -mt-2">Winner</p>
  )
}

const Loser = () => {
  return (
    <p className="text-red-500 font-extralight text-sm -mt-2">Loser</p>
  )
}

const MatchCard = ({ match }: Props) => {

  const [winner, setWinner] = useState<string>("");

  return (
    <div className="p-4 border-2 border-blue-400 rounded-md w-[300px] bg-gray-700">
      {match.player2 ? (
        <div className="flex items-center justify-between gap-2 w-full">
          <div onClick={()=>{
            match.winner = match.player1;
            setWinner(match.player1);
          }} className="flex flex-col w-[45%] items-center justify-center cursor-pointer">
            <h3 className="font-semibold text-lg text-center">
              {match.player1}
            </h3>
            {winner? winner === match.player1 ? <Winner/> : <Loser/> : null}
          </div>
          <p className="text-sm font-thin">vs</p>
          <div onClick={()=>{
            match.winner = match.player2;
            match.player2 && setWinner(match.player2);
          }} className="flex flex-col w-[45%] items-center justify-center cursor-pointer">
            <h3 className="font-semibold text-lg text-center">
              {match.player2}
            </h3>
            {winner? winner === match.player2 ? <Winner/> : <Loser/> : null}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col">
          <h3 className="font-semibold text-lg text-center">{match.player1}</h3>
          <p className="text-blue-500 font-extralight text-sm -mt-2">bye</p>
        </div>
      )}
    </div>
  );
};

export default MatchCard;
