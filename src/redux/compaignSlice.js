import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "../utils/mockdata";

const initialState = {
  // compaignDetailList: [
  //   {
  //     id: 0,
  //     name: "compaign name",
  //     description: "lorem ipsum",
  //     launchDate: "20/1/2025",
  //   },
  //   {
  //     id: 1,
  //     name: "compaign name",
  //     description: "lorem ipsum",
  //     launchDate: "20/1/2024",
  //   },
  // ],
  compaignDetailList: mockData,
};

export const compaignSlice = createSlice({
  name: "compaign",
  initialState,
  reducers: {
    addNewCompaign: (state, action) => {
      const { name, description, launchDate } = action.payload;
      state.compaignDetailList = [
        {
          id: state.compaignDetailList.length,
          name: name,
          description: description,
          launchDate: launchDate,
        },
        ...state.compaignDetailList,
      ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewCompaign } = compaignSlice.actions;

export default compaignSlice.reducer;
