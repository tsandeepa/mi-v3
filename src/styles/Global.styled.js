import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   body{
      background: #ccc;
      background:${({ theme }) => theme.bodyBG};
      color: ${({ theme }) => theme.textColorPrimary};
   }
   .flex-gap-15{
      display: flex;
      gap: 15px;
   }
   

`

export default GlobalStyles