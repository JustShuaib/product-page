import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root{
  --white :hsl(0,0%,100%);
  --black : hsl(0, 0%, 0%);
 --pry-orange : hsl(26, 100%, 55%);
 --pry-pale-orange : hsl(25, 100%, 94%);
 --very-dark-blue:  hsl(220, 13%, 13%);
 --dark-grayish-blue: hsl(219, 9%, 45%);
 --grayish-blue: hsl(220, 14%, 75%);
 --light-grayish-blue: hsl(223, 64%, 98%);
--nav-bg : rgba(0,0,0,0.7);
}
 
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font: 1rem 'Kumbh Sans', sans-serif;
  }
`;

export default GlobalStyle;
