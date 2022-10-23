import dynamic from "next/dynamic";
import { SpotifyProvider } from "../context/context";
import "../styles/globals.css";
require("@solana/wallet-adapter-react-ui/styles.css");

function MyApp({ Component, pageProps }) {
  const WalletConnectionProvider = dynamic(
    () => import("../context/WalletConnectionProvider"),
    {
      ssr: false,
    }
  );
  return (
    <WalletConnectionProvider>
      <SpotifyProvider>
        <Component {...pageProps} />
      </SpotifyProvider>
    </WalletConnectionProvider>
  );
}

export default MyApp;
