import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "../utils/mockdata";

const initialState = {
  // compaignDetailList: [
  // {
  //   id: 0,
  //   name: "compaign name",
  //   description: "lorem ipsum",
  //   launchDate: "20/1/2025",
  // },
  // {
  //   id: 1,
  //   name: "compaign name",
  //   description: "lorem ipsum",
  //   launchDate: "20/1/2024",
  // },
  // ],
  selectCompany: "",
  compaignDetailList: mockData,
  companyone: [
    {
      id: 1,
      name: "compaign one data",
      description: "lorem ipsum",
      launchDate: "2023-11-16",
      companyName: "companyone",
    },
    {
      id: 2,
      name: "compaign one data",
      description: "lorem ipsum",
      launchDate: "2023-11-16",
      companyName: "companyone",
    },
  ],
};

export const compaignSlice = createSlice({
  name: "compaign",
  initialState,
  reducers: {
    addNewCompaign: (state, action) => {
      const { name, description, launchDate, companyName } = action.payload;
      state[companyName] = [
        {
          id: state[companyName]?.length,
          name: name,
          description: description,
          launchDate: launchDate,
          companyName: companyName,
        },
        ...state[companyName],
      ];
    },
    editNewCompaign: (state, action) => {
      const { name, description, launchDate, id, companyName } = action.payload;
      let updatedData = state[companyName].map((item) =>
        item.id == id
          ? {
              id: +id,
              name: name,
              description: description,
              launchDate: launchDate,
              companyName: companyName,
            }
          : item
      );
      state[companyName] = updatedData;
    },
    companyDetails: (state, action) => {
      if (action.payload in initialState) {
        state.selectCompany = action.payload;
      } else {
        state.selectCompany = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewCompaign, editNewCompaign, companyDetails } =
  compaignSlice.actions;

export default compaignSlice.reducer;
