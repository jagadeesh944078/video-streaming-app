import { configureStore } from "@reduxjs/toolkit";
import appMenuSlice from "./appMenuSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appMenuSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
