import React, { memo, useEffect } from 'react';
import { compose } from 'redux';

import { bool, func } from 'prop-types';

// HOCs
import { connect } from 'react-redux';

// Styles (hooks)
import useRootStyles from 'styles';

// Actions
import { getBeers } from 'actions';

// Components
import Loader from 'components/Loader';
import MainBody from 'components/MainBody';
import Header from '../components/Header';

const App = ({ load, ...props }) => {
  useRootStyles();
  useEffect(() => {
    props.getBeers();
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

const mapDispatchToProps = {
  getBeers,
};

App.displayName = 'App';

App.propTypes = {
  load: bool.isRequired,
  getBeers: func.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  memo,
)(App);
