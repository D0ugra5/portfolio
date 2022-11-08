import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme as THEME } from "../../styles/theme/index";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={THEME}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
