import { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/home.module.scss";

const Home: NextPage = () => {
  const [psuedoName, setPsuedoName] = useState("");
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
      <div className="flex justify-center">
        <img
          src={"/images/logo.svg"}
          alt="canto logo"
          className={styles.logo}
        />
      </div>

      {/* <h1 className={styles.title}>Settlers of Blueberry</h1> */}

      <h3 className={styles.title1}>
        Congratulations anon. You found Blueberry while still in stealth mode.
        Claim your spot by completing the steps below. And remember--the early
        bird gets the blueberries.
      </h3>

      {/* <p className={styles.alignLeft}>
        <span className="font-semibold">
          The goals of Settlers are as follows:
        </span>
      </p> */}

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
          value="1110f8e5-d278-4698-aeca-0c0b52c9a0c4"
        />
        <div className={styles.errors}>
          {showError && (
            <>
              {psuedoName == "" && <p>Please enter a twitter handle.</p>}
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
          <label>twitter_handle</label>
          <input
            type="text"
            required
            placeholder="ninja"
            name="psuedoName"
            id="psuedoName"
            onChange={(e) => setPsuedoName(e.target.value)}
            value={psuedoName}
          />
        </div>
        <div className={styles.field}>
          <label>wallet_address</label>

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
          <label>verification_url</label>

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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;