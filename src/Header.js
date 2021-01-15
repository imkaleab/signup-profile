import React from 'react';
import {logout} from './frb/auth';
import {useHistory} from 'react-router-dom'
import {useSession} from './frb/userprovider'

function Header() {
  const history = useHistory();
  const { user } = useSession();

  const logoutUser = async () => {
    await logout();
    history.push('/signup');
  }
  return (
    <header>
      <h2>Welcome Home!</h2>
      {!!user && 
        <button className="ui secondary button logout" onClick={logoutUser}>
        LOGOUT
      </button>}
    </header>
  )
}

export default Header;