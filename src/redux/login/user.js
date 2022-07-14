import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const postUserInfo = createAsyncThunk(
  "userSlice/postUserInfo",
  async function (userData, { rejectWithValue, dispatch }) {
    try {
      let response = await axios.post(
        "http://157.230.18.252/api/v1/user/direktor/login/",
        userData
      );
      if (response.status === 200 || response.status === 201) {
        cookies.set("access", response.data.token, { path: "/" });
        cookies.set("refresh", response.data.refresh, {
          expires: 0,
          path: "/",
        });
        cookies.set("role", response.data.role, { path: "/" });
        cookies.remove("error", { path: "/" });
        console.log(response);
      }
      if (!response.status) {
        throw new Error("Internal Server Error");
      }
      return { ...userData, role: response.data.role };
    } catch (error) {
      cookies.set("error", "error occured", { path: "/" });
      return rejectWithValue(error.message);
    }
  }
);

export const users = createSlice({
  name: "userSlice",
  initialState: {
    phone_number: null,
    password: null,
    status: null,
    error: null,
    role: cookies.get("role") ?? null,
  },
  reducers: {
    logoutUser: (state, action) => {
      state.phone_number = null;
      state.password = null;
      state.status = null;
      state.error = null;
      cookies.remove("role");
      cookies.remove("access");
      cookies.remove("token");
      cookies.remove("refresh");
    },
  },
  extraReducers: {
    [postUserInfo.pending]: (state) => {
      state.status = "pending";
      state.error = null;
    },
    [postUserInfo.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.phone_number = action.payload.phone_number;
      state.password = action.payload.password;
      state.role = action.payload.role;
    },
    [postUserInfo.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { userInfo, logoutUser } = users.actions;

export default users.reducer;
