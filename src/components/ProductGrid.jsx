import PropTypes from "prop-types";
import { ProductDetail } from "./ProductDetail";


export function ProductGrid({product = [], handlerRemoveProduct,
handlerProductSelected
}) {
    return <table className="table table-hover table-striped">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Update</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            {product.map( (prod, index) => <ProductDetail product={prod} key={index} handlerRemoveProduct = {
                    handlerRemoveProduct}
                    handlerProductSelected={handlerProductSelected} />)}
        </tbody>
    </table>
}

ProductGrid.propTypes = {
    product: PropTypes.array.isRequired,
    handlerRemoveProduct: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}