let lights = require("../../lib/lights")

let subject, result = null

describe("lights", () => {
  beforeEach( () => {
  })

  it("should exist", () => {
    expect(lights).to.not.be.undefined
  })

  describe('#parkOpen', () => {
    context('magic kingdom', () => {
      beforeEach( () => {
        lights.mkOpen()
      })

      it('should set the first neopixel to green', () => {
        console.log(lights.blahBlah())
        expect(lights.strip()).to.not.be.undefined
      })
    })
  })
})
