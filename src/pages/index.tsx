import React from "react"
import SEO from "../components/SEO"
import styles from "./index.module.css"
import youTube from "../components/youtube.png"

interface Route {
  path: string
  title: string
}

const SCRYPT_ROUTES: Route[] = [
  {
    path: "hello-world",
    title: "Hello World",
  },
  {
    path: "variable-declarations",
    title: "Variable Declarations",
  },
  {
    path: "properties",
    title: "Properties",
  },
  {
    path: "constructor",
    title: "Constructor",
  },
  {
    path: "methods",
    title: "Methods",
  },
  {
    path: "basic-types",
    title: "Basic Types",
  },
  {
    path: "number-type",
    title: "Number Type",
  },
  {
    path: "array-types",
    title: "Array Types",
  },
  {
    path: "user-defined-types",
    title: "User-defined Types",
  },
  {
    path: "domain-types",
    title: "Domain Types",
  },
  {
    path: "for-loop",
    title: "For-loop",
  },
  {
    path: "return",
    title: "Return Statement",
  },
  {
    path: "builtin-functions",
    title: "Built-in Functions",
  },
  {
    path: "console-log",
    title: "Console logging",
  },
  {
    path: "operators",
    title: "Operators",
  },
  {
    path: "script-context",
    title: "ScriptContext",
  },
  {
    path: "state",
    title: "State",
  },
  {
    path: "enforce-recipient",
    title: "Enforce Recipient",
  },
  {
    path: "enforce-op-return",
    title: "Enforce OP_RETURN Outputs",
  },
  {
    path: "hashed-map",
    title: "HashedMap",
  },
  {
    path: "hashed-set",
    title: "HashedSet",
  },
]

const APP_ROUTES: Route[] = [
  {
    path: "p2pkh",
    title: "Pay to Public Key Hash (P2PKH)",
  },
  {
    path: "multisig",
    title: "Multi-Sig Payment",
  },
  {
    path: "hash-puzzle",
    title: "Hash Puzzle",
  },
  {
    path: "rabin-signature",
    title: "Rabin Signature",
  },
  {
    path: "coin-toss",
    title: "Coin Toss",
  },
  {
    path: "ecdsa-oracle",
    title: "ECDSA-based Oracle",
  },
  {
    path: "tic-tac-toe",
    title: "Tic-Tac-Toe",
  },
  {
    path: "time-lock",
    title: "Time Lock",
  },
  {
    path: "blocktime-bet",
    title: "Block-Time Bet",
  },
]

const DEPLOY_ROUTES: Route[] = [
  {
    path: "deploy-and-call",
    title: "Deploy and Call a Contract",
  },
]

const DEFI_ROUTES = []

export const ROUTES_BY_CATEGORY = [
  {
    title: "",
    routes: SCRYPT_ROUTES,
  },
  {
    title: "Applications",
    routes: APP_ROUTES,
    //routes: APP_ROUTES.map((route) => ({
    //  ...route,
    //  path: `/app/${route.path}`,
    //})),
  },
  {
    title: "Deployment",
    routes: DEPLOY_ROUTES,
  },
  //{
  //  title: "DeFi",
  //  routes: DEFI_ROUTES.map((route) => ({
  //    ...route,
  //    path: `/defi/${route.path}`,
  //  })),
  //},
]

const UPDATES = [""]

const ROUTES = ROUTES_BY_CATEGORY.map(({ routes }) => routes).flat()
const ROUTE_INDEX_BY_PATH = ROUTES.reduce((map, route: Route, i) => {
  // @ts-ignore
  map[route.path] = i
  return map
}, {})

export function getPrevNextPaths(path: string): {
  prev: Route | null
  next: Route | null
} {
  // @ts-ignore
  const index = ROUTE_INDEX_BY_PATH[path]
  if (index >= 0) {
    const prev = ROUTES[index - 1] || null
    const next = ROUTES[index + 1] || null
    return { prev, next }
  }
  return {
    prev: null,
    next: null,
  }
}

export default function HomePage() {
  return (
    <div className={styles.component}>
      <SEO
        title="sCrypt by Example"
        description="Learn smart contract programming using sCrypt"
      />
      <h1 className={styles.header}>
        <a href="/">sCrypt by Example</a>
      </h1>
      <div className={styles.subHeader}></div>
      <div className={styles.main}>
        <p>
          An introduction to <a href="https://docs.scrypt.io/">sCrypt</a> with simple
          examples.
        </p>

        <div className={styles.youTube}>
          <img src={youTube} alt="logo" className={styles.youTubeLogo} />
          <a
            href="https://www.youtube.com/playlist?list=PL0Kn1t30VSpGcbwN-bcbU1-x0fRAoq-GI"
            target="__blank"
          >
            Learning sCrypt video playlist.
          </a>
        </div>

        <div className={styles.updates}>
          {UPDATES.map((text, i) => (
            <div key={i}>{text}</div>
          ))}
        </div>

        {ROUTES_BY_CATEGORY.map(({ routes, title }, i) => (
          <div key={i}>
            {title && <h3 className={styles.category}>{title}</h3>}

            <ul className={styles.list}>
              {routes.map(({ path, title }) => (
                <li className={styles.listItem} key={path}>
                  <a href={path}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
