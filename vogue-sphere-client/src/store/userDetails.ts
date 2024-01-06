import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface userDetailsState {
  value: object;
}

// Define the initial state using that type
const initialState: userDetailsState = {
  value: {},
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    updateUserDetails: (state, action: PayloadAction<object>) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

export const { updateUserDetails } = userDetailsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserDetails = (state: RootState) => state.userDetails.value;

export default userDetailsSlice.reducer;
