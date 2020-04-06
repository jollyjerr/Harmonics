import { createMuiTheme } from '@material-ui/core/styles'

declare module '@material-ui/core/styles/createMuiTheme' {
    interface ThemeOptions {
        themeName?: string
    }
}

const palette = {
    primary: {
        main: "#fff",
        dark: "#26282b",
        light: "#90b8f8",
        contrastText: "#fffdf9"
    },
    background: { default: "#353941" },
}

const typography = {
    fontFamily: '"Nunito", "Helvetica","Arial",sans-serif',
    fontSize: 16,
    h1: {
        fontSize: "1.7rem",
    },
    h2: {
        fontSize: "1.2rem",
    },
    h3: {
        fontSize: "1rem",
    },
}

const themeName = 'Harmonics'

export default createMuiTheme({ palette, typography, themeName })



/**
 * colors:
    background: "#353941",
    dull: "#26282b",
    highlight: "#fffdf9",
    pop: "#90b8f8",
    calm: "#5f85db",

 * font props:
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
 */
