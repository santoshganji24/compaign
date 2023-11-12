import { mockData } from "../mockdata";

const initialState = mockData;

export const loadFromLocalStorage = () => {
  try {
    const stateStore = localStorage.getItem("compaign");
    return stateStore ? JSON.parse(stateStore) : mockData;
  } catch (error) {
    console.error("Error loading state from local storage", error);
    return undefined;
  }
};

export const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("compaign", JSON.stringify(state));
  } catch (error) {
    console.error("Error saving state to local storage", error);
  }
};
