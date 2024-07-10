import styled from "styled-components";

export const MainContainer = styled.div `
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  padding-top: 0;
  box-sizing: border-box;
  padding: 1.5rem;
  
    @media (max-width: 360px) {
        padding: 0px;
    }
`;

export const HeaderContainer = styled.div `
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const HeaderStyle = styled.div `
  position: fixed;
  z-index: 1;
  width: 100%;
  border: 1px;
  background: ${ (props) => props.color
  ? "#000000"
  : "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)"};
`;

export const RightPart = styled.div ``;

export const LeftPart = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
`;

export const Profile = styled.div `
  display: flex;
  padding: 12px 24px 12px 24px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #78c248;
  background: none;

  @media (max-width: 360px) {
    width: 106px;
    height: 32px;
    padding: 8px 16px 8px 16px;
  }
`;

export const ProfileText = styled.span `
  font-family: YekanBakhheavy;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #78c248;
`;

export const Menu = styled.div `
  display: flex;
  flex-direction: row;
  width: 403px;
  height: 20px;
  gap: 32px;
  align-items: center;
`;

export const MenuItem = styled.div `
  display: block;
  height: 16px;
  font-family: YekanBakhbold;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;

  @media (max-width: 360px) {
    display: none;
  }
`;

export const MenuFrame3 = styled.div `
  width: 70px;
  height: 16px;
  gap: 2px;
  display: flex;
  align-items: center;

  @media (max-width: 360px) {
    display: none;
  }
`;

export const MenuFrame3Text = styled.div `
  width: 52px;
  height: 16px;
  font-family: YekanBakhbold;
  font-size: 12px;
  // font-weight: 450;
  line-height: 16px;
  text-align: left;
  color: #78c248;
`;

export const Search = styled.div `
  padding: 2.29px 2.29px 2.32px 2.29px;
`;
