import styled from 'styled-components';

export const Button = styled.button`
  width: 25rem;
  height: 5rem;

  margin: 1rem 0;

  border-radius: 10rem;

  background-color: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.fonts.button};
`;

export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 10rem;

  ${({ theme }) => theme.fonts.title};
`;

export const Input = styled.input`
  width: 25rem;
  height: 5rem;

  padding: 2rem;
  margin: 1rem 0;

  border-radius: 10rem;

  background-color: ${({ theme }) => theme.colors.skyblue};
`;
