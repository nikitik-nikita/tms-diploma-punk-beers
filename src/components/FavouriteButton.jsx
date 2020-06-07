import React, { useEffect, useState } from 'react';
import { compose } from 'redux';

import {
  func, array, object,
} from 'prop-types';

// HOKs
import { connect } from 'react-redux';
import classNames from 'classnames';

// Actions
import { addToFavourite, removeFromFavourite } from 'actions';

// Styles (hooks)
import useStyles from 'styles/components/FavouriteButton';

const FavouriteButton = ({
  beer,
  ...props
}) => {
  const classes = useStyles();
  const [active, setActiveData] = useState({ status: false });

  useEffect(() => {
    if (props.favourite.beerIds.find((item) => item === beer.id)) {
      setActiveData({ status: true });
    } else {
      setActiveData({ status: false });
    }
  }, [props.favourite, beer]);

  const payload = { beerId: beer.id };
  const handleFavourites = (event) => {
    event.preventDefault();
    setActiveData((prevState) => ({ status: !prevState.status }));
    active.status ? props.removeFromFavourite(payload) : props.addToFavourite(payload);
  };

  return (
    <>
      <a className={classes.wrapFavouriteButton} href="#" onClick={handleFavourites}>
        <svg className={classNames(classes.favouriteButton, { [classes.active]: active.status })} viewBox="0 0 576 512">
          <path
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
          />
        </svg>
      </a>
    </>
  );
};

const mapStateToProps = (state) => ({
  favourite: state.favourite,
});

const mapDispatchToProps = {
  addToFavourite,
  removeFromFavourite,
};

FavouriteButton.displayName = 'FavouritesButton';

FavouriteButton.propTypes = {
  beer: object.isRequired,
  favourite: object.isRequired,
  beerIds: array,
  addToFavourite: func.isRequired,
  removeFromFavourite: func.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(FavouriteButton);
