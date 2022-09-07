import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.contexts';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser }= useContext(UserContext);
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-content' to='/'>
                <CrwnLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    <b>SHOP</b>
                </Link>
                {
                    currentUser ? (
                        <span className='nav-link' onClick={signOutUser} to='/auth'>
                            <b>SIGN OUT</b>
                        </span>
                    ) : (
                        <Link className='nav-link' to='/auth'>
                            <b>SIGN IN</b>
                        </Link>
                    )
                }
                
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;