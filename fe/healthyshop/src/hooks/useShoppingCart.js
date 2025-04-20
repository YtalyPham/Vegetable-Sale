import {ReactSession} from 'react-client-session';
import { SESSION_KEY } from 'utils/constant';


const useShoppingCart = () => {
    const addToCart = (product, quantity) =>{
        const cart = ReactSession.get(SESSION_KEY.CART);
        const products = cart ? cart.products : [];
        const productIndex = products?.findIndex(item => item.product.id === product.id);
        if (productIndex > -1) {
            products[productIndex].quantity += quantity;
        } else {
            products.push({product, quantity});
        }

        const totalPrice = products.reduce((sum,item)=>{
            return sum + item.product.price * item.quantity;
        },0)

        const newCart = {
            totalQuantity: products.length,
            totalPrice,
            products,

        }
        ReactSession.set(SESSION_KEY.CART, newCart);
        alert("Thêm sản phẩm vào giỏ hàng thành công!");
    }
    return {
        addToCart,
    };
};

export default useShoppingCart;