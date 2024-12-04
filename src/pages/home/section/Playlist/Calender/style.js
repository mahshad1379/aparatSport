import { styled } from "styled-components";

export const CalenderBox = styled.div`
  padding: 10px 32px 10px 32px;
  border-radius: 8px;
  border: 1px solid #282a37;
  background: #1b1c26;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const CalenderDate = styled.button`
  all: unset;
  direction: rtl;
  text-align: center;
  font: 500 14px "yekanBakh";
  color: #F2F2F2;
  &:hover {
    color: #79c050;
  }
`;
