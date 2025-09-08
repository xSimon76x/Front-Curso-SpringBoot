import PropTypes from "prop-types"

export const ProductDetail = ({product = [], handlerRemoveProduct, handlerProductSelected}) => {

    return <tr>
        <td>{product.name}</td>    
        <td>{product.description}</td>    
        <td>{product.price}</td>
        <td>
            <button onClick={() => handlerProductSelected(product)} className="btn btn-secondary btn-sm">
            Update
            </button>
        </td>
        <td>
            <button onClick={() => handlerRemoveProduct(product.id)} className="btn btn-danger btn-sm">
                Delete
            </button>
        </td>
    </tr>
  
}

ProductDetail.propTypes = {
    product: PropTypes.array.isRequired,
    handlerRemoveProduct: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}