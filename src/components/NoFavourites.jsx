import React from 'react';

// Styles (hooks)
import useStyles from 'styles/components/NoFavourites';

const NoFavourites = () => {
  const classes = useStyles();

  return (
    <>
      <span />
      <div className={classes.Root}>
        No Favourites
      </div>
      <span />
    </>
  );
};

export default NoFavourites;
