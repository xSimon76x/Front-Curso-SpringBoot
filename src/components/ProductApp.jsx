import { useEffect, useState } from "react";
import { findAll, initialDataForm, listProducts } from "../services/ProductServices";
import { ProductGrid } from "./ProductGrid";
import PropTypes from "prop-types";
import { ProductForm } from "./ProductForm";

export function ProductApp({title}) {

    const [ products, setProduct ] = useState([]);
    const [ productSelected, setProductSelected ] = useState(initialDataForm);
    
    useEffect( () => {
        getProducts();
    }, []);
    
    const getProducts = async () => {
        const result = await findAll();
        console.log(result);
        setProduct(result.data._embedded.products);
    }

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

    return <div className="container my-4">
        <h2>{title}</h2>
        <div className="row">
            <div>
                <ProductForm handlerAddProduct = {  handlerAddProduct} productSelected={productSelected}
                />
            </div>
            <div>
                {
                    products.length > 0 
                    ? <ProductGrid product={products} handlerRemoveProduct = {
                        handlerRemoveProduct} 
                        handlerProductSelected = {handlerProductSelected}/>
                    : <div className="alert alert-warning">No hay productos en el sistema!</div>

                }
            </div>
        </div>
    </div>
}

ProductApp.propTypes = {
    title: PropTypes.string.isRequired
}