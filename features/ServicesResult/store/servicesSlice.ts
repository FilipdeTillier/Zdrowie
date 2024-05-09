import { TNullable } from "@common/interfaces";
import { paths } from "@helpers/paths";
import { request } from "@helpers/request";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppState } from "@store/store";
import {
  QueryResponse,
  ServiceProvider,
  ServiceType,
} from "../interfaces/servicesProvider";

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async (province: string) => {
    const { data } = await request.get<QueryResponse<ServiceProvider[]>>(
      `${paths.serviceProvider}?province=${province}`
    );
    return data;
  }
);

interface ServicesState {
  results: ServiceProvider[];
  pages: TNullable<number>;
}

const initialState: ServicesState = {
  results: [],
  pages: null,
};

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServices(state: ServicesState, action) {
      state.pages = action.payload.pages;
      state.results = action.payload.results;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.pages = action.payload.pages;
      state.results = action.payload.results;
    });
  },
});

export const selectResults = (state: AppState) => state.services.results;

export const selectPages = (state: AppState) => state.services.pages;
