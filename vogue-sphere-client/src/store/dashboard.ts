import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState: { value: object } = {
  value: {},
};
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    updateDashboardDetails: (state, action: PayloadAction<object>) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

export const { updateDashboardDetails } = dashboardSlice.actions;

export default dashboardSlice.reducer;
