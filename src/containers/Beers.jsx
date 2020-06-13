import React from 'react';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import { array } from 'prop-types';

// Hooks
import { connect } from 'react-redux';

// Components
import FavouritesButton from 'containers/FavouriteButton';
import SearchError from 'components/SearchError';

// Styles (hooks)
import useStyles from 'styles/containers/Beers';

const Beers = ({ beers = [] }) => {
  const classes = useStyles();

  if (!beers.length) {
    return (
      <SearchError />
    );
  }
  return (
    <>
      <div className={classes.Root}>
        {beers.map((beer) => (
          <div className={classes.Beers__table__information} key={beer.id}>
            <div className={classes.beer__cell}>
              <div className={classes.beer__img__wrap}>
                <img className={classes.beer__img} alt={beer.name} src={beer.image_url} />
              </div>
              <div className={classes.beer__text}>
                <Link to={`/beer/${beer.id}`}>
                  <p className={classes.beer__text__title}>{beer.name}</p>
                </Link>
                <p className={classes.beer__text__description}>{beer.description}</p>
              </div>
              <FavouritesButton beer={beer} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};


const mapStateToProps = (state) => ({
  beers: state.beers,
});

Beers.displayName = 'Beers';

Beers.propTypes = {
  beers: array.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
  ),
)(Beers);
