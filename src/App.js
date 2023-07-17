import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./components/pages/Home";
import Favorites from "./components/pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  // const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://64b2e6e738e74e386d55b477.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://64b2e6e738e74e386d55b477.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://64b2e6e738e74e386d55b477.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://64b2e6e738e74e386d55b477.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // const onAddToFavorite = (obj) => {
  //   axios.post("https://64b2e6e738e74e386d55b477.mockapi.io/cart", obj);
  //   setCartItems((prev) => [...prev, obj]);
  // };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
            />
          }
          exact
        ></Route>
      </Routes>

      <Routes>
        <Route path="/favorites" element={<Favorites />} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
