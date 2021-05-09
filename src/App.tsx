import { useState } from "react";
import { useQuery } from "react-query";
// Components
import Item from "./Item/item";
//import Cart from './Cart/Cart';
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
//styles
import { Wrapper } from "./App.styles";

//types
export type CardItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};
//grab items from fake stire api
const getItems = async (): Promise<CardItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

function App() {
  const { data, isLoading, error } = useQuery<CardItemType[]>(
    "products",
    getItems
  );
  console.log(data);

  const getTotalItems = () => null;

  const addToCart = (clickedItem: CardItemType) => null;

  const removeFromCart = () => null;

  if (isLoading) return <LinearProgress />;

  if (error) return <div>Error: Something has gone wrong </div>;

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
