import sinon from "ts-sinon"
import { sumSpy, subtractSpy, divideSpy, multiplySpy, remainderSpy } from "./event_emitter"

  describe ("Tests for calculator events", () => {
    it ("'Sum' should be called correct number of times", () => {
        sinon.assert.callCount(sumSpy, 2)
    })

    it ("'Subtract' should be called correct number of times", () => {
        sinon.assert.callCount(subtractSpy, 1)
    })

    it ("'Divide' should be called correct number of times", () => {
        sinon.assert.callCount(divideSpy, 1)
    })

    it ("'Multiply' should be called correct number of times", () => {
        sinon.assert.callCount(multiplySpy, 1)
    })

    it ("'Remainder' should be called correct number of times", () => {
        sinon.assert.callCount(remainderSpy, 1)
    })
})
