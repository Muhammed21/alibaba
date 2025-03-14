import { ToggleProvider } from "@/_context/Toogle_Menu";
import { NextIntlClientProvider } from "next-intl";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Europe/Vienna"
      messages={pageProps.messages}
    >
      <ToggleProvider>
        <Component {...pageProps} />
      </ToggleProvider>
    </NextIntlClientProvider>
  );
}
