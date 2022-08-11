import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  font-size: 24px;
  color: white;
`;

export const Name = styled.input`
  background-color: transparent;
  outline: none;
  border: solid 1px white;
  color: white;
  padding: 10px 4px;
  font-size: 16px;
`;

export const Description = styled.textarea`
  background-color: transparent;
  outline: none;
  border: solid 1px white;
  color: white;
  padding: 12px 4px;
  font-size: 16px;
  resize: none;
  width: 100%;
`;

export const EditButton = styled.div`
  width: 50px;
  height: 20px;
  background-color: white;
  cursor: pointer;
`;

export const FlexBox = styled.div`
  margin-bottom: 10px;
`;