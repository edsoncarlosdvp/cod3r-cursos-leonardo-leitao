import Link from 'next/link'
import { useRouter } from 'next/router'

export default function search(): JSX.Element {
    const router = useRouter()
    const code = router.query.code
    return (
        <div>
            <h1>Rota / {code} / search /</h1>
            <Link href="/router">
                <a>
                    Voltar
                </a>
            </Link>
        </div>
    )
}