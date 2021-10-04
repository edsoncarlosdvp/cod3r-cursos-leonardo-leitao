import { GetStaticProps } from 'next'

interface paramsProps {
    params: { id: string }
}
interface studentProps {
    id: string,
    nome: string,
    email: string
}

export function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { params: { id: '107' } },
            { params: { id: '203' } },
            { params: { id: '1345' } },
        ]
    }
}

export async function getStaticProps(ctx: paramsProps) {
    // const params = ctx.params as paramsProps
    const res = await fetch(`http://localhost:3000/src/services/api/students/${ctx.params.id}`)
    const student = await res.json()

    return {
        props: {
            student
        }
    }
}

export default function StudentsId(props: { student: studentProps }): JSX.Element {
    const { student } = props
    return (
        <div>
            <h1>Detalhes do Aluno</h1>
            <ul>
                <li>{student.id}</li>
                <li>{student.nome}</li>
                <li>{student.email}</li>
            </ul>
        </div>
    )
}