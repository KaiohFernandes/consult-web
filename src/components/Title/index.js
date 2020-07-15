import styled from 'styled-components';

export default styled.h1`
  font-family: 'Roboto';
  font-size: 60px;
  font-weight: 700;
  color: ${props => props.white ? '#FFFFFF' : '#222'};
`;
