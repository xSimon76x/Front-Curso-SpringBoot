import { useEffect, useState } from "react";
import { listProducts } from "../services/ProductServices";

export function ProductApp() {

    const [ product, setProduct ] = useState([]);

    useEffect( () => {
        const result = listProducts();
        setProduct(result);
    }, []);
    return <>
        <h1>Hola Mundo</h1>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {product.map( (prod, index) => (
                    <tr key={index}>
                        <td>{prod.name}</td>    
                        <td>{prod.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}