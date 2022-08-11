import { Suspense, useEffect } from "react";
import * as S from "./styled";
import Modal from "components/Modal/Modal";
import ModalPortal from "components/Modal/Potal";
import Profile from "components/Profile/Profile";
import { useAtom, useAtomValue } from "jotai";
import {
  changeCount,
  profileAtom,
  apiDataAtom
} from "store";
import { changeToggle } from "store/Static/StaticAction";


const Main = () => {
  // const [, toggleAction] = useAtom(trueToggle);
  const [toggle,changeToggle2] = useAtom(changeToggle);

  // const data = useAtomValue(apiDataAtom)
  // const [, setApiDataAction] = useAtom(apiDataAtom);
  const [apiData, setApiDataAction] = useAtom(apiDataAtom);

  const count = useAtomValue(changeCount);
  const { name } = useAtomValue(profileAtom);

  return (
    <div>
      <Suspense>
        <S.Title>
          <div></div>
          <div>Name: {name}</div>
          <S.ProfileButton onClick={() => {changeToggle2()}}>
            Profile
          </S.ProfileButton>
        </S.Title>
        <div>Count: {count}</div>
        <div>API Data : {apiData}</div>
        <button onClick={() => setApiDataAction()}>loading heathy</button>
        <ModalPortal>{toggle && <Modal Component={Profile} changeToggle={changeToggle2} />}</ModalPortal>
      </Suspense>
    </div>
  );
};

export default Main;
