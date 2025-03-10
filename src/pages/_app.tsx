import { ToggleProvider } from "@/_context/Toogle_Menu";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToggleProvider>
      <Component {...pageProps} />
    </ToggleProvider>
  );
}
