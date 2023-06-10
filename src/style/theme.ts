import { DefaultTheme } from 'styled-components';

const colors = {
  skyblue: '#E9F3FF',
  blue: '#A6C7EF',
  grey: '#B4B4B4',
  black: '#000000',
  MAIN: '#FCAF16',
  WHITEYELLOW: '#FCF9EB',
  GREEM: '#BAEAAE',
  BLUE: '#D0E9FF',
  DARKPINK: '#F8C5C2',
  DARKYELLOW: '#FBC86A',
  DARKBLUE: '#A7D5FF',
  DEEPBLUE: '#6EB1E1',
};

export type ColorsTypes = typeof colors;

interface Font {
  weight: number;
  size: number;
  lineHeight: number;
}

function FONT({ weight, size, lineHeight }: Font): string {
  return `
    font-family:  "KOTRAHOPE";
    font-weight : ${weight};
    font-size : ${size}rem;
    line-height : ${lineHeight}rem;
    `;
}

const fonts = {
  title: FONT({ weight: 400, size: 3, lineHeight: 5 }),
  text: FONT({ weight: 400, size: 1, lineHeight: 5 }),
  button: FONT({ weight: 400, size: 2, lineHeight: 5 }),
};

export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
