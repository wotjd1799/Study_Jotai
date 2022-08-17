import { atom } from "jotai";

const profileData = atom({
  name: "Local에서 지정한 Data 1",
  //만약 description이 api로 받아온 값이라면?
  description: "Local에서 지정한 Data 2",
});

const profileData2 = atom("Api에서 받아온 Data 입니다.");

export const setApiDataAtom = atom(
  (get) => get(profileData2),
  (get, set, update) => {
    set(profileData2, update)
  }
);

export const changeDataAtom = atom(
  (get) => get(profileData),
  (get, set, update) => {
    const data = {
      ...get(profileData),
      [update.targetName]: update.data,
    };

    set(profileData, data);
  }
);
