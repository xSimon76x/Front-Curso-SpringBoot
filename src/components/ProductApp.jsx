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
        
        if (product.id > 0) {
            // para actualizar un producto
            setProduct(
                products.map( (prod) => {
                    if (prod.id == product.id) {
                        return {...product};
                    }
                    return prod;
                })
            );
            return;
        }
        // para agregar un nuevo producto
        setProduct([...products, {...product, id: new Date().getTime()}]);

    }

    const handlerRemoveProduct = (id) => {
        console.log(id);
        setProduct( products.filter( p => p.id != id));
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