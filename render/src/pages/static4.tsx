export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/products')
    const products = await res.json()

    return {
        props: {
            products
        }
    }
}

export default function Static4(props): JSX.Element {
    function renderProducts() {
        return props.products.map(product => {
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