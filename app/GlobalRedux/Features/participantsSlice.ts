'use client'

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: string[] = [];

const participantsSlice = createSlice({
  name: 'participants',
  initialState,
  reducers: {
    addParticipant: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    removeParticipant: (state, action: PayloadAction<string>) => {
      return state.filter((participant) => participant !== action.payload);
    },
    resetParticipants: (state) => {
      return initialState;
    },
  },
});

export const { addParticipant, removeParticipant, resetParticipants } = participantsSlice.actions;
export default participantsSlice.reducer;