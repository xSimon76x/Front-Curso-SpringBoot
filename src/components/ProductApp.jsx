import { useEffect, useState } from "react";
import { initialDataForm, listProducts } from "../services/ProductServices";
import { ProductGrid } from "./ProductGrid";
import PropTypes from "prop-types";
import { ProductForm } from "./ProductForm";

export function ProductApp({title}) {

    const [ products, setProduct ] = useState([]);
    const [ productSelected, setProductSelected ] = useState(initialDataForm);

    useEffect( () => {
        const result = listProducts();
        setProduct(result);
    }, []);

    const handlerAddProduct = (product) => {
        console.log(product);
        setProduct([...products, {...product}]);
    }

    const handlerRemoveProduct = (name) => {
        console.log(name);
        setProduct( products.filter( p => p.name != name));
    }

    const handlerProductSelected = (product) => {
        setProductSelected({...product});
    }

    return <>
        <h1>{title}</h1>
        <div>
            <div>
                <ProductForm handlerAddProduct = {  handlerAddProduct} productSelected={productSelected}
                />
            </div>
            <div>
                <ProductGrid product={products} handlerRemoveProduct = {
                    handlerRemoveProduct} 
                    handlerProductSelected = {handlerProductSelected}/>
            </div>
        </div>
    </>
}

ProductApp.propTypes = {
    title: PropTypes.string.isRequired
}