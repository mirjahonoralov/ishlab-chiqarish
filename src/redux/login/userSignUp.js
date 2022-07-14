import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const userSignUp = createAsyncThunk(
  "signUp/userSignUp",
  async function (userData, { rejectWithValue, dispatch }) {
    console.log(userData, "in reducer");
    try {
      let response = await axios.post(
        "http://157.230.18.252/api/v1/user/client/register/",
        { phone_number: userData.phone_number }
      );
      if (response.status === 200 || response.status === 201) {
        console.log(response, "response");
        cookies.set("role", response.data.role, { path: "/" });
        cookies.set("phone_number", userData.phone_number);
        cookies.set("company_name", userData.company_name);
        cookies.set("country", userData.country);
        cookies.set("email", userData.email);
        cookies.set("verify_code", response.data.verify_code);
        cookies.remove("error", { path: "/" });
        return {
          ...userData,
          verifyCodeSuccess: response.data.success,
        };
      }
      if (!response.status) {
        throw new Error("Internal Server Error");
      }
    } catch (error) {
      cookies.set("error", "error occured", { path: "/" });
      return rejectWithValue(error.message);
    }
  }
);

export const signUp = createSlice({
  name: "signUp",
  initialState: {
    status: null,
    error: null,
    verifyCodeSuccess: false,
  },
  reducers: {},
  extraReducers: {
    [userSignUp.pending]: (state) => {
      state.status = "pending";
      state.error = null;
    },
    [userSignUp.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.verifyCodeSuccess = action.payload.verifyCodeSuccess;
    },
    [userSignUp.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

// export const { actions } = signUp.actions;

export default signUp.reducer;
