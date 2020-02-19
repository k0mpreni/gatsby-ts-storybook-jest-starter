import React from "react"
import renderer from "react-test-renderer"
import Example from "./example"
describe("Example", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Example text="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})