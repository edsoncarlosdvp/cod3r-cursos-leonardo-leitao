export async function getServerSideProps() {
    console.log('[Server] gerando props...')
    const res = await fetch('http://localhost:3000/services/api/products')
    const products = await res.json()

    return {
        props: {
            products
        }
    }
}

export default function Dynamic2(props: any): JSX.Element {
    console.log('[Client] renderizando componente...')
    function renderProducts() {
        return props.products.map((product: any) => {
            return <li key={product.id}>O produto {product.name} tem o valor de R${product.price}</li>
        })
    }
    return (
        <div>
            <h1>Dinâmico #02</h1>
            <ul>
                {renderProducts()}
            </ul>
        </div>
    )
}