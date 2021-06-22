import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getFlights = createAsyncThunk("flights/fetchFlights", async () => {
  try {
    const res = await fetch("http://localhost:5000/api/v1/flights/");
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
});

const flightSlice = createSlice({
  name: "flights",
  initialState: {
    flights: [],
  },
  reducers: {
    addFlight: (state, action) => {
      const flight = {
        id: new Date(),
        origin: action.payload.origin,
        destination: action.payload.destination,
      };

      state.flights.push(flight);
    },

    deleteFlight: (state, action) =>
      state.flights.filter((flight) => flight.id !== action.payload.id),
  },
  extraReducers: {
    //!use curly braces to prevent immer error
    [getFlights.fulfilled]: (state, action) => {
      state.flights = action.payload;
    },
  },
});

export const { addFlight, deleteFlight } = flightSlice.actions;
export default flightSlice.reducer;
