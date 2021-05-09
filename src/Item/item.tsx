import Button from "@material-ui/core/Button";
// Types
import { CardItemType } from "../App";
// Styles
import { Wrapper } from "./items.styles";

type Props = {
  item: CardItemType;
  addToCart: (clickedItem: CardItemType) => void;
};

const Item: React.FC<Props> = ({ item, addToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>£{item.price}</h3>
    </div>
    <Button onClick={() => addToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;
