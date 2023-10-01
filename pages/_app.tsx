import type { AppProps } from "next/app";


import { NextUIProvider, createTheme } from "@nextui-org/react";

import '../styles/main.scss'


const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {}
  }
})

function App({Component, pageProps}: AppProps){
  return (
    <NextUIProvider theme={ darkTheme }>
      <Component {...pageProps}/>
    </NextUIProvider>
  );
}

export default App