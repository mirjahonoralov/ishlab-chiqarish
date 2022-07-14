import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getList = createAsyncThunk(
  "listSlice/getList",
  async function (data, { rejectWithValue, dispatch }) {
    console.log("getlist in reducer");
    try {
      let response = await axios.get(
        "http://157.230.18.252/api/v1/supplier/suppliers/"
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

export const getPayments = createAsyncThunk(
  "listSlice/getPayments",
  async function (data, { rejectWithValue, dispatch }) {
    try {
      let response = await axios.get(
        "http://157.230.18.252/api/v1/finance/supplier-payments/"
      );
      if (response.status === 200 || response.status === 201) {
        dispatch(setSuppliers_payments_list(response.data.results));
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

export const getExpense = createAsyncThunk(
  "listSlice/getExpense",
  async function (data, { rejectWithValue, dispatch }) {
    try {
      let response = await axios.get(
        "http://157.230.18.252/api/v1/finance/expense/"
      );
      if (response.status === 200 || response.status === 201) {
        dispatch(setExpense_list(response.data.results));
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

export const getIncome = createAsyncThunk(
  "listSlice/getIncome",
  async function (data, { rejectWithValue, dispatch }) {
    console.log("income slice");
    try {
      let response = await axios.get(
        "http://157.230.18.252/api/v1/finance/income/"
      );
      if (response.status === 200 || response.status === 201) {
        console.log(response, "res of payments");
        dispatch(setIncome_list(response.data.results));
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
    get_suppliers_payments: {
      status: null,
      error: null,
      list: [],
    },
    get_expense: {
      status: null,
      error: null,
      list: [],
    },
    get_income: {
      status: null,
      error: null,
      list: [],
    },
  },

  reducers: {
    setSuppliers_list: (state, action) => {
      state.get_suppliers.list = action.payload;
    },
    setSuppliers_payments_list: (state, action) => {
      state.get_suppliers_payments.list = action.payload;
    },
    setExpense_list: (state, action) => {
      state.get_expense.list = action.payload;
    },
    setIncome_list: (state, action) => {
      state.get_income.list = action.payload;
    },
  },

  extraReducers: {
    [getList.pending]: (state) => {
      state.get_suppliers.status = "pending";
      state.get_suppliers.error = null;
    },
    [getList.fulfilled]: (state, action) => {
      state.status = "resolved";
    },
    [getList.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },

    // --- PAYMENTS ---
    [getPayments.pending]: (state) => {
      state.get_suppliers_payments.status = "pending";
      state.get_suppliers_payments.error = null;
    },
    [getPayments.fulfilled]: (state, action) => {
      state.status = "resolved";
    },
    [getPayments.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },

    // --- EXPENSE ---
    [getExpense.pending]: (state) => {
      state.get_expense.status = "pending";
      state.get_expense.error = null;
    },
    [getExpense.resolve]: (state, action) => {
      state.status = "resolved";
    },
    [getExpense.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },

    // --- INCOME ---
    [getIncome.pending]: (state) => {
      state.get_income.status = "pending";
      state.get_income.error = null;
    },
    [getIncome.resolve]: (state, action) => {
      state.status = "resolved";
    },
    [getIncome.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const {
  setSuppliers_list,
  setSuppliers_payments_list,
  setExpense_list,
  setIncome_list,
} = lists.actions;

export default lists.reducer;
