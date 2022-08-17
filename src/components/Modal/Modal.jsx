import ModalPortal from "./Potal";
import * as S from "./styled";

const Modal = ({ Component, setModal = (f) => f }) => {
  return (
    <ModalPortal>
      <S.Background>
        <S.Content>
          <S.CloseImg
            onClick={() => {
              setModal();
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
