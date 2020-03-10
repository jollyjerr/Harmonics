import { createGlobalStyle } from "styled-components";

interface TColors {
    [key: string]: string;
}

export const colors: TColors = {
    background: "#50555E",
    highlight: "#3B9989",
    dull: "#EFE097",
    pop: "#BF4F16",
    calm: "#384C37",
};

const baseFontSize = 16;
const baseFontSizePercent = (16 / baseFontSize) * 100;
export const font = {
    sizes: {
        base: baseFontSize,
        basePixels: `${baseFontSize}px`,
        basePercent: `${baseFontSizePercent}%`,
    },
    families: {
        spartan: "'Nunito', sans-serif",
    },
    helpers: {
        convertPixelsToRems: (value: number): string => `${value / baseFontSize}rem`,
    },
};

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background: ${colors.background};
    color: ${colors.highlight};
    font-family: ${font.families.spartan};
    font-size: ${font.sizes.basePercent};
  }
`;
