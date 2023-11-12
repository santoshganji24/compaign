import { configureStore } from "@reduxjs/toolkit";
import compaignSlice from "./redux/compaignSlice";

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("compaign", JSON.stringify(state));
  } catch (error) {
    console.log(error);
  }
};

const loadfromLocalStorage = () => {
  try {
    const stateStore = localStorage.getItem("compaign");
    return stateStore ? JSON.parse(stateStore) : undefined;
  } catch (error) {
    return undefined;
  }
};

const persistedStore = loadfromLocalStorage();

export const store = configureStore({
  reducer: {
    compaign: compaignSlice,
  },
  preloadedState: persistedStore,
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
