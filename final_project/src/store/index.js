import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";
import fetchStatusReducer from "./fetchStatusSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsReducer,
    fetchStatus: fetchStatusReducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
