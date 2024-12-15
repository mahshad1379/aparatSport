import { styled } from "styled-components";
import { FlexCol, FlexRow } from "../../../../../config/globalStyle";

export const PlaylistContainer = styled.div`
${FlexCol}
  gap:20px;
  margin: 0 0 40px 0;
  scroll-margin-top: 120px
`;

export const PlaylistContentContainer = styled.div`
${FlexCol}
  gap:20px
`;

export const PlaylistTitle = styled.div`
  font: 500 24px "yekanBakh";
  line-height: 24px;
  text-align: right;
  color: #FFFFFF;
`;

export const CalenderContainer = styled.div`
  ${FlexRow}
  gap: 8px;
  flex-wrap: nowrap;
  overflow: scroll;
  scrollbar-width: none;
`;

export const PlaylistCardContainer = styled.div`
 ${FlexRow}
  gap:16px;
  flex-wrap: nowrap;
  overflow: scroll;
  scrollbar-width: none;
`;
