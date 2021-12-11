import React, {useState, useEffect} from 'react';

const Frontpage = () => {

  const [trains, setTrains] = useState([]);

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    fetch('https://customerrest.herokuapp.com/api/customers/3/trainings')
    .then(result => result.json())
    .then(data => setTrains(data))
    console.log(trains);
  }

  return (
    <div>
      <h1>Welcome to the frontpage</h1>
    </div>
  );
}

export default Frontpage;