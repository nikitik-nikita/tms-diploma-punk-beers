import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';

import { array, object } from 'prop-types';

// HOCs
import { connect } from 'react-redux';

// Styles (hooks)
import useStyles from 'styles/containers/Header';

// Components
import Logo from 'components/Logo';

const Header = ({ favourite, beers }) => {
  const classes = useStyles();

  const { beerIds } = favourite;
  const favouritesBeers = beers.filter((beer) => beerIds.includes(beer.id));
  console.log(favouritesBeers);

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

const mapStateToProps = (state) => ({
  beers: state.beers.current,
  favourite: state.favourite,
});

Header.propTypes = {
  beers: array.isRequired,
  favourite: object.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
  ),
)(Header);
