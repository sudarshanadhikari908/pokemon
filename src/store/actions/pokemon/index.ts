import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const getPokemonByGeneration = createAsyncThunk(
  "getPokemonByGeneration",
  async (api: string) => {
    try {
      const res = await axios.get(api);
      if (res.status === 200) {
        return res?.data;
      }
    } catch (e) {
      toast?.error("Unable to get Pokemon");
    }
  },
);
