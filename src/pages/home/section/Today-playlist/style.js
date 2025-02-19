import { styled } from "styled-components";
import { FlexRow, FlexCol } from "../../../../config/globalStyle";

export const SectionContainer = styled.div`
  ${FlexCol}
  gap:20px;
  margin: 0 0 40px 0;
  scroll-margin-top: 120px
`;

export const CardContainer = styled.div``;

export const CardTitle = styled.div`
  font: 500 24px "yekanBakh";
  line-height: 24px;
  text-align: right;
  color: #ffffff;
`;

export const CardBoxContainer = styled.div`
  ${FlexRow};
  gap: 16px;
  flex-wrap: nowrap;
  overflow: scroll;
  scrollbar-width: none;
`;
