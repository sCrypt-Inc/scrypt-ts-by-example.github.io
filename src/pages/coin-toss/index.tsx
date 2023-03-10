import React from "react"
import Example from "../../components/Example"
import html, { version, title, description, replitLink } from "./index.html"

interface Path {
  path: string
  title: string
}

interface Props {
  prev: Path | null
  next: Path | null
}

const ExamplePage: React.FC<Props> = ({ prev, next }) => {
  return (
    <Example
      version={version}
      title={title}
      description={description}
      html={html}
      prev={prev}
      next={next}
      replitLink={replitLink}
    />
  )
}

export default ExamplePage
