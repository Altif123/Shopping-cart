import CartItem from "../CartItem/CartItem";
//styles
import { Wrapper } from "./Cart.styles";
//types
import { CartItemType } from "../App";


type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Shopping cart</h2>
      {cartItems.length === 0 ? <p>No items selected</p> : null}
      {cartItems.map((item) => (
        <CartItem />
      ))}
    </Wrapper>
  );
};

export default Cart;
