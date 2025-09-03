import { useEffect, useState } from "react";
import { listProducts } from "../services/ProductServices";
import { ProductGrid } from "./ProductGrid";
import PropTypes from "prop-types";

export function ProductApp({title}) {

    const [ product, setProduct ] = useState([]);

    useEffect( () => {
        const result = listProducts();
        setProduct(result);
    }, []);
    return <>
        <h1>{title}</h1>
        <ProductGrid product={product} />
    </>
}

ProductApp.propTypes = {
    title: PropTypes.string.isRequired
}