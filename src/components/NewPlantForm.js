import React, {useState} from "react";

function NewPlantForm( {onAddPlant} ) {

  const [newPlant, createPlant] = useState({
    name: '',
    image: '',
    price: ''
  })

  function handleForm(e) {
    createPlant({
      ...newPlant, 
      [e.target.name]: e.target.value})
  }

  function handleSubmit() {
    const config = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    }
    fetch('http://localhost:6001/plants', config)
      .then(r => r.json())
      .then(plant => onAddPlant(plant))
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlant.name} onChange={handleForm} />
        <input type="text" name="image" placeholder="Image URL" value={newPlant.image} onChange={handleForm} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price} onChange={handleForm} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
