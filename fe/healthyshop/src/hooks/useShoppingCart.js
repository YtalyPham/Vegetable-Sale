import { ReactSession } from "react-client-session";
import { useDispatch } from "react-redux";
import { SESSION_KEY } from "utils/constant";
import { setCart } from "../redux/commonSlide";

const useShoppingCart = () => {
  const dispatch = useDispatch();
  const addToCart = (product, quantity) => {
    const cart = ReactSession.get(SESSION_KEY.CART);
    const products = cart ? cart.products : [];
    const productIndex = products?.findIndex(
      (item) => item.product.id === product.id
    );
    if (productIndex > -1) {
      products[productIndex].quantity += quantity;
    } else {
      products.push({ product, quantity });
    }

    const totalPrice = products.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);

    const newCart = {
      totalQuantity: products.length,
      totalPrice,
      products,
    };
    ReactSession.set(SESSION_KEY.CART, newCart);
    alert("Thêm sản phẩm vào giỏ hàng thành công!");
    dispatch(setCart(newCart));
  };
  const removeCart = (id) => {
    const cart = ReactSession.get(SESSION_KEY.CART);
    if (
      window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?")
    ) {
      const { product, quantity } = cart.products.find(
        (item) => item.product.id === id
      );
      
      const totalPrice = cart.totalPrice - product.price * quantity;
      const products = cart.products.filter((item) => item.product.id !== id);
      const newCart = {
        totalQuantity: cart.totalQuantity - 1,
        totalPrice,
        products,
      };

      ReactSession.set(SESSION_KEY.CART, newCart);
      dispatch(setCart(newCart));
      return newCart;
    }

    return cart;
  };
  return {
    addToCart,
    removeCart,
  };
};

export default useShoppingCart;
