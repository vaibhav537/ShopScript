import { CartContentProvider } from "@/components/CartContext";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
  body{
    font-family: 'Comfortaa', cursive;
    background-color: #ededde;
    padding: 0;  
    margin: 0;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContentProvider>
        <div>
          <Component {...pageProps} />
        </div>
      </CartContentProvider>
    </>
  );
}
