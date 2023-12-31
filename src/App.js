import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
// import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./components/pages/Home";
import Favorites from "./components/pages/Favorites";
import AppContext from "./context";
import Orders from "./components/pages/Orders";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://64b2e6e738e74e386d55b477.mockapi.io/cart"
      );
      // const favoritesResponse = await axios.get(
      //   "https://64b2e6e738e74e386d55b477.mockapi.io/favorites"
      // );
      const itemsResponse = await axios.get(
        "https://64b2e6e738e74e386d55b477.mockapi.io/items"
      );

      setIsLoading(false);

      setCartItems(cartResponse.data);
      // setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://64b2e6e738e74e386d55b477.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://64b2e6e738e74e386d55b477.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://64b2e6e738e74e386d55b477.mockapi.io/cart",
          obj
        );
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert(`Can't add in favorites`);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        favorites,
        items,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}
    >
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
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
            exact
          ></Route>
        </Routes>

        <Routes>
          <Route
            path="/favorites"
            element={<Favorites onAddToFavorite={onAddToFavorite} />}
            exact
          ></Route>
        </Routes>

        <Routes>
          <Route
            path="/orders"
            element={<Orders onAddToFavorite={onAddToFavorite} />}
            exact
          ></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
