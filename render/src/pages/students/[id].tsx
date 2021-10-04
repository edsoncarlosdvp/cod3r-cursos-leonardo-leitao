import { GetStaticProps } from 'next'

interface paramsProps {
    params: { id: string }
}
interface studentProps {
    id: string,
    nome: string,
    email: string
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/src/services/api/students/tutors')
    const ids = await res.json()

    const paths = ids.map((id: string) => {
        return { params: { id: `${id}` } }
    })
    return {
        fallback: true,
        paths
    }
}

export async function getStaticProps(ctx: paramsProps) {
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