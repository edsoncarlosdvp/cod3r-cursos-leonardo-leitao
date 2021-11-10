import AnswerModel from '../model/answer';
import QuestionModel from '../model/question';
const question: QuestionModel[] = [
  new QuestionModel(306, 'Qual o inseto que transmite a doença de Chagas?', [
    AnswerModel.wrong('Abelha'),
    AnswerModel.wrong('Barata'),
    AnswerModel.wrong('Pulga'),
    AnswerModel.correct('Barbeiro'),
  ]),
  new QuestionModel(
    202,
    'Qual fruto é conhecido no Norte e Nordeste como Jerimum? ',
    [
      AnswerModel.wrong('Caju'),
      AnswerModel.wrong('Côco'),
      AnswerModel.wrong('Chuchu'),
      AnswerModel.correct('Abóbora'),
    ]
  ),
];

export default question;
