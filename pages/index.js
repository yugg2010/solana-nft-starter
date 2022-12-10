import React, { useEffect } from "react";
import CandyMachine from "../components/CandyMachine";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

// Constants
const TWITTER_HANDLE = "yugg2010";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Home = () => {
  const wallet = useWallet();

  // Actions
  const renderNotConnectedContainer = () => (
    <div>
      <img src="https://gateway.ipfscdn.io/ipfs/bafybeibtaiibm27ouhmukpr2dgsygu3g3qig5cj4jattic5toq7cmhwpie/?filename=pal.png" />
      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>
    </div>
  );

  useEffect(() => {
    // Update the document title using the browser API
    console.log(`Your wallet ${wallet.publicKey} is connected.`);
  });

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">Chinese Paladin: Sword and Fairy NFT Drop</p>
          <p className="sub-text">NFT drop machine with fair mint</p>
          {/* Render your connect to wallet button right here */}
          {wallet.publicKey ? (
            <CandyMachine walletAddress={wallet} />
          ) : (
            renderNotConnectedContainer()
          )}
        </div>
        <div className="footer-container">
          <img
            alt="Twitter Logo"
            className="twitter-logo"
            src="twitter-logo.svg"
          />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
