import React from 'react';

import { Link } from 'react-router-dom';

// Styles (hooks)
import useStyles from 'styles/components/Logo';

const Logo = () => {
  const classes = useStyles();
  return (
    <Link className={classes.logo} to="/">Beans Love Bears</Link>
  );
};

Logo.displayName = 'Logo';

export default Logo;
