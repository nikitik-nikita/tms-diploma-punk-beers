import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { useParams } from 'react-router';
import { array, object } from 'prop-types';

// Hooks
import { connect } from 'react-redux';
import classNames from 'classnames';

// Styles (hooks)
import useStyles from 'styles/containers/Beers';

// Components
import FavouritesButton from './FavouriteButton';

const CartBeer = ({ beers = [], ...props }) => {
  const classes = useStyles();
  const [beer, setBeer] = useState({});

  const params = useParams();

  useEffect(() => {
    const { id } = params || {};

    if (beers.length && id) {
      const stateBeer = beers.find((item) => (item.id === +id));

      setBeer(stateBeer);
    } else if (props.beer) {
      setBeer(props.beer);
    }
  }, [params]);

  return (
    <div className={classNames(classes.Root,
      { [classes.Root__Card]: beer })}
    >
      <div className={classes.Beers__table__information}>
        <div className={classes.beer__cell}>
          <div className={classNames(classes.beer__img__wrap,
            { [classes.beer__img__wrap__Card]: beer })}
          >
            <img className={classes.beer__img} alt={beer.name} src={beer.image_url} />
          </div>
          <div className={classNames(classes.beer__text,
            { [classes.beer__text__Card]: beer })}
          >
            <p className={classNames(classes.beer__text__title,
              { [classes.beer__text__title__Card]: beer })}
            >
              {beer.name}
            </p>
            <p className={classNames(classes.beer__text__description,
              { [classes.beer__text__description__Card]: beer })}
            >
              {beer.description}
            </p>
          </div>
          <div className={classNames({ [classes.favourites__button__Card]: beer })}>
            <FavouritesButton beer={beer} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  beers: state.beers,
});

CartBeer.displayName = 'CartBeer';

CartBeer.propTypes = {
  beer: object,
  beers: array.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
  ),
)(CartBeer);
