import './App.css';
import React from 'react';

import { useState } from 'react';

import Data from './Components/Data'
import MovieList from './Components/MovisList';


function App() {

  const [movie, setMovie] = useState(Data)

 
  return (
    <div className="App mt-5">
      
     <MovieList data={Data} />
    </div>
  );
}

export default App;
