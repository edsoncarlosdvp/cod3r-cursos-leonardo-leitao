import Link from 'next/link'

export default function router(): JSX.Element {
    return (
        <div>
            <h1>Rota</h1>
            <ul>
                <Link href="/router/params?id=1962&name=Edson">
                    <a>
                        <li>Params</li>
                    </a>
                </Link>
                <Link href="/router/123/search">
                    <a>
                        <li>Buscar</li>
                    </a>
                </Link>
                <Link href="/router/456/Carlos">
                    <a>
                        <li>Carlos</li>
                    </a>
                </Link>
            </ul>
        </div>
    )
}