import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';


// Styles (hooks)
import useStyles from 'styles/components/ShowMoreButton';

// Actions
import { showMoreBeers } from 'actions';


const ShowMoreButton = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const handleShow = (event) => {
    event.preventDefault();
    setPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (page > 1) {
      dispatch(showMoreBeers(page));
    }
  }, [page]);

  return (
    <div className={classes.Root}>
      <button className={classes.showMoreButton} type="button" onClick={handleShow}>Show More</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  beers: state.beers.current,
});

ShowMoreButton.displayName = 'ShowMoreButton';

export default connect(
  mapStateToProps,
)(ShowMoreButton);
