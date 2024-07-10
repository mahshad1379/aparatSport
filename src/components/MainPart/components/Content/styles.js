import styled from "styled-components";

export const LinkIcon = styled.svg`
  padding: 8.25px 4.25px 8.25px 4.25px;
`;

export const DownloadBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Info = styled.div`
  font-family: YekanBakhMedium;
  font-size: 14px;
  // font-weight: 325;
  line-height: 24px;
  text-align: right;
  color: #a4a6bc;

  @media (max-width: 500px) {
    text-align: center;
    font-size: 12px;
  }
`;
export const Container = styled.div`
  margin-bottom: 40px;
`;
export const ContentContainer = styled.div`
  margin-bottom: 16px;
`;

export const ContentStyle = styled.div`
  margin-bottom: 8px;
`;

export const ContentHeader = styled.div`
  font-family: YekanBakhMedium;
  font-size: 14px;
  // font-weight: 325;
  line-height: 16px;
  text-align: right;
  color: #64ff00;

  @media (max-width: 500px) {
    text-align: center;
    font-size: 11px;
  }
`;

export const ContentText = styled.div`
  font: 800 24px 'yekanBakh';
  text-align: right;
  color: #ffffff;

  @media (max-width: 500px) {
    text-align: center;
    font-size: 18px;
  }
`;
