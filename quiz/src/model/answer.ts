export default class AnswerModel {
  #value: string;
  #hit: boolean;
  #reveal: boolean;

  constructor(value: string, hit: boolean, reveal = false) {
    this.#value = value;
    this.#hit = hit;
    this.#reveal = reveal;
  }

  static correct(value: string) {
    return new AnswerModel(value, true);
  }

  static wrong(value: string) {
    return new AnswerModel(value, false);
  }

  get value() {
    return this.#value;
  }

  get hit() {
    return this.#hit;
  }

  get reveal() {
    return this.#reveal;
  }

  convertToObject() {
    return {
      value: this.#value,
      hit: this.#hit,
      reveal: this.#reveal
    }
  }
}
