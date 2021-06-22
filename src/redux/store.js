import { configureStore } from "@reduxjs/toolkit";
import flightSlice from "./slice";

export default configureStore({
  reducer: { flights: flightSlice },
});
