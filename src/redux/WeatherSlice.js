// a4d3aad7582433eca4b3b3f1e24a63a8
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchData",
  async (coords) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coords[0]}&lon=${coords[1]}&exclude=hourly,minutely&lang=tr&units=metric&appid=a4d3aad7582433eca4b3b3f1e24a63a8`
    );
    return res.data;
  }
);

export const WeatherSlice = createSlice({
  name: "weatherSlice",
  initialState: {
    items: {},
    status: "idle",
    coords: ['41.015137','28.979530']
  },
  reducers: {
    changeCoords: (state, action) => {
      state.coords = action.payload;
    }
  },
  extraReducers: {
    [fetchWeatherData.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    },
    [fetchWeatherData.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchWeatherData.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { changeCoords } = WeatherSlice.actions;
export default WeatherSlice.reducer;
