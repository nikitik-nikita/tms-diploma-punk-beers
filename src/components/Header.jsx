import React from 'react';

import { object } from 'prop-types';
import { Link } from 'react-router-dom';

// Hooks
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';

// Styles (hooks)
import useStyles from 'styles/components/Header';

// Components
import Logo from 'components/Logo';

// Actions
import { searchBeers } from 'actions';

const Header = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleHomeLink = (event) => {
    event.preventDefault();
    history.push('/');
    dispatch(searchBeers(''));
  };

  return (
    <div className={classes.Root}>
      <div className={`container ${classes.Header__container}`}>
        <Logo />
        <nav className={classes.Header__nav}>
          <Link className={classes.Header__nav_elements} to="/" onClick={handleHomeLink}>Home</Link>
          <Link className={classes.favourites} to="/favourites">Favourites</Link>
        </nav>
      </div>
    </div>
  );
};


Header.displayName = 'Header';

Header.propTypes = {
  history: object.isRequired,
};

export default withRouter(Header);
