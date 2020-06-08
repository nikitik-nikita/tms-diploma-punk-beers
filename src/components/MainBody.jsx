import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Beers from 'containers/Beers';
import MainBodyHeader from './MainBodyHeader';
import FavouriteBeers from './FavouriteBeers';
import MainBodyFooter from './MainBodyFooter';

const MainBody = () => (
  <div className="container">
    <MainBodyHeader />
    <Switch>
      <Route path="/" exact>
        <Beers />
      </Route>
      <Route path="/favourites">
        <FavouriteBeers />
      </Route>
    </Switch>
    <MainBodyFooter />
  </div>
);

MainBody.displayName = 'MainBody';

export default MainBody;
