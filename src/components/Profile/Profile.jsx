import { atom, useAtom, useSetAtom } from "jotai";
import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { changeCount, changeDataAtom, setApiDataAtom } from "store";
import * as S from "./styled";

const editToggleAtom = atom(false);

const Profile = () => {
  const [editToggle, setEditToggle] = useAtom(editToggleAtom);

  const getCount = useAtomValue(changeCount);
  const setCount = useUpdateAtom(changeCount);

  const [profileData, changeData] = useAtom(changeDataAtom);

  const [apiData, setApiData] = useAtom(setApiDataAtom);
  const [apiDataState, setDataState] = useState(apiData);

  useLayoutEffect(() => {
    if (editToggle === false) {
      setCount((count) => count + 1);
    }
  }, [editToggle, setCount]);

  const toggleEdit = () => {
    setApiData(apiDataState);
    setEditToggle((toggle) => !toggle);
  };

  const changeInput = (e) => {
    if (e) {
      const data = {
        targetName: e.target.name,
        data: e.target.value,
      };

      changeData(data);
    }
  };

  const setInput = (e) => {
    if (e) {
      setDataState(e.target.value);
    }
  };

  return (
    <S.Container>
      <S.FlexBox>
        <S.Text>Title: </S.Text>
        <S.Name
          name="name"
          value={profileData.name}
          readOnly={editToggle ? "" : "readOnly"}
          onChange={changeInput}
        />
      </S.FlexBox>
      <S.FlexBox>
        <S.Text>Discription: </S.Text>
        <S.Description
          name="description"
          value={profileData.description}
          readOnly={editToggle ? "" : "readOnly"}
          onChange={changeInput}
        />
      </S.FlexBox>
      <S.FlexBox>
        <S.Text>ApiData: </S.Text>
        <S.Description
          name="apiData"
          value={apiDataState}
          readOnly={editToggle ? "" : "readOnly"}
          onChange={setInput}
        />
      </S.FlexBox>
      <S.EditButton onClick={() => toggleEdit()}>
        {editToggle ? "save" : "edit"}
      </S.EditButton>
      <S.Text>count: {getCount}</S.Text>
    </S.Container>
  );
};

export default Profile;
