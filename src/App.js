function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3 className="text-uppercase">Sneakers</h3>
            <p>Shop the best sneakers</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="Card" />
            <span>100 $</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="User" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1>All sneakers</h1>
        <div className="card">
          <img src="/img/sneakers/1.jpg" alt="Sneakers" />
          <p></p>
          <div>
            <div>
              <span>Price:</span>
              <b>299 $</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
