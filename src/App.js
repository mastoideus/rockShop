import React from 'react'
import Layout from './Layout/Layout'

import Main from './Main/Main/Main'
import  './App.css'
import {Route, Switch} from 'react-router-dom'
import Orders from './Orders/Orders'
import ContactUs from './ContactUs/ContactUs'

function App() {
  return (
    <div className="App">
      <Layout>
             <Switch>
               <Route path='/contact-us' component={ContactUs}/>
               <Route path='/orders' exact component={Orders}/>
               <Route path='/' component={Main} />
             </Switch>
              
      </Layout>
    </div>
  );
}

export default App;
