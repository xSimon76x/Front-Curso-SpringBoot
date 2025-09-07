import { useEffect, useState } from "react"
import { initialDataForm } from "../services/ProductServices";



export const ProductForm = ({ handlerAddProduct, productSelected }) => {


    const [form, setForm] = useState(initialDataForm);

    const { name, description, price } = form;

    useEffect(() => {
      setForm(productSelected);
    }, [productSelected])
    

    async function onSumbit(e) {
        e.preventDefault();

        if (!name || !description || !price) {
            alert('Debe de completar los datos del formulario!')
            return;
        }
        // console.log(form);
        handlerAddProduct(form);
        setForm(initialDataForm);
    }

    return (
        <form action="submit" onSubmit={
            (e) => onSumbit(e)
        }>
            <div>
                <input 
                    type="text" 
                    placeholder="Name"
                    style={{marginBottom: '6px'}}
                    name="name"
                    value={name}
                    onChange={(e) => setForm({
                        ...form, name: e.target.value
                    })}
                    />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Description"
                    style={{marginBottom: '6px'}}
                    name="description"
                    value={description}
                    onChange={(e) => setForm({
                        ...form, description: e.target.value
                    })}
                    />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Price"
                    style={{marginBottom: '6px'}}
                    name="price"
                    value={price}
                    onChange={(e) => setForm({
                        ...form, price: e.target.value
                    })}
                />
            </div>
            <div>
                <button type="submit">Crear</button>
            </div>

        </form>
    );
}