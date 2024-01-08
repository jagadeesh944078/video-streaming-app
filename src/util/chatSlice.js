import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./const";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    comments: [],
  },
  reducers: {
    addComments: (state, action) => {
      state.comments.splice(LIVE_CHAT_COUNT, 1);
      state.comments.unshift(action.payload);
    },
  },
});

export const { addComments } = chatSlice.actions;
export default chatSlice.reducer;
