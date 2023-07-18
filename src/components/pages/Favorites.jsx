import Card from "../Card/Card";

const Favorites = ({items, onAddToFavorite}) => {
  return ( <div className="content p-40">
  <div className="d-flex align-center justify-between mb-40s">
    <h1>Hearts</h1>
  </div>

  <div className="d-flex flex-wrap">
    {items
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