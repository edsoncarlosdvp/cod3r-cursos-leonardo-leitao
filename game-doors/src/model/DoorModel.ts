export default class DoorModel {
    #num: number;
    #haveGif: boolean;
    #selected: boolean;
    #opening: boolean;

    constructor(
        num: number,
        haveGif = false,
        selected = false,
        opening = false
    ) {
        this.#num = num;
        this.#haveGif = haveGif;
        this.#selected = selected;
        this.#opening = opening;
    }

    get num() {
        return this.#num;
    }

    get havaGif() {
        return this.#haveGif;
    }

    get selected() {
        return this.#selected;
    }

    get opening() {
        return this.#opening;
    }

    notSelected() {
        const selected = false;
        return new DoorModel(this.num, this.haveGif, selected, this.opening);
    }

    changeSelected() {
        const selected = !this.selected;
        return new DoorModel(this.num, this.haveGif, selected, this.opening);
    }

    open() {
        const openning = true;
        return new DoorModel(this.num, this.haveGif, this.selected, opening);
    }
}
