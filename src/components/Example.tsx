import React from "react"
import SEO from "./SEO"
import Html from "./Html"
import styles from "./Example.module.css"

interface Path {
  title: string
  path: string
}

interface Code {
  fileName: string
  code: string
}

interface Props {
  title: string
  description: string
  version: "0.1.0"
  html: string
  prev: Path | null
  next: Path | null
  replitLink: string
}

const Example: React.FC<Props> = ({
  title,
  version,
  description,
  html,
  prev,
  next,
  replitLink,
}) => {
  return (
    <div className={styles.component}>
      <SEO
        title={`${title} | sCrypt by Example | ${version}`}
        description={description}
      />
      <div className={styles.content}>
        <h2>{title}</h2>

        <Html html={html} />

        <div className={styles.prevNext}>
          {prev && (
            <a href={prev.path}>
              {`< `}
              {prev.title}
            </a>
          )}
          {next && (
            <a href={next.path}>
              {next.title}
              {` >`}
            </a>
          )}
        </div>

        {replitLink && <h3>Try on Replit</h3>}
        {replitLink && (
          <iframe frameBorder="0" width="100%" height="500px" src={replitLink}></iframe>
        )}
      </div>
    </div>
  )
}

export default Example
