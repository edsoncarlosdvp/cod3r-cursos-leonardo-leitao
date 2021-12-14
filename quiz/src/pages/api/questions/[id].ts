import questions from '../dataBaseQuestion';

export default (request: any, response: any) => {
  response.status(200).json(questions[0].convertToObject());
};
