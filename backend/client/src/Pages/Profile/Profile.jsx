import React, { useEffect, useState } from 'react';
import { axiosInstToSv } from '../../utils/api';
import { useParams } from 'react-router';

function Profile(props) {

  const { id } = useParams();
  const [user, setUser] = useState(null)

  useEffect(() => {
    axiosInstToSv.get(`/user/${id}`).then(res => {
      setUser(res.data.user);
    }).catch(err => alert('ERROR'));
  }, [id])

  return (
    <div>
      {user && <div>
        {user.name}, {user.email}
      </div> }
    </div>
  );
}

export default Profile;