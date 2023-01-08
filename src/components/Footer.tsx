import React from "react"
import styles from "./Footer.module.css"
import scrypt from "./scrypt.png"
import youTube from "./youtube.svg"
import telegram from "./telegram.png"
import discord from "./discord.png"
import github from "./github.png"
import slack from "./slack.png"
import medium from "./medium.png"

function Footer() {
  return (
    <div className={styles.component}>
      <div className={styles.row}>
        <img src={scrypt} alt="sCrypt" className={styles.scrypt} />
        <a href="https://scrypt.io/" target="__blank">
          sCrypt
        </a>
      </div>
      <div className={styles.social}>
        <div className={styles.row}>
          <img src={github} alt="github" className={styles.github} />
          <a href="https://github.com/sCrypt-Inc" target="__blank">
            GitHub
          </a>
        </div>
        <div className={styles.row}>
          <img src={medium} alt="medium" className={styles.medium} />
          <a href="https://medium.com/@xiaohuiliu" target="__blank">
            Medium
          </a>
        </div>
        <div className={styles.row}>
          <img src={slack} alt="slack" className={styles.slack} />
          <a
            href="https://join.slack.com/t/scryptworkspace/shared_invite/enQtNzQ1OTMyNDk1ODU3LTJmYjE5MGNmNDZhYmYxZWM4ZGY2MTczM2NiNTIxYmFhNTVjNjE5MGYwY2UwNDYxMTQyNGU2NmFkNTY5MmI1MWM"
            target="__blank"
          >
            Slack
          </a>
        </div>
        <div className={styles.row}>
          <img src={telegram} alt="telegram" className={styles.telegram} />
          <a href="https://t.me/joinchat/GwaRAxKT16JjXyHt5PuhHw" target="__blank">
            Telegram
          </a>
        </div>
      </div>
      <div className={styles.row}>
        <a href="mailto:contact@support@scrypt.io">support@scrypt.io</a>
      </div>
      <div className={styles.row}>
        <a
          href="https://github.com/sCrypt-Inc/scrypt-ts-by-example.github.io"
          target="__blank"
        >
          source
        </a>
        <div className={styles.bar}>|</div>
        <a
          href="https://github.com/sCrypt-Inc/scrypt-ts-by-example.github.io/blob/gh-pages/LICENSE"
          target="__blank"
        >
          license
        </a>
      </div>
    </div>
  )
}

export default Footer
