import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    text : ""
  },
  reducers: {
    globalSearch: (state, action) => {
      state.text = action.payload
    },
  },
});

export const { globalSearch } = searchSlice.actions;
export default searchSlice.reducer;
