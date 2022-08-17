import { atom } from "jotai";

const toggle = atom(false);

export const isModalAtom = atom(
  (get) => get(toggle),
  (get, set) => {
    const update = !get(toggle);
    set(toggle, update);
  }
);
