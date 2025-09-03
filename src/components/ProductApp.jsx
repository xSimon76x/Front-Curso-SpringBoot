import { useState } from "react";



const initProducts = [
    {
        name: "Monitor Samsung 68",
        price: 350,
    },
    {
        name: "Notebook Asus",
        price: 850,
    },
    {
        name: "Tablet Apple",
        price: 450,
    },
];
        

export function ProductApp() {

    const [ product, setProduct ] = useState([]);

    setProduct(initProducts);
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