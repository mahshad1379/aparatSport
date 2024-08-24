import styled from "styled-components";

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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

    @media (max-width: 361px) {
    margin: 5px 5px 0px 5px;
`;


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

  @media (max-width: 361px) {
    padding: 8px 16px 8px 16px;
  }
`;
export const ProfileText = styled.span`
  font: 800 12px 'yekanBakh';
  line-height: 16px;
  text-align: center;
  color: #78c248;
`;

export const Menu = styled.div `
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;

  @media (max-width: 361px) {
    display: none;
  }
`;

export const MenuItem = styled.div `
  display: block;
  font: 700 12px 'yekanBakh';
  line-height: 16px;
  text-align: center;
  color: #ffffff;
`;

export const MenuFrame3 = styled.div `
  gap: 2px;
  display: flex;
  align-items: center;

  @media (max-width: 361px) {
    display: none;
  }
`;

export const MenuFrame3Text = styled.div `
  font: 700 12px 'yekanBakh';
  line-height: 16px;
  text-align: left;
  color: #78c248;
`;

