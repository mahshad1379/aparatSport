import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 7px 152px 7px 152px;
  border: 1px;
  justify-content: space-between;
  background: #1b1c26;
  border-top: 1px solid #282a37;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const RightPart = styled.div`
  display: flex;
  flex-direction: row;
  width: 507.45px;
  height: 18.26px;
  gap: 55px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftPart = styled.div`
  display: flex;
  flex-direction: row;
  width: 142px;
  height: 32px;
  gap: 23px;
`;

export const LiveBrodcast = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Item = styled.div`
  font: 500 13px 'yekanBakh';
  line-height: 16px;
  letter-spacing: 0.4000000059604645px;
  text-align: center;
  margin-left: 10px;
  color: ${(props) => (props.green ? "#78C249" : "#F2F2F2")};
`;
