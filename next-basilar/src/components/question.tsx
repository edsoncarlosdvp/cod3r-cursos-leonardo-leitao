import { useEffect, useState } from 'react'

export default function question() {
    const [question, setQuestion] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/question/123')
            .then(resp => resp.json())
            .then(setQuestion)
    }, [])

    function renderResp() {
        if (question) {
            return question.resp.map((resp, index) => {
                return <li key={index}>{resp}</li>
            })
        }
        return false
    }

    return (
        <div>
            <h1>Questão</h1>
            <div>
                <span>{question?.id} - {question?.utterance}</span>
                <ul>
                    {renderResp()}
                </ul>
            </div>
        </div>
    )
}