import { getShoppingCart } from "../../utilities/fakedb";

const cardProductsLoader = async() =>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    // if cart data is in faDatabase, you have to use async await

    const storedCart =  getShoppingCart();
    const savedCart = [];
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            // help support session 
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    // if you need to send tow thing 
    // return [products, savedCart]
    // return {products, cart: savedCart}
    return savedCart;
}

export default cardProductsLoader;
