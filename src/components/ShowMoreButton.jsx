import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { func } from 'prop-types';

// Styles (hooks)
import useStyles from 'styles/components/ShowMoreButton';

// Actions
import { addBeers } from 'actions';


const ShowMoreButton = ({ addBeers }) => {
  const classes = useStyles();
  const [valueData, setValue] = useState({ number: 18 });

  const handleSearch = (event) => {
    event.preventDefault();
    const newValueData = valueData.number + 6;
    setValue({ number: newValueData });
  };
  console.log(valueData);

  const MORE_BEERS = `https://api.punkapi.com/v2/beers?page=1&per_page=${valueData.number}`;
  useEffect(() => {
    fetch(MORE_BEERS)
      .then((response) => response.json())

      .then((beers) => {
        addBeers(beers);
        console.log(beers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [valueData]);

  return (
    <div className={classes.Root}>
      <button className={classes.showMoreButton} type="button" onClick={handleSearch}>Show More</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  beers: state.beers.current,
});

const mapDispatchToProps = {
  addBeers,
};

ShowMoreButton.displayName = 'ShowMoreButton';

ShowMoreButton.propTypes = {
  addBeers: func.isRequired,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowMoreButton);
