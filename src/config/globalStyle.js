import { styled } from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 1.5rem;
    box-sizing: border-box;

    @media (max-width: 600px) {
        padding: 0px;
    }
`;