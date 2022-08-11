import { atom } from "jotai";
import { apiData } from "store";
import { fetchData } from "utils/api";

export const apiDataAtom = atom(
  (get) => get(apiData),
  async (get, set) => {
    const response = await fetchData();

    set(apiData, response);
  }
);
