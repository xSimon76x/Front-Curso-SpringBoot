import PropTypes from "prop-types"

export const ProductDetail = ({product = []}) => {

    return <tr>
        <td>{product.name}</td>    
        <td>{product.price}</td>
    </tr>
  
}

ProductDetail.propTypes = {
    product: PropTypes.array.isRequired
}