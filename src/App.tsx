import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

const App: FC = () => (
    <div className="App">
        <Router>
            <Header />
            <Switch>
                <Route exact={true} path="/" component={Login} />
                <Route path="/home" component={Home} />
            </Switch>
        </Router>
    </div>
);

export default App;
