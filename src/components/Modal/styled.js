import styled from "@emotion/styled";

export const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(17, 17, 17, 0.65);
  // backdrop-filter: blur(4px);
`;

export const Content = styled.div`
  background-color: grey;
  width: 436px;
  border-radius: 30px;
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
`;

export const CloseImg = styled.div`
  width: 50px;
  height: 20px;
  background-color: white;
  cursor: pointer;
`;