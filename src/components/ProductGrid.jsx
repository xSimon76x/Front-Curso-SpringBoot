import PropTypes from "prop-types";
import { ProductDetail } from "./ProductDetail";


export function ProductGrid({product = [], handlerRemoveProduct }) {
    return <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
            </tr>
        </thead>
        <tbody>
            {product.map( (prod, index) => <ProductDetail product={prod} key={index} handlerRemoveProduct = {
                    handlerRemoveProduct} />)}
        </tbody>
    </table>
}

ProductGrid.propTypes = {
    product: PropTypes.array.isRequired,
    handlerRemoveProduct: PropTypes.func.isRequired
}