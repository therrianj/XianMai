import React, { useState } from 'react';
import Navi from './Navi';
import ExmyCar1 from './mainCarousel';
import ExmyJumbo1 from './myJumbo';
import Food from './Foodpage';
import Mandy from './Mandypage';
import Live from './Livepage';
import Story from './Storypage';
import Home from './Homepage';
import CreativeValley from './CreativeValleypage';
import NearWall from './NearWallpage';
import Beer from './Beerpage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



// This site has 3 pages, all of which are rendered
// dynamically in (not server rendered).
//the browser 
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function MyRouter() {
  return (
    <Router>
      <div>
        <Navi />

       

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/beer">
            <Beer />
          </Route>
          <Route path="/food">
            <Food />
          </Route>
          <Route path="/story">
            <Story />
          </Route>
          <Route path="/mandy">
            <Mandy />
          </Route>
          <Route path="/live">
            <Live />
          </Route>
          <Route path="/creativevalley">
            <CreativeValley />
          </Route>
          <Route path="/nearwall">
            <NearWall />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

