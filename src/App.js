import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';


const App = () => (
  <div>
    <Navigation />
  <Route exact path='/' component={Home} />
  <Route path='/about' component={About} />
  <Route path='/contact' component={Contact} />

{/* // new way */}

{/* <Switch>
 <Route exact path='/'>
<Home />
</Route>
<Route exact path='/about'>
<About />
</Route>
<Route exact path='/contact'>
<Contact />
</Route>
</Switch> */}


  </div>

);




export default App;
