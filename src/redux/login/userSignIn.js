import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const userSignIn = createAsyncThunk(
  "signIn/userSignIn",
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

        return {
          ...userData,
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

export const userSignInSlice = createSlice({
  name: "userSignInSlice",
  initialState: {
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [userSignIn.pending]: (state) => {
      state.status = "pending";
      state.error = null;
    },
    [userSignIn.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.verifyCodeSuccess = action.payload.verifyCodeSuccess;
    },
    [userSignIn.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

// export const { actions } = userSignInSlice.actions;

export default userSignInSlice.reducer;
