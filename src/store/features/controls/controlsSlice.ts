import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ControlsState } from "@/types";

const initialState: ControlsState = {
  marathonsFilterId: "all",
};

const controlsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    setMarathonsFilterId: (state, action: PayloadAction<string>) => {
      state.marathonsFilterId = action.payload;
    },
  },
});

export const { setMarathonsFilterId } = controlsSlice.actions;
export default controlsSlice.reducer;
