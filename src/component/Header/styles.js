import styled from "styled-components";
import { DisplayFlex, FlexRow } from "../../config/globalStyle";

export const HeaderStyle = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  border: 1px;
  background: ${(props) =>
    props.color
      ? "#000000"
      : "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)"};
  }
`;

export const HeaderContainer = styled.div`
${FlexRow}
  align-items: center;
  justify-content: space-between;

    @media (max-width: 431px) {
    margin: 5px 5px 0px 5px;
`;

export const LeftPart = styled.div`
  ${FlexRow}
  gap: 14px;
  align-items:center;

  @media (max-width: 431px) {
    align-items: unset;
  }
`;

export const Profile = styled.div`
  ${DisplayFlex}
  padding: 12px 24px 12px 24px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #78c248;
  background: none;
  height: 100%;


  @media (max-width: 431px) {
    padding: 8px 16px 8px 16px;
  }
`;
export const ProfileText = styled.span`
  font: 800 12px "yekanBakh";
  line-height: 16px;
  text-align: center;
  color: #78c248;
`;

export const HeaderMenu = styled.div`
  ${FlexRow}
  gap: 32px;
  align-items: center;

  @media (max-width: 431px) {
    display: none;
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
  @media (max-width: 431px) {
    display: none;
  }
`;

export const MenuFrame3 = styled.div`
  ${DisplayFlex}
  gap: 2px;
  align-items: center;

  @media (max-width: 431px) {
    display: none;
  }
`;

export const MenuFrame3Text = styled.div`
  font: 700 12px "yekanBakh";
  line-height: 16px;
  color: #78c248;

  @media (max-width: 431px) {
    display: none;
  }
`;

export const Hamberger = styled.div`
  // display: none;
  
  @media (max-width: 431px) {
    display: block;
  }
`;
