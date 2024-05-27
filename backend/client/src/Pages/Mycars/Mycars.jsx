import React, { useEffect, useState } from 'react';
import { axiosAuthInstToSv } from '../../utils/api';

function Mycars() {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    axiosAuthInstToSv.get('/mycars').then(res => {
      console.log(res.data);
      setCars(res.data.cars);
    }).catch(err => {
      alert('ERROR!');
    })
  }, [])

  const delCar = (e, id) => {
    axiosAuthInstToSv.delete(`/car/${id}`).then(res => {
      window.location.reload()
    }).catch(err => alert('ERROR'))
  }

  return (
    <div>
      {
        cars.map((e, id) => <div key={id}>
          {JSON.stringify(e)} <button onClick={eV => delCar(eV, e.id)}>delete</button>
        </div> )
      }
    </div>
  );
}

export default Mycars;