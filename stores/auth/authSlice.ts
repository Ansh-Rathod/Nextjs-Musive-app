import { AxiosError } from "./../../node_modules/axios/index.d";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authServices";
import { CookieValueTypes, getCookie } from "cookies-next";

export enum AuthStatus {
  Loading,
  Error,
  Success,
  Initial,
}

export interface UserProps {
  username: string;
  token: string;
}

export interface StateProps {
  user: UserProps | null;
  status: AuthStatus;
  message: string | unknown;
}

const user: CookieValueTypes = getCookie("user");

// initalize state
const initalState: StateProps = {
  user: user ? JSON.parse(user!.toString()) : null,
  status: AuthStatus.Initial,
  message: "",
};

// authslice
const authSlice = createSlice({
  name: "auth",
  initialState: initalState,
  reducers: {
    reset: (state) => {
      state.status = AuthStatus.Initial;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.status = AuthStatus.Loading;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.status = AuthStatus.Success;
      state.user = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.status = AuthStatus.Error;
      state.message = action.payload;
    });
    builder.addCase(login.pending, (state, action) => {
      state.status = AuthStatus.Loading;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = AuthStatus.Success;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = AuthStatus.Error;
      state.message = action.payload;
    });
  },
});

export const register = createAsyncThunk(
  "auth/register",
  async (user: any, thunkAPI) => {
    try {
      const data = await authService.register(user);
      return data;
    } catch (error: any) {
      // console.log(error);
      if (error.message) {
        const message: string = error.message;
        return thunkAPI.rejectWithValue(message);
      } else {
        return thunkAPI.rejectWithValue("Something went wrong");
      }
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (user: any, thunkAPI) => {
    try {
      const data = await authService.login(user);
      return data;
    } catch (error: any) {
      // console.log(error);
      if (error.status) {
        const message: string = error.message;
        return thunkAPI.rejectWithValue(message);
      } else {
        return thunkAPI.rejectWithValue("Something went wrong");
      }
    }
  }
);

export const { reset } = authSlice.actions;
export default authSlice.reducer;
