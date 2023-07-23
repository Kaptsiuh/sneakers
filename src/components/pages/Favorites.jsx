import React from "react";
import AppContext from "../../context";
import Card from "../Card/Card";

const Favorites = ({ onAddToFavorite}) => {
  const state = React.useContext(AppContext);

  return ( <div className="content p-40">
  <div className="d-flex align-center justify-between mb-40s">
    <h1>Hearts</h1>
  </div>

  <div className="d-flex flex-wrap">
    {[]
      .map((item, index) => (
        <Card
          key={index}
          favorited={true}
          onFavorite={onAddToFavorite}
          {...item}
        />
      ))}
  </div>
</div> );
}
 
export default Favorites;