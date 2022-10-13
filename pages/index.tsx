import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from 'next/image'
import logo from '../public/images/logo.svg'
import styles from "../styles/home.module.scss";
import Link from 'next/link'

const Home: NextPage = () => {
  const [psuedoName, setPsuedoName] = useState("");
  const [discordName, setDiscordName] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [verifyUrl, setVerifyUrl] = useState("");
  const [showError, setShowError] = useState(false);

  const makeid = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const btnVerifyHandle = () => {
    if (psuedoName == "" || walletAddress == "") {
      setShowError(true);
      return;
    }
    if (verifyUrl == "") {
      setShowError(true);
    } else {
      setShowError(false);
    }

    var text = `I am a verified Blueberry %40blbprotocol early adopter
    Verification:${makeid(64)}
    verify.blueberry.garden`;

    var url = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(url, "_blank");
  };
  return (
    <div className={styles.container}>
    <Link href="https://www.blueberry.garden/home">
      <a className={styles.btnTakeHome}>Take me Home</a>
    </Link>
    <div className='flex justify-center'>
    <img
          src={"/images/logo.svg"}
          alt="blueberry logo"
          className={styles.logo}
        />
      </div>

      <h3 className={styles.title1}>
        Congratulations anon. You found Blueberry while still in stealth mode.
        Claim your spot by completing the steps below. And remember--the early
        bird gets the blueberries.
      </h3>

      <ul className={styles.alignLeft}>
        <li className="mx-[30px] my-[10px]">
          Join{" "}
          <a
            href="https://discord.com/invite/VJAPVjy5uk"
            className="text-[#00e186]"
          >
            Discord
          </a>{" "}
          group
        </li>
        <li className="mx-[30px] my-[10px]">
          Follow{" "}
          <a href="https://twitter.com/BLBprotocol/" className="text-[#00e186]">
            @BLBprotocol
          </a>{" "}
          on Twitter
        </li>
      </ul>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className={styles.form}
      >
        <input
          type="hidden"
          name="access_key"
          value="9ef9f0c7-b617-4f77-ba13-57e7f51c88b3"
        />
        <div className={styles.errors}>
          {showError && (
            <>
              {psuedoName == "" && <p>Please enter a twitter handle.</p>}
              {discordName == "" && <p>Please enter a Discord Name</p>}
              {walletAddress == "" && <p>Please enter a wallet address.</p>}
              {verifyUrl == "" && (
                <p>Please enter the tweet url for verification.</p>
              )}
            </>
          )}
        </div>
        Please do not change twitter handle and wallet address after generating
        verification tweet.
        <div className={styles.field}>
          <label>Twitter handle</label>
          <input
            type="text"
            required
            placeholder="@blbprotocol"
            name="psuedoName"
            id="psuedoName"
            onChange={(e) => setPsuedoName(e.target.value)}
            value={psuedoName}
          />
        </div>
        <div className={styles.field}>
          <label>Discord Username</label>
          <input 
            type="text"
            required
            placeholder="Name#0000"
            name="discordName"
            id="discordName"
            onChange={(e) => setDiscordName(e.target.value)}
            value={discordName}
            />
        </div>
        <div className={styles.field}>
          <label>Wallet address</label>

          <input
            type="text"
            required
            placeholder="0xEE4....890"
            name="walletAddress"
            id="walletAddress"
            onChange={(e) => setWalletAddress(e.target.value)}
            value={walletAddress}
          />
        </div>
        <button
          className={styles.btnTwitterShare}
          data-size="large"
          onClick={btnVerifyHandle}
        >
          Generate verification tweet
        </button>
        <div className={`${styles.field} mt-[2rem]`}>
          <label>Verification url</label>

          <input
            type="text"
            required
            placeholder="https:// of the tweet"
            name="validate"
            id="validate"
            onChange={(e) => setVerifyUrl(e.target.value)}
            value={verifyUrl}
          />
        </div>
      </form>
    </div>
  );
};

export default Home;
