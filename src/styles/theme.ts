import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  colors: {
    background: "#000",
    border: "#2F3336",
  },

  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto",
  },

  config,
  styles: {
    global: {
      body: {
        background: "background",
      },
    },
  },
});
