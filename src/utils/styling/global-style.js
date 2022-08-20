import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: ${theme.font.family.main};
  line-height: ${theme.font.lineHeight};
  letter-spacing: ${theme.font.letterSpacing};
  background-color: ${theme.colors.bg.main};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root, body {
  min-height: 100vh 
}
`;
