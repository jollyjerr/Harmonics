import styled, { createGlobalStyle } from "styled-components";

import Container from "@material-ui/core/Container";

interface TColors {
    [key: string]: string;
}

export const colors: TColors = {
    background: "#353941",
    dull: "#26282b",
    highlight: "#fffdf9",
    pop: "#90b8f8",
    calm: "#5f85db",
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
        nunito: "'Nunito', sans-serif",
    },
    helpers: {
        convertPixelsToRems: (value: number): string => `${value / baseFontSize}rem`,
    },
};

export const Shell = styled("div")`
    padding: 0 ${font.helpers.convertPixelsToRems(10)};
` as typeof Container;

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background: ${colors.background};
    color: ${colors.highlight};
    font-family: ${font.families.nunito};
    font-size: ${font.sizes.basePercent};
  }
`;
