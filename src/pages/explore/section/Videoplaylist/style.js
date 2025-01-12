// In your style.js or wherever you're managing styles
import styled from "styled-components";

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 100px; 
  align-items: center;
  gap:50px;
`;

export const ButtonContainer = styled.div`
padding-top:100px;
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px; 
  z-index: 1000;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  color: #333;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;
