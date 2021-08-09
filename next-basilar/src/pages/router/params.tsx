import Link from 'next/link'
import { useRouter } from 'next/router'

export default function params(): JSX.Element {
    const router = useRouter()
    const id = router.query.id
    const name = router.query.name

    return (
        <div>
            <h1>Rota params: {id} e {name}</h1>
            <Link href="/router">
                <a>
                    Voltar
                </a>
            </Link>
        </div>
    )
}