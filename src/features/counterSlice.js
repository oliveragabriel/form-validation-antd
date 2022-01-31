import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: {
      pessoa: {},
      control: false,
      index: null
    },
  },
  reducers: {
    setPerson: (state, action) => {
      console.log(state.pessoa);
      console.log(action.payload);
      state.pessoa = action.payload.pessoa;
    },
    setAlert: (state, action) => {
      state.control = action.payload.control;
      state.index = action.payload.index;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPerson, setAlert } = counterSlice.actions;

export default counterSlice.reducer;
