import AnswerModel from './answer';

export default class QuestionModel {
  #id: number;
  #question: string;
  #answers: AnswerModel[];
  #correct: boolean;

  constructor(
    id: number,
    question: string,
    answers: AnswerModel[],
    correct: boolean = false
  ) {
    this.#id = id;
    this.#question = question;
    this.#answers = answers;
    this.#correct = correct;
  }

  get id() {
    return this.#id;
  }

  get question() {
    return this.#question;
  }

  get answers() {
    for (let answers of this.#answers) {
      if (answers.reveal) return true;
    }
    return this.#answers;
  }

  get correct() {
    return this.#correct;
  }
}
