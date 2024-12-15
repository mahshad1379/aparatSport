import { styled } from "styled-components";
import { FlexCol } from "../../../../config/globalStyle";

export const SectionContainer = styled.div`
  ${FlexCol}
  gap:20px;
  margin: 0 0 40px 0;
`;

export const CardContainer = styled.div``;

export const CardTitle = styled.div`
  font: 500 24px "yekanBakh";
  $line-height: 24px;
  text-align: right;
  color: #ffffff;
`;

export const CardBoxContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(4,1fr);
  gap:16px;
  overflow: hidden;
  transition: max-height 0.3s;
  max-height: ${(props) => props.collapsed ? "calc(296px * 1)" :  "none"}
`;

export const ShoMoreButton = styled.button`
align-self: center;
color:#78C249;
background-color:unset;
border: 1.5px solid #78C249;
padding: 12px 16px 12px 16px;
gap: 8px;
border-radius: 8px;
font: 700 14px "yekanBakh";
text-align: center;
box-sizing: border-box;
`;

