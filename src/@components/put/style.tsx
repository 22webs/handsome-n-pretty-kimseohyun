import styled from 'styled-components';

export const FollowerWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;

  width: 50rem;
  margin: 0 2rem;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;

  width: 50rem;

  ${({ theme }) => theme.fonts.title}
`;

export const NameBox = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 2rem;
  padding: 1rem;
  margin: 1rem;

  border-radius: 3rem;

  background-color: ${({ theme }) => theme.colors.skyblue};
  ${({ theme }) => theme.fonts.text}
`;
