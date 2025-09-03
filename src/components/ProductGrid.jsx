import { ProductDetail } from "./ProductDetail";


export function ProductGrid({product = []}) {
    return <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
            </tr>
        </thead>
        <tbody>
            {product.map( (prod, index) => <ProductDetail product={prod} key={index} />)}
        </tbody>
    </table>
}