import React from 'react';
import {Router, Link} from '@reach/router';
import HomeComponent from './views/HomeComponent';
import DetailsComponent from './views/DetailsComponent';
import EditComponent from './views/EditComponent';
import CreateComponent from './views/CreateComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pet Adoption Database</h1>
        <h2>Adopt a cat or rat or something else....</h2>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/CreateComponent">Add a pet for adoption</Link>
        
      
        <Router>
        <CreateComponent path="/CreateComponent"/>
        <HomeComponent path="/" />
        <DetailsComponent path= "/product/:id"/>
        <EditComponent path="/product/:id/edit" />
        </Router>
      </header>
    </div>
  );
}
export default App;

