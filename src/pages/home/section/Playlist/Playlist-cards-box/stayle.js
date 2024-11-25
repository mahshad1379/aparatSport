import { styled } from "styled-components";
import { FlexCol, FlexRow, FontDetail } from "../../../../../config/globalStyle";

export const PlaylistContainer = styled.div`
${FlexCol}
  gap:20px;
  margin: 0 0 40px 0;
`;

export const PlaylistContentContainer = styled.div`
${FlexCol}
  gap:20px
`;

export const PlaylistTitle = styled.div`
  font: 500 24px "yekanBakh";
  ${FontDetail}
  color: #FFFFFF;
`;

export const CalenderContainer = styled.div`
  ${FlexRow}
  gap: 8px;
`;

export const PlaylistCardContainer = styled.div`
 ${FlexRow}
  gap:16px;
  flex-wrap: nowrap;
  overflow: scroll;
  scrollbar-width: none;
`;
