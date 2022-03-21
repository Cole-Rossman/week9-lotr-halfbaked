import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Main from './views/Main/Main';
import Books from './views/Books/Books';
import Characters from './views/Characters/Characters';
import Films from './views/Films/Films';



function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/films">
            <Films />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
