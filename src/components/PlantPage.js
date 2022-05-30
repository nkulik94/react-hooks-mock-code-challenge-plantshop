import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantList, updateList] = useState([])
  const [search, updateSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(r => r.json())
      .then(plants => updateList(plants))
  }, [])

  function addPlant(p) {
    updateList([...plantList, p])
  }

  const renderedPlants = plantList.filter(plant => plant.name.toUpperCase().match(search.toUpperCase()))

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search onSearch={updateSearch} searchValue={search} />
      <PlantList plants={renderedPlants} />
    </main>
  );
}

export default PlantPage;
