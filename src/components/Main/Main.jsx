import Modal from "components/Modal/Modal";
import ModalPortal from "components/Modal/Potal";
import Profile from "components/Profile/Profile";
import { useAtom, useAtomValue } from "jotai";
import { Suspense } from "react";
import { apiDataAtom, changeCount, changeDataAtom, isModalAtom, setApiDataAtom } from "store";
import * as S from "./styled";

const Main = () => {
  const [isModal, setModal] = useAtom(isModalAtom);

  // const data = useAtomValue(apiDataAtom)
  // const [, setApiDataAction] = useAtom(apiDataAtom);
  const [apiData, setApiDataAction] = useAtom(apiDataAtom);

  const count = useAtomValue(changeCount);
  const data = useAtomValue(changeDataAtom);
  const profileApiData = useAtomValue(setApiDataAtom)

  return (
    <div>
      <Suspense>
        <S.Title>
          <div></div>
          <div>
            <div>Name: {data.name}</div>
            <div>Description: {data.description}</div>
            <div>apiData: {profileApiData}</div>
          </div>
          <S.ProfileButton
            onClick={() => {
              setModal();
            }}
          >
            Profile
          </S.ProfileButton>
        </S.Title>
        <div>Count: {count}</div>
        <div>API Data : {apiData}</div>
        <button onClick={() => setApiDataAction()}>loading heathy</button>
        <ModalPortal>
          {isModal && <Modal Component={Profile} setModal={setModal} />}
        </ModalPortal>
      </Suspense>
    </div>
  );
};

export default Main;
