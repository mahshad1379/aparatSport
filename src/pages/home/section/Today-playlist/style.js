import { styled } from "styled-components";
import { FlexRow, FlexCol, FontDetail } from "../../../../config/globalStyle";

export const SectionContainer = styled.div`
  ${FlexCol}
  gap:20px;
  margin: 0 0 40px 0;
`;

export const CardContainer = styled.div``;

export const CardTitle = styled.div`
  font: 500 24px "yekanBakh";
  ${FontDetail};
  color: #ffffff;
`;

export const CardBoxContainer = styled.div`
  ${FlexRow};
  gap: 16px;
  flex-wrap: nowrap;
  overflow: scroll;
  scrollbar-width: none;
`;
