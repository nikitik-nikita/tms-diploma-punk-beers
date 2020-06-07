import React from 'react';

import { string } from 'prop-types';

// Styles (hooks)
import useStyles from 'styles/components/BeerImage';

const BeersImage = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.beer__img__wrap}>
      <img className={classes.beer__img} alt={props.alt} src={props.src} />
    </div>
  );
};

BeersImage.displayName = 'BeersImage';

BeersImage.propTypes = {
  alt: string,
  src: string,
};

export default BeersImage;
