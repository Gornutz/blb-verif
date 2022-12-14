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
        Join our Social Media pages to be in the loop.
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
    </div>  
  );
};

export default Home;
