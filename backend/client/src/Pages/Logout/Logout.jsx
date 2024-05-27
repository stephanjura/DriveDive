import React, { useEffect } from 'react';

function Logout(props) {

  useEffect(() => {
    if (localStorage.getItem('authtok')) {
      localStorage.removeItem('authtok')
      return window.location.reload()
    } else {
      window.location = '/';
    }
  }, [])

  return null
}

export default Logout;