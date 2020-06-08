import React from 'react';

// Styles (hooks)
import useStyles from 'styles/components/MainBodyFooter';


const MainBodyFooter = () => {
  const classes = useStyles();

  return (
    <div className={classes.Root}>
      <button type="button">Show More</button>
    </div>
  );
};

MainBodyFooter.displayName = 'MainBodyFooter';

export default MainBodyFooter;
