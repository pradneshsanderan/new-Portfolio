import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/index';
import Resume from  './components/Resume';
import {Route} from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import { Helmet } from 'react-helmet';
import Skills from './components/skills';
//main frame of the web app



//routes to each component
function App() {
  return (
    <div>
       <Helmet>
      <meta charSet="utf-8" />
        <title>
          Pradnesh Sanderan
        </title>
      </Helmet>
      <CssBaseline />
      <Route exact path="/" component={Home}/>
      <Route path="/education" component={Resume}/>
      <Route path="/projects" component={Portfolio} />
      <Route path="/contact" component={Contacts} />
      <Route path="/aboutme" component={Skills} />
    </div>

  );
}

export default App;
