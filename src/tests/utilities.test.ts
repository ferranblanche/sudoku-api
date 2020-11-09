import { expect } from 'chai'
import 'mocha'

import { isIntegerBetween, isArrayLength, isArrayOfIntegersBetween } from '../utilities'

describe('Cell Utilities - isIntegerBetween', () => {
    it('Detects undefined', () => {
        expect(isIntegerBetween(undefined, 0, 10)).to.be.false
    })
    it('Detects NaN', () => {
        expect(isIntegerBetween(NaN, 0, 10)).to.be.false
    })
    it('Detects decimal number', () => {
        expect(isIntegerBetween(0.5, 0, 10)).to.be.false
    })
    it('Detects smaller integer than the specified minimum', () => {
        expect(isIntegerBetween(-1, 0, 10)).to.be.false
    })
    it('Detects greater integer than the specified maximum', () => {
        expect(isIntegerBetween(100, 0, 10)).to.be.false
    })
    it('Detects integer between the specified minimum and maximum', () => {
        expect(isIntegerBetween(3, 0, 10)).to.be.true
    })
})

describe('Row/Column Utilities – isArrayLength', () => {
    let array = [1, 2, 3, 4, 5]
    it('Detects shorter array', () => {
        expect(isArrayLength(array, 10)).to.be.false
    })
    it('Detects longer array', () => {
        expect(isArrayLength(array, 3)).to.be.false
    })
    it('Detects array is the specified length', () => {
        expect(isArrayLength(array, 5)).to.be.true
    })
})

describe('Row/Column Utilities – isArrayOfIntegersBetween', () => {
    it('Detects undefined', () => {
        let array = [1, 2, 3, undefined, 5]
        expect(isArrayOfIntegersBetween(array, 0, 10)).to.be.false
    })
    it('Detects NaN', () => {
        let array = [1, NaN, 3, 4, 5]
        expect(isArrayOfIntegersBetween(array, 0, 10)).to.be.false
    })
    it('Detects decimal number', () => {
        let array = [1, 2, 3, 4, .75]
        expect(isArrayOfIntegersBetween(array, 0, 10)).to.be.false
    })
    it('Detects smaller integer than the specified minimum', () => {
        let array = [1, 2, 3, -4, 5]
        expect(isArrayOfIntegersBetween(array, 0, 10)).to.be.false
    })
    it('Detects greater integer than the specified maximum', () => {
        let array = [1, 2, 3, 4, 50]
        expect(isArrayOfIntegersBetween(array, 0, 10)).to.be.false
    })
    it('Detects all numers are integers between the specified minimum and maximum', () => {
        let array = [1, 2, 3, 4, 5]
        expect(isArrayOfIntegersBetween(array, 0, 10)).to.be.true
    })
})