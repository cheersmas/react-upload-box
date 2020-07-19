import styled from 'styled-components';

export const StyledAnnotation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
  & svg {
    height: 20px;
    width: 20px;
    padding-bottom: 10px;
    fill: #134074;
    &:hover {
      fill: #8DA9C4
    }
  }
  
  & img {
    padding-top: 10px;
  }
  
`;

export const StyledIconContainer = styled.div`
  
`;