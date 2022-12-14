import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.contexts';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser }= useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
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
                <CartIcon />
                
            </div>
            {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;