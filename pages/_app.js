import "../styles/globals.css";
import { SessionContext, SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <SessionProvider>
    {getLayout(<Component {...pageProps} />)}
  </SessionProvider>;
}
