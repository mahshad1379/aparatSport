import { styled } from "styled-components";
import { FlexRow, FlexCol } from "../../../../config/globalStyle";

export const FavSportContainer = styled.div`
  ${FlexCol}
  gap:20px;
  margin: 0 0 40px 0;
`;

export const FavSportTitle = styled.div`
  font: 500 24px "yekanBakh";
  line-height: 24px;
  text-align: right;
  color: #FFFFFF;
`;

export const FavSportBoxContainer = styled.div`
  ${FlexRow}
  gap:16px;
  flex-wrap: nowrap;
  overflow: scroll;
  scrollbar-width: none;
`;
