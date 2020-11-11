import { expect } from "chai"
import { CellModel } from "../../models/CellModel"

describe("Cell Model – Constructor", () => {
    it("defaults cell's number to undefined and no marks", () => {
        let cell = new CellModel()
        expect(cell.getNumber()).to.be.undefined
        expect(cell.getMarks()).to.be.empty
    })
    it("sets the number when specifed", () => {
        let number = 8
        let cell = new CellModel(number)
        expect(cell.getNumber()).to.be.equal(number)
        expect(cell.getMarks()).to.be.empty
    })
    it("rejects decimal numbers", () => {
        let cell = new CellModel(3.75)
        expect(cell.getNumber()).to.be.undefined
        expect(cell.getMarks()).to.be.empty
    })
    it("rejects numbers smaller than 1", () => {
        let cell = new CellModel(0)
        expect(cell.getNumber()).to.be.undefined
        expect(cell.getMarks()).to.be.empty
    })
    it("rejects numbers greater than 9", () => {
        let cell = new CellModel(58)
        expect(cell.getNumber()).to.be.undefined
        expect(cell.getMarks()).to.be.empty
    })
    it("sets the marks when specifed", () => {
        let marks = [2, 8, 5, 3]
        let cell = new CellModel(undefined, marks)
        expect(cell.getNumber()).to.be.undefined
        expect(cell.getMarks()).to.be.equal(marks)
    })
    it("rejects decimal marks", () => {
        let number = 2
        let marks = [1, 5.36, 3]
        let cell = new CellModel(number, marks)
        expect(cell.getNumber()).to.be.equal(number)
        expect(cell.getMarks()).to.be.empty
    })
    it("rejects marks smaller than 1", () => {
        let number = 2
        let marks = [1, 2, 0]
        let cell = new CellModel(number, marks)
        expect(cell.getNumber()).to.be.equal(number)
        expect(cell.getMarks()).to.be.empty
    })
    it("rejects marks greater than 9", () => {
        let number = 2
        let marks = [1, 24, 3]
        let cell = new CellModel(number, marks)
        expect(cell.getNumber()).to.be.equal(number)
        expect(cell.getMarks()).to.be.empty
    })
})

describe("Cell Model – isBlank", () => {
    it("detects undefined number as a blank", () => {
        let number = undefined
        let cell = new CellModel(number)
        expect(cell.isBlank()).to.be.true
    })
    it("detects an integer", () => {
        let number = 6
        let cell = new CellModel(number)
        expect(cell.isBlank()).to.be.false
    })
})

describe("Cell Model – getNumber", () => {
    it("gets the introducided integer", () => {
        let number = 9
        let cell = new CellModel(number)
        expect(cell.getNumber()).to.be.equal(number)
    })
    it("gets undefined when number not set", () => {
        let cell = new CellModel()
        expect(cell.getNumber()).to.be.undefined
    })
    it("gets undefined when number is undefined", () => {
        let number = undefined
        let cell = new CellModel(number)
        expect(cell.getNumber()).to.be.undefined
    })
    it("gets undefined when number is NaN", () => {
        let number = NaN
        let cell = new CellModel(number)
        expect(cell.getNumber()).to.be.undefined
    })
})

// describe("Cell Model – setNumber", () => {})
// describe("Cell Model – removeNumber", () => {})
// describe("Cell Model – hasMarks", () => {})
// describe("Cell Model – getMarks", () => {})
// describe("Cell Model – setMark", () => {})
// describe("Cell Model – removeMark", () => {})
// describe("Cell Model – cleanMarks", () => {})