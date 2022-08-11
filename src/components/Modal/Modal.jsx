import ModalPortal from "./Potal";
import * as S from "./styled";
import { useAtom } from "jotai";

const Modal = ({ Component, changeToggle = (f) => f }) => {
  // const [toggle, changeToggle2] = useAtom(changeToggle);

  return (
    <ModalPortal>
      <S.Background>
        <S.Content>
          <S.CloseImg
            onClick={() => {
             changeToggle();
            }}
          >
            close
          </S.CloseImg>
          <Component />
        </S.Content>
      </S.Background>
    </ModalPortal>
  );
};

export default Modal;
