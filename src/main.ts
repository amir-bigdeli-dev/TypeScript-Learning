// Generic functions


//Challenge 5

function findById<T extends { id: number }>(items: T[], id: number): T | undefined{
    return items.find(item => item.id === id)
}

interface Product {
    name: string,
    id : number,
    price : number
}
interface User {
    name : string,
    id : number
}


const products: Product[] = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
];

const users: User[] = [
    { id: 1, name: "ali" },
    { id: 2, name: "sara" },
];

const product = findById(products,2)
const user = findById(users,2)

if(product) console.log(product.name,product.price)
if(user) console.log(user.name)


