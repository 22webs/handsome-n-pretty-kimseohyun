import { DefaultTheme } from 'styled-components';

const colors = {
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
  title: FONT({ weight: 400, size: 8, lineHeight: 5 }),
  text: FONT({ weight: 400, size: 5, lineHeight: 5 }),
  button: FONT({ weight: 400, size: 4.5, lineHeight: 5 }),
};

export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
