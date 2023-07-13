import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Men Sneakers Nike Blazer Mid Suede",
    price: 199,
    url: "/img/sneakers/1.jpg",
  },
  {
    title: "Men Sneakers Nike Air Max 270",
    price: 299,
    url: "/img/sneakers/2.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40s">
          <h1 className="mb-40">All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              url={obj.url}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
