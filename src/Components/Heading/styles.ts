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


export const Container = styled("h1", {
  cursor: "pointer",
  borderRadius: "$1",
  mt: "$5",
  transition: "background 300ms linear",

  variants: {
    size: {
      "1": {
        padding: "$1",
      },
      "2": {
        padding: "$2",
      },
      "3": {
        padding: "$3",
      },
      "4": {
        padding: "$4",
      },
      "5": {
        padding: "$5",
      },
      "6": {
        padding: "$6",
      },
      "7": {
        padding: "$7",
      },
      "8": {
        padding: "$8",
      },
      "9": {
        padding: "$9",
      },
      "10": {
        padding: "$10",
      },
    },
    fontSize: {
      "1": {
        fontSize: "$1",
      },
      "2": {
        fontSize: "$2",
      },
      "3": {
        fontSize: "$3",
      },
      "4": {
        fontSize: "$4",
      },
      "5": {
        fontSize: "$5",
      },
      "6": {
        fontSize: "$6",
      },
      "7": {
        fontSize: "$7",
      },
      "8": {
        fontSize: "$8",
      },
      "9": {
        fontSize: "$9",
      },
      "10": {
        fontSize: "$10",
      },
    },
    variant: {
      purple: {
        backgroundColor: "$purple3",
        color: "$purple12",
        "@bp1": {
          backgroundColor: "red",
        },
      },
      gray: {
        backgroundColor: "$gray3",
        color: "$gray12",
      },
    },
    outlined: {
      true: {
        border: "5px solid",
        transition: "all 300ms ease-in-out",
      },
    },
  },
  //Aplicar diferentes estilizações css dependendo das variantes utilizadas
  compoundVariants: [
    {
      variant: "gray",
      outlined: "true",
      css: {
        borderColor: "$gray7",
      },
    },
    {
      variant: "purple",
      outlined: "true",
      css: {
        borderColor: "$purple7",
      },
    },
  ],

  //Estilizações padrões
  defaultVariants: {
    variant: "gray",
  },
});
