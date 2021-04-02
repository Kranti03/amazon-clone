import { useState, useEffect } from 'react'
import Header from './Header'
import './App.css';
import Cart from './Cart'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { db } from './firebase'

function App() {

  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot)=>{
      const tempItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          product: doc.data()
      }))
      setCartItems(tempItems);
    })
  }

  useEffect(() => {
    getCartItems();
  }, [])

  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
          <Route path="/"> {/*default page that routes to home with */}
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;
`