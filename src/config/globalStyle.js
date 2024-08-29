import { styled , css } from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    padding: 1.5rem;
    box-sizing: border-box;

    @media (max-width: 751px) {
        padding: 0px;
    }
`;

export const FlexRow = css`
    display: flex;
    flex-direction: row;
`;

export const FlexCol = css`
    display: flex;
    flex-direction: column;
`;

export const DisplayFlex = css`
    display: flex;
`;

export const PosRelative = css`
    position: relative;
`;

export const PosAbsolute = css`
    position: absolute;
`;
