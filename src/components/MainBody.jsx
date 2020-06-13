import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Beers from 'containers/Beers';
import FavouriteBeers from 'containers/FavouriteBeers';
import CartBeer from 'containers/CartBeer';
import ShowMoreButton from 'containers/ShowMoreButton';
import MainBodyHeader from './MainBodyHeader';

const MainBody = () => (
  <div className="container">
    <Switch>
      <Route path="/" exact>
        <MainBodyHeader />
        <Beers />
        <ShowMoreButton />
      </Route>
      <Route path="/search">
        <MainBodyHeader />
        <Beers />
      </Route>
      <Route path="/favourites">
        <FavouriteBeers />
      </Route>
      <Route path="/beer/:id">
        <CartBeer />
      </Route>
    </Switch>
  </div>
);

MainBody.displayName = 'MainBody';

export default MainBody;
