import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ControlsState } from "@/types";

const initialState: ControlsState = {
  marathonsFilterId: "all",
  marathonsSortId: "date-desc",
};

const controlsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    setMarathonsFilterId: (state, action: PayloadAction<string>) => {
      state.marathonsFilterId = action.payload;
    },
    setMarathonsSortId: (state, action: PayloadAction<string>) => {
      state.marathonsSortId = action.payload;
    },
  },
});

export const { setMarathonsFilterId, setMarathonsSortId } = controlsSlice.actions;
export default controlsSlice.reducer;
