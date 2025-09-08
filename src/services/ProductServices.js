

const initProducts = [
    {
        id: 1,
        name: "Monitor",
        description: "Monitor Samsung 68",
        price: 350,
    },
    {
        id: 2,
        name: "Notebook Asus",
        description: "Notebook Asus Strix",
        price: 850,
    },
    {
        id: 3,
        name: "Tablet Apple",
        description: "Tablet Apple A23",
        price: 450,
    },
];

export const initialDataForm = {
    id: 0,
    name: '',
    description: '',
    price: ''
};

export const listProducts = () => {
    return initProducts;
}