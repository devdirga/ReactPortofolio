import React from 'react'
import './assets/css/Bootstrap.min.css'
import './assets/css/Themes.css'
import './assets/css/Carousel.css'
import './assets/css/Resume.css'


import { NavLink, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portofolio from './pages/Portofolio'
import About from './pages/About'
import Contact from './pages/Contact'
import Learn from './pages/Learn'
import Resume from './pages/Resume'

const Navigation = () => (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><NavLink className="nav-link" exact activeClassName="active" to='/'>Dirgantoro</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" exact activeClassName="active" to='/resume'>Resume</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" exact activeClassName="active" to='/portofolio'>Portofolio </NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" exact activeClassName="active" to='/contact'>Contact</NavLink></li>
      </ul>
    </div>
  </nav>
)

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/resume' component={Resume}></Route>
    <Route exact path='/portofolio' component={Portofolio}></Route>
    <Route exact path='/contact' component={Contact}></Route>
    <Route exact path='/learn' component={Learn}></Route>
  </Switch>
)

const Header = () => (
  <header>
    <Navigation />
  </header>
)

const Footer = () => (
  <footer className="container">
    <p className="float-right"><a href="/#">Back to top</a></p>
    <p>&copy; 2017-2019 Company, Inc. &middot; <a href="/#">Privacy</a> &middot; <a href="/#">Terms</a></p>
  </footer>
)

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main role="main">
          <Main />
        </main>
        <Footer />
      </div>
    )
  }
}
