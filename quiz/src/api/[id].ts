import question from './questionData';

export default (request, response) => {
  response.status(200).json(question);
};
