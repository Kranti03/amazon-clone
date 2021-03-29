import Header from './Header'
import './App.css';
import Cart from './Cart'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
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