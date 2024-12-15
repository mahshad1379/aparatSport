import { styled } from "styled-components";
import { FlexRow, FlexCol } from "../../../../config/globalStyle";

export const FavTeamContainer = styled.div`
  ${FlexCol}
  gap:20px;
`;

export const FavTeamTitle = styled.div`
  font: 500 24px "yekanBakh";
  line-height: 24px;
  text-align: right;
  color: #FFFFFF;
`;

export const FavTeamBoxContainer = styled.div`
  ${FlexRow}
  gap:16px;
  flex-wrap: nowrap;
  overflow: scroll;
  scrollbar-width: none;
`;
