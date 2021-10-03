export async function getStaticProps() {
    console.log('[Server] gerando props...')
    const res = await fetch('http://localhost:3000/services/api/products')
    const products = await res.json()

    return {
        props: {
            products
        }
    }
}

export default function Static4(props: any): JSX.Element {
    console.log('[Client] renderizando componente...')
    function renderProducts() {
        return props.products.map((product: any) => {
            return <li key={product.id}>O produto {product.name} tem o valor de R${product.price}</li>
        })
    }
    return (
        <div>
            <h1>Estático #04</h1>
            <ul>
                {renderProducts()}
            </ul>
        </div>
    )
}