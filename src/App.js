import header from "./components/header";
import React, { useState, useEffect } from "react";



function App() {

  const rocketsUrl = 'https://api.spacexdata.com/v4/rockets';
  const missionsUrl = 'https://api.spacexdata.com/v3/missions';

  const [rocketsData, setRocketsData] = useState([]);
  const [missionsData, setMissionsData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = (url, setDataFunc) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok.');
        }
        return res.json();
      })
      .then((data) => setDataFunc(data))
      .catch((error) => {
        setError(error.message);
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchData(rocketsUrl, setRocketsData);
    fetchData(missionsUrl, setMissionsData);
  }, []); 
  return (
    <div className="App">
      <header/>
      <h1 style={{color:"red",backgroundColor:"Black"}}>Rockets and Missions</h1>

        <div>
          <h2>Rockets</h2>
          {rocketsData.map((rocket, index) => (
            <div key={index} className="rocket" 
            style={{ width: "100%",
            height:"100%",
            backgroundColor: "#35D841",
            padding: 2,
            borderRadius: 10,
            margin: 10,
            display:"flex",
            gap: "6px"}}>
              <p>{rocket.id}</p>
              <br/>
              <p>{rocket.name}</p>
              <br/>
              <p>{rocket.description}</p>

            </div>
          ))}
        </div>
        <div>
          <h2>Missions</h2>
          {error ? (
            <p>Error fetching data: {error}</p>
          ) : (
            missionsData.map((mission, index) => (
              <div key={index} className="mission"style={{ width: "100%",
              height:"100%",
              backgroundColor: "#35D841",
              padding: 2,
              borderRadius: 10,
              margin: 10,
              display:"flex",
              gap: "6px"}}>
                <p>{mission.mission_name}</p>
                <br/>
                <p>{mission.mission_id}</p>
                <br/>
                <p>{mission.description}</p>

              </div>
            ))
          )}
        </div>
    </div>
  );
}

export default App;
