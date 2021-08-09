import Link from 'next/link'
import { useRouter } from 'next/router'

export default function searchAndName(): JSX.Element {
    const router = useRouter()
    const code = router.query.code
    const name = router.query.name

    return (
        <div>
            <h1>Rota / {code} / {name} /</h1>
            <Link href="/router">
                <a>
                    Voltar
                </a>
            </Link>
        </div>
    )
}