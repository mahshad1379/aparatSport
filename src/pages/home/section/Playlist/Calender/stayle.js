import { styled } from "styled-components";
import { FontDetail } from "../../../../../config/globalStyle";

export const CalenderBox = styled.div`
  padding: 10px 32px 10px 32px;
  border-radius: 8px;
  border: 1px solid #282a37;
  background: #1b1c26;
  align-items: center;
  justify-content: center;
  display: flex;
  @media (max-width: 741px) {
    padding: 5px 16px;
  }
    @media (max-width: 361px) {
    padding: 0px 4px;
  }
`;

export const CalenderDate = styled.button`
  all: unset;
  direction: rtl;
  text-align: center;
  font: 500 14px "yekanBakh";
  ${FontDetail}
  color: #F2F2F2;
  &:hover {
    color: #79c050;
  }
  @media (max-width: 741px) {
    font: 300 10px "yekanBakh";
  }
    @media (max-width: 361px) {
    font: 300 6px "yekanBakh";
  }
`;
