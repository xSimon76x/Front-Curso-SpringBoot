

const initProducts = [
    {
        name: "Monitor",
        description: "Monitor Samsung 68",
        price: 350,
    },
    {
        name: "Notebook Asus",
        description: "Notebook Asus Strix",
        price: 850,
    },
    {
        name: "Tablet Apple",
        description: "Tablet Apple A23",
        price: 450,
    },
];

export const initialDataForm = {
    name: '',
    description: '',
    price: ''
};

export const listProducts = () => {
    return initProducts;
}