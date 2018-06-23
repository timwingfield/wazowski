let subject, result = null

describe("hello", () => {
  beforeEach( () => {
    subject = "a thing"
  })

  it("should exist", () => {
    expect(subject).to.not.be.undefined
  })

  it("should exist", () => {
    expect(true).to.not.be.false
  })
})
