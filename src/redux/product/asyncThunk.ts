import { createAsyncThunk } from "@reduxjs/toolkit";
import URLs from "../../utils/apiUrls";
import { SearchProductParams } from "../filters/types";
import { Product } from "./types";

export const fetchProducts = createAsyncThunk<
  Product[],
  SearchProductParams,
  { rejectValue: string }
>("products/fetchProducts", async (params, { rejectWithValue }) => {
  try {
    const { searchValue } = params;

    const fetchData = async (url: string) => {
      const response = await fetch(`${url}/?q=${searchValue}`);
      return await response.json();
    };

    const data = await Promise.all(URLs.map(fetchData));
    return data[0].concat(data[1]) as Product[];
  } catch (error) {
    return rejectWithValue("Не удалось получить товары");
  }
});
