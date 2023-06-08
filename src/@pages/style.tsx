import styled from 'styled-components';

export const Button = styled.button`
  width: 15rem;
  height: 10rem;

  border-radius: 5rem;

  background-color: ${({ theme }) => theme.colors.BLUE};
`;
