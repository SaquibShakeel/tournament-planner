"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addParticipant } from "../GlobalRedux/Features/participantsSlice";

const TeamInput = () => {

  const dispatch = useDispatch();
  const [team, setTeam] = useState<string>("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addParticipant(team));
        setTeam("");
      }}
      className="flex items-center justify-center"
    >
      <input
        type="text"
        name="teamInput"
        autoComplete="off"
        required
        value={team}
        onChange={(e) => setTeam(e.target.value)}
        className="bg-transparent outline-none px-4 py-2 rounded-sm border-b-2 border-blue-400 text-white"
      />
      <button
        type="submit"
        className="py-2 px-4 rounded-sm font-bold ml-2 border-none outline-none bg-gradient-to-br from-blue-200 to-blue-500"
      >
        Add+
      </button>
    </form>
  );
};

export default TeamInput;
