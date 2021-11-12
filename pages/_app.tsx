import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import {ethers} from 'ethers';

function getLibrary(provider: any) {
  return ethers.getDefaultProvider();
}

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Component {...pageProps} />
  </Web3ReactProvider>
  );
}
export default MyApp;
