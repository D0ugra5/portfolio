import type { AppProps } from "next/app";

import { QueryClientProvider } from "react-query";
import { theme as THEME } from "../../styles/theme/index";
import { queryClient } from "@/modules/service/query-react";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={THEME}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
