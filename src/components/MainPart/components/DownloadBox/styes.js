import styled from "styled-components";

export const DownloadBoxContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify: space-between;
`;

export const DownloadBoxTitleLogo = styled.div`
  padding: 4.82px 6.73px 4.83px 6.4px;
  gap: 0px;
  opacity: 0px;
`;

export const DownloadBoxItem = styled.div`
  background: #11121a;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 2px solid #282a37;

  @media (max-width: 500px) {
    width: 328px;
  }
`;

export const DownloadBoxTitleText = styled.div`
  text-align: right;
  font-family: YekanBakhheavy;
  font-size: 16px;
  // font-weight: 600;
  line-height: 24px;
  text-align: right;
  color: #ffffff;
`;

export const DownloadBoxTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
