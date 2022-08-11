import { atom } from "jotai";
import { modalToggle } from "store";

const toggle = atom(false);

export const useToggle = atom(
  (get) => get(toggle)
);

export const changeToggle = atom(
  (get) => get(toggle),(get, set) => {
    console.log(toggle)
    const update = !get(toggle);
    set(toggle, update);
    console.log(toggle)
  }
);