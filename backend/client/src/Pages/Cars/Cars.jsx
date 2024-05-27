import React, { useEffect, useState } from 'react';
import { axiosInstToSv } from '../../utils/api';

function Cars() {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    axiosInstToSv.get('/cars').then(res => {
      setCars(res.data.cars);
    }).catch(err => {
      alert('ERROR!');
    })
  }, [])

  return (
    <div>
      {
        cars.map((e, id) => <div key={id}>
        
        <p>{JSON.stringify(e)} <a href={`/profile/${e.user_id}`}>owner</a></p>
      </div> )
      }
    </div>
  );
}

export default Cars;