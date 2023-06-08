import styled from 'styled-components';

export const GetWrapper = styled.section`
  display: flex;
`;

export const FollowerWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;

  width: 50rem;
  margin: 0 2rem;

  ${({ theme }) => theme.fonts.title}
`;
