import React, { useState } from 'react';
import './App.css';
import Land from './components/LandPage';
import Navi from './components/Navi';
import ExmyCar1 from './components/mainCarousel';
import ExmyJumbo1 from './components/myJumbo';
import Food from './components/Foodpage';
import Mandy from './components/Mandypage';
import Live from './components/Livepage';
import Story from './components/Storypage';
import Home from './components/Homepage';
import CreativeValley from './components/CreativeValleypage';
import NearWall from './components/NearWallpage';
import beers from './components/Beerpage';
import { MAIN } from './shared/mainLand';
import { BrowserRouter } from 'react-router-dom';
import MyRouter from './components/myRouter';
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

export default function App() {
  return (
    <div>
      <MyRouter />
    </div>
  );
}

// You can think of these components as "pages"
// in your app.




