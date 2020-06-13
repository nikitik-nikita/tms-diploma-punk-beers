import React, { memo, useEffect } from 'react';
import { compose } from 'redux';

import { bool } from 'prop-types';

// Hooks
import { connect, useDispatch } from 'react-redux';

// Styles (hooks)
import useRootStyles from 'styles';

// Actions
import { getBeers } from 'actions';

// Components
import Loader from 'components/Loader';
import Header from 'components/Header';
import MainBody from 'components/MainBody';

const App = ({ load }) => {
  useRootStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBeers());
  }, []);

  return (
    <>
      <Loader display={load} />
      <Header />
      <MainBody />
    </>
  );
};

const mapStateToProps = (state) => ({
  load: state.load,
});

App.displayName = 'App';

App.propTypes = {
  load: bool.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
  ),
  memo,
)(App);
