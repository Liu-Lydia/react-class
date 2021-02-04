import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { useState } from 'react'

import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import ProductBaby from './pages/ProductBaby'
import ProductMen from './pages/ProductMen'
import ProductWomen from './pages/ProductWomen'
import NotFoundPage from './pages/NotFoundPage'
import ProductCategory from './pages/ProductCategory'
import Member from './pages/Member'
import Student from './pages/Student'
import Register from './pages/Register'
import Calendar from './pages/Calendar'

import MyNavbar from './0128上課內容/MyNavbar'
import MyFooter from './0128上課內容/MyFooter'
import MainContent from './0128上課內容/MainContent'
import ScrollToTop from './0128上課內容/ScrollToTop'
// import BreadCrumb from './0128上課內容/BreadCrumb'
import MultiLevelBreadCrumb from './0128上課內容/MultiLevelBreadCrumb'

function App() {
  const [auth, setAuth] = useState(false)
  return (
    <Router>
      <>
        <MyNavbar auth={auth} />
        <MainContent>
          <MultiLevelBreadCrumb />
          {/* <h2>用Link元件</h2>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/product/baby">ProductBaby</Link>
          <Link to="/product/men">ProductMen</Link> */}

          {/* <h2>用a元件</h2>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/login">Login</a> */}

          {/* 路由表要加Switch */}
          <ScrollToTop>
            <Switch>
              <Route path="/Calendar">
                <Calendar />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/student">
                <Student />
              </Route>
              <Route path="/product/women">
                <ProductWomen />
              </Route>
              <Route path="/product/men">
                <ProductMen />
              </Route>
              <Route path="/product/baby/:id?">
                <ProductBaby />
              </Route>
              <Route path="/login">
                <Login auth={auth} setAuth={setAuth} />
              </Route>
              <Route path="/about">
                <About auth={auth} />
              </Route>
              {/* exact是精確的意思,首頁通常加 */}
              <Route exact path="/home">
                <Home auth={auth} />
              </Route>
              <Route path="/productcategory">
                <ProductCategory auth={auth} />
              </Route>
              <Route path="/member">
                <Member auth={auth} />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </ScrollToTop>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
