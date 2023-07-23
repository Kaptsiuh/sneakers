import React from "react";
import AppContext from "../context";

const Info = ({image, title, description}) => {
  const { setCartOpened } = React.useContext(AppContext)

  return ( 
    <div>
      <div className="cartEmpry d-flex align-center justify-center flex-column slex">
        <img className="mb-20" width="120px" src={image} alt="Empty" />
        <h2>{title}</h2>
        <p className="opacity-6">{description}</p>
        <button onClick={() => setCartOpened(false)} className="greenButton">
          <img src="/img/arrow.svg" alt="Arrow" />
          Back
        </button>
        </div>
    </div>
   );
}
 
export default Info;