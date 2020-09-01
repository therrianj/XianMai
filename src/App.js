import React, { useState } from 'react';
import './App.css';
import MyRouter from './components/myRouter';



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




