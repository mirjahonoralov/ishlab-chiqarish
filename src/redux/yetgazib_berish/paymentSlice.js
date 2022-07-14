import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPayments = createAsyncThunk(
  "paymentsSlice/getPayments",
  async function (data, { rejectWithValue, dispatch }) {
    try {
      let response = await axios.get(
        "http://157.230.18.252/api/v1/finance/supplier-payments/"
      );
      if (response.status === 200 || response.status === 201) {
        console.log(response, "res");
        dispatch(setSuppliers_list(response.data));
      }
      if (!response.status) {
        console.log(response, "res");
        throw new Error("Internal Server Error");
      }
      //   return { ...userData, role: response.data.role };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const lists = createSlice({
  name: "lists",
  initialState: {
    get_suppliers: {
      status: null,
      error: null,
      list: [],
    },
  },
  reducers: {
    setSuppliers_list: (state, action) => {
      state.get_suppliers.list = action.payload;
    },
  },
  //   extraReducers: {
  //     [getList.pending]: (state) => {
  //       state.get_suppliers.status = "pending";
  //       state.get_suppliers.error = null;
  //     },
  //     [getList.fulfilled]: (state, action) => {
  //       state.status = "resolved";
  //       //   state.phone_number = action.payload.phone_number;
  //     },
  //     [getList.rejected]: (state, action) => {
  //       state.status = "rejected";
  //       state.error = action.payload;
  //     },
  //   },
});

export const { setSuppliers_list } = lists.actions;

export default lists.reducer;
