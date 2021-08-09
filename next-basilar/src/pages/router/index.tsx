import Link from 'next/link'
import router, { useRouter } from 'next/router'

export default function rotas(): JSX.Element {

    function simpleNavigation(url: string) {
        router.push(url)
    }

    function navigationWithParams() {
        router.push({
            pathname: '/router/params',
            query: {
                id: 123,
                name: 'Ana'
            }
        })
    }

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
            <div style={{ display: 'flex' }}>
                <button onClick={navigationWithParams}>Params</button>
                <button onClick={() => router.push('/router/123/search')}>Buscar</button>
                <button onClick={() => simpleNavigation('/router/456/Carlos')}>Carlos</button>
            </div>
        </div>
    )
}