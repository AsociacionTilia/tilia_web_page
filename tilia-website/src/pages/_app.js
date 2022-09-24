import "../styles/globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../styles/themes/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { LenguageContextProvider } from "../context/LanguageContext";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <LenguageContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </LenguageContextProvider>
    </CacheProvider>
  );
}

export default MyApp;
