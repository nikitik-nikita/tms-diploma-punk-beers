import React from 'react';
import { compose } from 'redux';

import { array } from 'prop-types';

// HOCs
import { connect } from 'react-redux';

// Components
import BeersImage from 'components/BeersImage';
import FavouritesButton from 'components/FavouriteButton';
import SearchError from 'components/SearchError';
import ShowMoreButton from 'components/ShowMoreButton';

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
              <BeersImage
                src={beer.image_url}
                alt={beer.name}
                beer={beer}
              />
              <div className={classes.beer__text}>
                <p className={classes.beer__text__title}>{beer.name}</p>
                <p className={classes.beer__text__description}>{beer.description}</p>
              </div>
              <FavouritesButton beer={beer} />
            </div>
          </div>
        ))}
      </div>
      <ShowMoreButton />
    </>
  );
};


const mapStateToProps = (state) => ({
  beers: state.beers.current,
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
