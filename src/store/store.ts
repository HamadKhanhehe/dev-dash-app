// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface WeatherState {
//   temperature: number | null;
//   description: string | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: WeatherState = {
//   temperature: null,
//   description: null,
//   loading: false,
//   error: null,
// };

// const weatherSlice = createSlice({
//   name: 'weather',
//   initialState,
//   reducers: {
//     fetchWeatherStart: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchWeatherSuccess: (state, action: PayloadAction<any>) => {
//       state.temperature = action.payload.main.temp;
//       state.description = action.payload.weather[0].description;
//       state.loading = false;
//     },
//     fetchWeatherFailure: (state, action: PayloadAction<string>) => {
//       state.error = action.payload;
//       state.loading = false;
//     },
//   },
// });

// export const { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure } = weatherSlice.actions;
// export default weatherSlice.reducer;


import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import weatherReducer from '../store/weather/weatherSlice';
import pomodoroReducer from '../store/pomodoro/pomodoroSlice';
// Define the root state type
export const store = configureStore({
  reducer: {
    weather: weatherReducer,
     pomodoro: pomodoroReducer,
  },
});

// Define RootState (infer from store)
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch (for typed dispatch)
export type AppDispatch = typeof store.dispatch;

// Define AppThunk type (for async actions)
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;