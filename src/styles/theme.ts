import { createStitches, createTheme } from "@stitches/react";
import { gray, purple, grayDark, purpleDark } from "@radix-ui/colors";
import type * as Stitches from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...purple,
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "30px",
      7: "35px",
      8: "40px",
      9: "45px",
      10: "50px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
      4: "17px",
      5: "19px",
      6: "21px",
      7: "23px",
      8: "25px",
      9: "27px",
      10: "29px",
    },
    fonts: {
      untitled: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: "10px",
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    bp1: "(max-width: 640px)",
    bp2: "(max-width: 768px)",
    bp3: "(max-width: 1024px)",
  },
  utils: {
    mt: (value: Stitches.ScaleValue<"space">) => ({
      marginTop: value,
    }),
  },
  //prefix: string,
  //themeMap: object,
});

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...purpleDark,
  },
});
