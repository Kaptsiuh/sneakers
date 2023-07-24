import React from "react";
import axios from "axios";

import Card from "../Card/Card";
import AppContext from "../../context";

const Orders = () => {
  const {onAddToFavorite, onAddToCart} = React.useContext(AppContext);
  const [orders, setOrders ] = React.useState([]);
  const [isLoading, setIsLoading ] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('/orders')
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
        setIsLoading(false);
      } catch (error) {
        alert('Error when you do order')
      }
    })()
  }, [])

  return ( <div className="content p-40">
  <div className="d-flex align-center justify-between mb-40s">
    <h1>My marker</h1>
  </div>

  <div className="d-flex flex-wrap">
    {(isLoading ? [...Array(8)] : orders).map((item, index) => (
        <Card key={index}
          onFavorite={(obj) => onAddToFavorite(obj)}
          onPlus={(obj) => onAddToCart(obj)}
          {...item}
          loading={isLoading}/>
      ))}
  </div>
</div> );
}
 
export default Orders;