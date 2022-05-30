import React, {useState} from "react";

function PlantCard( {plant} ) {

  const [isSoldOut, updateStock] = useState(plant.isSoldOut)

  function handleStock() {
    updateStock(!isSoldOut)
    const config = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({...plant, isSoldOut: !isSoldOut})
    }
    fetch(`http://localhost:6001/plants/${plant.id}`, config)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {!isSoldOut ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
