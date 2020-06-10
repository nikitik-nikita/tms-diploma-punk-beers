import React from 'react';
import { Link } from 'react-router-dom';

// Styles (hooks)
import useStyles from 'styles/components/Header';

// Components
import Logo from 'components/Logo';

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.Root}>
      <div className={`container ${classes.Header__container}`}>
        <Logo />
        <nav className={classes.Header__nav}>
          <Link className={classes.Header__nav_elements} to="/">Home</Link>
          <Link className={classes.favourites} to="/favourites">Favourites</Link>
        </nav>
      </div>
    </div>
  );
};


Header.displayName = 'Header';

export default Header;
