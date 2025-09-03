import { useEffect, useState } from "react";
import { listProducts } from "../services/ProductServices";
import { ProductGrid } from "./ProductGrid";

export function ProductApp() {

    const [ product, setProduct ] = useState([]);

    useEffect( () => {
        const result = listProducts();
        setProduct(result);
    }, []);
    return <>
        <h1>Hola Mundo</h1>
        <ProductGrid product={product} />
    </>
}