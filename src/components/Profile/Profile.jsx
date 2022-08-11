import React from "react";
import * as S from "./styled";
import { atom, useAtom } from "jotai";
import { useUpdateAtom, useAtomValue } from "jotai/utils";
import { useEffect } from "react";
import { profileAtom, changeCount } from "store";

const editToggleAtom = atom(false);

const Profile = () => {
  const [editToggle, setEditToggle] = useAtom(editToggleAtom);
  const getCount = useAtomValue(changeCount);
  const setCount = useUpdateAtom(changeCount);
  
  const { name, description } = useAtomValue(profileAtom);

  useEffect(() => {
    if (editToggle === false) {
      setCount((count) => count + 1);
    }
  }, [editToggle, setCount]);
  
  

  return (
    <S.Container>
      <S.FlexBox>
        <S.Name value={name} readOnly={editToggle ? "" : "readOnly"}/>
      </S.FlexBox>
      <S.FlexBox>
        <S.Text>Discription: </S.Text>
        <S.Description
          value={description}
          readOnly={editToggle ? "" : "readOnly"}
        />
      </S.FlexBox>
      <S.EditButton onClick={() => setEditToggle((toggle) => !toggle)}>
        {editToggle ? "save" : "edit"}
      </S.EditButton>
      <S.Text>count: {getCount}</S.Text>
    </S.Container>
  );
};

export default Profile;
