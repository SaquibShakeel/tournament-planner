'use client'

import { configureStore } from "@reduxjs/toolkit"

import participantsSlice from "./Features/participantsSlice"

export const store = configureStore({
    reducer: {
        participants: participantsSlice
    }
})

export type RootState = ReturnType<typeof participantsSlice>;