import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Beers from 'containers/Beers';
import MainBodyHeader from './MainBodyHeader';
import FavouriteBeers from './FavouriteBeers';
// import CartBeer from './CartBeer';

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
      {/* <Route path="/beer/:id"> */}
      {/*  <CartBeer /> */}
      {/* </Route> */}
    </Switch>
  </div>
);

MainBody.displayName = 'MainBody';

export default MainBody;
