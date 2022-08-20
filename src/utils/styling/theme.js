const _colors = {
  white: "#fff",
  black: "#000",

  light_grey: "#fbfbfb",
  grey: "#666666",

  ebony_clay: "#232a34"
};

export const theme = {
  colors: {
    bg: {
      main: _colors.white,
      alt: _colors.ebony_clay,
      contrast: _colors.light_grey
    },
    text: {
      main: _colors.black,
      alt: _colors.grey
    },
  },

  font: {
    family: {
      main: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",sans-serif'
    },
    lineHeight: "1.5",
    letterSpacing: "-0.01em",
    weight: {
      thin: "300",
      regular: "400",
      medium: "600",
      bold: "700",
    },
  },
  screens: {
    lt_xs: '@media (max-width: 319px)',
    gt_xs: '@media (min-width: 320px)',
    lt_sm: '@media (max-width: 480px)',
    gt_sm: '@media (min-width: 481px)', 
    lt_md: '@media (max-width: 768px)',
    gt_md: '@media (min-width: 769px)',
    lt_lg: '@media (max-width: 1024px)',
    gt_lg: '@media (min-width: 1025px)',
  }
};