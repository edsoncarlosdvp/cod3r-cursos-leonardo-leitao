export default class AnswerModel{
    #value: string
    #hit: boolean
    #reveal: boolean

    constructor(value: string, hit: boolean, reveal = false) {
        this.#value = value
        this.#hit = hit
        this.#reveal = reveal
    }

    get value() {
        return this.#value
    }

    get hit() {
        return this.#hit
    }

    get reveal() {
        return this.#reveal
    }
}