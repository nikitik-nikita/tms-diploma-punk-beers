import React from 'react';

// Styles (hooks)
import useStyles from 'styles/components/MainBodyHeader';

// Components
import Search from './Search';


const MainBodyHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.Root}>
      <Search />
    </div>
  );
};

MainBodyHeader.displayName = 'MainBodyHeader';

export default MainBodyHeader;
