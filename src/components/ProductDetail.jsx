import PropTypes from "prop-types"

export const ProductDetail = ({product = [], handlerRemoveProduct}) => {

    return <tr>
        <td>{product.name}</td>    
        <td>{product.description}</td>    
        <td>{product.price}</td>
        <td><button onClick={() => handlerRemoveProduct(product.name)}>Eliminar</button></td>
    </tr>
  
}

ProductDetail.propTypes = {
    product: PropTypes.array.isRequired,
    handlerRemoveProduct: PropTypes.func.isRequired
}