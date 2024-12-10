import styled from "styled-components";
import { DisplayFlex, FlexCol, FlexRow } from "../../../config/globalStyle";

export const RightNavStyle = styled.div`
  @media (max-width: 431px) {
    ${FlexCol}
    align-items: self-start;
    direction: ltr;
    }
  }
`;

export const HeaderMenu = styled.div`
  @media (max-width: 431px) {
    display: ${(props) => (props.open ? "block" : "none")};
    position: relative;
  }
`;
export const BurgerMenu = styled.div`
  ${FlexRow}
  gap: 32px;
  align-items: center;
  @media (max-width: 431px) {
    position: absolute;
    top: 26px;
    ${FlexCol}
    background-color: #000000;
    opacity: 70%;
    padding: 15px;
    width: max-content;
    text-align: right;
    align-items: end;
    gap: 20px;
  }
`;

export const MenuItem = styled.div`
  display: block;
  > .menuItem_link {
    font: 700 12px "yekanBakh";
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
  }
`;

export const MenuFrame3 = styled.div`
  ${DisplayFlex}
  gap: 2px;
  align-items: center;
`;

export const MenuFrame3Text = styled.div`
  ${FlexRow}
  gap:3px;
  align-items: center;
  > .MenuFrame3Text {
    font: 700 12px "yekanBakh";
    line-height: 16px;
    text-align: center;
    color: #78C249;
    text-decoration: none;
  }
`;
