import questions from '../dataBaseQuestion';

export default (req: any, res: any) => {
    res.status(200).json(questions.map(question => question.id))
}