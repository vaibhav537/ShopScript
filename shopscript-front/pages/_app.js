import { CartContentProvider } from "@/components/CartContext";
import { createGlobalStyle } from "styled-components";
import { Comfortaa } from "next/font/google";

const GlobalStyles = createGlobalStyle`
  body{
    background-color: #ededde;
    padding: 0;  
    margin: 0;
  }
`;

const inter = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContentProvider>
        <div className={inter.className}>
          <Component {...pageProps} />
        </div>
      </CartContentProvider>
    </>
  );
}
