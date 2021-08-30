import { CellInterface } from "../interfaces"
import { isIntegerBetween } from "../utilities"

export class CellModel implements CellInterface {
    private _row: number
    private _column: number
    private _band: number
    private _stack: number
    private _digit?: number
    private _clue: boolean
    private _marks?: number[]

    constructor(row: number, column: number, digit?: number) {
        if (isIntegerBetween(row) && isIntegerBetween(column)) {
            this._row = row
            this._column = column
            this._band = Math.floor((row - 1) / 3) + 1
            this._stack = Math.floor((column - 1) / 3) + 1
            this.digit = isIntegerBetween(digit) ? digit : undefined
            this._clue = this.digit ? true : false
            this._marks = []
        }
    }

    public get row(): number {
        return this._row
    }
    public get column(): number {
        return this._column
    }
    public get band(): number {
        return this._band
    }
    public get stack(): number {
        return this._stack
    }
    public get block(): number {
        return this._stack + ((this._band - 1) * 3)
    }
    public get digit(): number {
        return this._digit
    }
    public set digit(digit: number) {
        if (isIntegerBetween(digit) && !this._clue) {
            this._digit = digit
            this._marks = []
        }
    }
    public get marks(): number[] {
        return this._marks
    }
    public get clue(): boolean {
        return this._clue
    }
    public writeMark(mark: number): CellModel {
        if (!this._digit && !this._marks.includes(mark) && isIntegerBetween(mark)) { this._marks.push(mark) }
        return this
    }
    public eraseMark(mark: number): CellModel {
        if (isIntegerBetween(mark) && this._marks.includes(mark)) { this._marks = this._marks.filter(_cand => _cand !== mark) }
        return this
    }
    public clearMarks(): CellModel {
        this._marks = []
        return this
    }
    public writeDigit(digit: number): CellModel {
        if (isIntegerBetween(digit) && !this._clue) {
            this._digit = digit
            this.clearMarks()
        }
        return this
    }
    public eraseDigit(): CellModel {
        this._digit = undefined
        return this
    }
}