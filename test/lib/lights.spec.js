let proxyquire = require('proxyquire')
let neopixel = proxyquire('neopixel', { })
let lights = require("../../lib/lights")

let subject, result = null

describe("lights", () => {
  beforeEach( () => {
  })

  it("should exist", () => {
    expect(lights).to.not.be.undefined
  })
})
