import { createSlice } from '@reduxjs/toolkit';

export const naikTurunSlice = createSlice({
    name: 'naikTurun', // Ubah nama slice menjadi 'naikTurun'
    initialState:{
        totalCounter:0 // counter yang menghitung naik/turun
    },
    reducers: {
        tambahCounter(state) {
            state.totalCounter += 1;
        },
        kurangCounter(state) {
            state.totalCounter -= 1;
        }
    },
});

export const { tambahCounter, kurangCounter } = naikTurunSlice.actions;
export default naikTurunSlice.reducer; // Ubah menjadi .reducer