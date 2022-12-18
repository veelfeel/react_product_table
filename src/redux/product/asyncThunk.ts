import { createAsyncThunk } from "@reduxjs/toolkit";
import URLs from "../../utils/apiUrls";
import { Product } from "./types";

export const fetchProducts = createAsyncThunk<
  Product[],
  undefined,
  { rejectValue: string }
>("products/fetchProducts", async (params, { rejectWithValue }) => {
  try {
    let dataArr = [];

    const fetchData = async (url: string) => {
      const response = await fetch(url);
      return await response.json();
    };

    const promiseAll = await Promise.all(URLs.map(fetchData));

    for (const dat of promiseAll) {
      dataArr.push(...dat);
    }

    return dataArr as Product[];
  } catch (error) {
    return rejectWithValue("Не удалось получить товары");
  }
});
