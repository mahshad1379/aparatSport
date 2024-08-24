import styled from "styled-components";

export const SlideshowStyle = styled.div`
  padding: 30px 0;
`;
export const Img = styled.img`
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }
`;
