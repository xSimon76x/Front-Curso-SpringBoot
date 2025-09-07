import { useEffect, useState } from "react";
import { listProducts } from "../services/ProductServices";
import { ProductGrid } from "./ProductGrid";
import PropTypes from "prop-types";
import { ProductForm } from "./ProductForm";

export function ProductApp({title}) {

    const [ products, setProduct ] = useState([]);

    useEffect( () => {
        const result = listProducts();
        setProduct(result);
    }, []);

    const handlerAddProduct = (product) => {
        console.log(product);
        setProduct([...products, {...product}]);
    }

    return <>
        <h1>{title}</h1>
        <div>
            <div>
                <ProductForm handlerAddProduct={handlerAddProduct} />
            </div>
            <div>
                <ProductGrid product={products} />
            </div>
        </div>
    </>
}

ProductApp.propTypes = {
    title: PropTypes.string.isRequired
}