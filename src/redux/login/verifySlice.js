import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const verifyFunc = createAsyncThunk(
  "signUp/verifySlice",
  async function (userData, { rejectWithValue, dispatch }) {
    try {
      let response = await axios.post(
        "http://157.230.18.252/api/v1/user/client/verifyuser/",
        userData
      );
      if (response.status === 200 || response.status === 201) {
        cookies.remove("error", { path: "/" });
        return {
          registered: true,
        };
      }
      if (!response.status) {
        throw new Error("Internal Server Error");
      }
      // return { ...userData, vercode: response.data.vercode };
    } catch (error) {
      cookies.set("error", "error occured", { path: "/" });
      return rejectWithValue(error.message);
    }
  }
);

export const verifySlice = createSlice({
  name: "signUp",
  initialState: {
    status: null,
    error: null,
    registered: false,
    // phone_number: cookies.get("phone_number") ?? null,
    // vercode: "",
  },

  extraReducers: {
    [verifyFunc.pending]: (state) => {
      state.status = "pending";
      state.error = null;
    },
    [verifyFunc.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.registered = action.payload.registered;
    },
    [verifyFunc.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

// export const { redactionsucers } = signUp.actions;

export default verifySlice.reducer;
