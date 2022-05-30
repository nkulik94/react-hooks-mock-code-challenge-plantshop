import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantList, updateList] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(r => r.json())
      .then(plants => updateList(plants))
  }, [])

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plantList} />
    </main>
  );
}

export default PlantPage;
