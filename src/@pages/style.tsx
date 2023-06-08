import styled from 'styled-components';

export const Button = styled.button`
  width: 20rem;
  height: 10rem;
  margin: 0 1rem;

  border-radius: 5rem;

  background-color: ${({ theme }) => theme.colors.BLUE};
`;
