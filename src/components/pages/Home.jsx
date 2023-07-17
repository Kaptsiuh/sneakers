import Card from "../Card/Card";

const Home = ({items, searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCart}) => {
  return ( <div className="content p-40">
  <div className="d-flex align-center justify-between mb-40s">
    <h1 className="mb-40">
      {searchValue ? `you search: "${searchValue}"` : `All sneakers`}
    </h1>
    <div className="search-block d-flex">
      <img src="/img/search.svg" alt="Search" />
      {searchValue && (
        <img
          onClick={() => setSearchValue("")}
          className="clear cu-p"
          src="/img/btn-remove.svg"
          alt="Close"
        />
      )}
      <input
        onChange={onChangeSearchInput}
        value={searchValue}
        placeholder="Search..."
      />
    </div>
  </div>

  <div className="d-flex flex-wrap">
    {items
      .filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      )
      .map((item, index) => (
        <Card
          key={index}
          title={item.title}
          price={item.price}
          url={item.url}
          onFavorite={() => console.log("add to marks")}
          onPlus={(obj) => onAddToCart(obj)}
        />
      ))}
  </div>
</div> );
}
 
export default Home;