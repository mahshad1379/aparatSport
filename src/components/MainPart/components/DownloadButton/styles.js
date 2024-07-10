import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  gap: 12px;
  padding-top: 16px;
`;
