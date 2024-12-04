import styled from "styled-components";
import { DisplayFlex, FlexRow } from "../../../../../../config/globalStyle";

export const DownloadBoxContent = styled.div`
${FlexRow}
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

  @media (max-width: 361px) {
  }
`;

export const DownloadBoxTitleText = styled.div`
  text-align: right;
  font: 800 16px 'yekanBakh';
  line-height: 24px;
  text-align: right;
  color: #ffffff;
`;

export const DownloadBoxTitle = styled.div`
${DisplayFlex}
  align-items: center;
  gap: 8px;
`;
