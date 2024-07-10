import styled from "styled-components";

export const DownloadBoxContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DownloadBoxTitleLogo = styled.div`
  padding: 4.82px 6.73px 4.83px 6.4px;
`;

export const DownloadBoxItem = styled.div`
  background: #11121a;
  max-width: 568px;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 2px solid #282a37;

  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const DownloadBoxTitleText = styled.div`
  text-align: right;
  font-family: YekanBakhheavy;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #ffffff;
`;

export const DownloadBoxTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
