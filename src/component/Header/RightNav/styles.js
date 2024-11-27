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
    // &:active{
    //     transition: all 0.2s ease-out;
    // }
    position: relative;
  }
`;
export const BurgerMenu = styled.div`
  ${FlexRow}
  gap: 32px;
  align-items: center;
  @media (max-width: 431px) {
  //  &:active{
  //       transition: all 0.2s ease-out;
  //   }
    position: absolute;
    top: 26px;
    ${FlexCol}
    background-color: black;
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
  font: 700 12px "yekanBakh";
  line-height: 16px;
  text-align: left;
  color: #78c248;
`;
