import './App.css';
import { NavLink, Route, Switch } from 'react-router-dom';

import Bitcoin from './screens/Bitcoin'
import Home from './screens/Home'
import Business from './screens/Business';

import {useState, useEffect} from 'react'
import axios from "axios"; 

function App() {

  const [business, setBusiness] = useState([]);
  const [bitcoin, setBitcoin] = useState([]);
  
  useEffect(() => {
    const getBusinessNews = async () => {
      const url = process.env.REACT_APP_API_URL+process.env.REACT_APP_API_KEY
      const res = await axios.get(url)
        setBusiness(res.data.articles)
    }

    getBusinessNews()
  }, [])

  useEffect(() => {
    const getBitcoinNews = async () => {
      const url = process.env.REACT_APP_BITCOIN_URL+process.env.REACT_APP_API_KEY
      const res = await axios.get(url)
      setBitcoin(res.data.articles)
    }
    getBitcoinNews()
  }, [])

  return (
    <div className="App">
      <div>
        <nav>
          <NavLink exact to="/">🏡 Home</NavLink>
          <NavLink to={"/business"}>💼 Business</NavLink>
          <NavLink to={"/bitcoin"}>👛 Bitcoin</NavLink> 
        </nav>
      </div>
      <main>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/business">
            <Business
            business={business}
            /></Route>
          <Route path="/bitcoin">
            <Bitcoin
            bitcoin={bitcoin}
            /></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;