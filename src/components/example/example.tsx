import React from "react"

interface Props {
  text: String
}

const Example = ({text}: Props) => (
  <div>
    <p>{text}</p>
  </div>
)

export default Example