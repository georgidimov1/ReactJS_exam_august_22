import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React  from 'react'
import Footer from './Footer/Footer'
import {LoginContext} from './contexts/LoginContext'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './Header/Header.css'
import Register from './Register/Register.js'
import Login from "./Login/Login"
import MyDetails from "./UserDetails/MyDetails.js"
import CardGrid from "./Card/CardGrid"
import Header from './Header/Header'
import Details from './Details/Details'
import Add from './Add/Add'
import Info from './Info/info';
import Infopage from './Infopage/Infopage.js';
import ErrorBoundary from './ErrorHandler/ErrorBoundary'
function App() {
  let authData = {'token': sessionStorage.getItem("authtoken"), 'username' : sessionStorage.getItem("username"), '_id' : sessionStorage.getItem("userId")};
 
  return (
      <LoginContext.Provider value={authData}>
        <div className="App bg-gra-01 background-img"
        style={{ 
          backgroundImage: 'url(/home-background.jpg)'
        }}
        >
          <div >
          <Router>
             <Header {...authData}/>
             <ErrorBoundary>
               <Switch>
                <Route exact path="/user/details/:id" render={props => <Details {...props} {...authData} />}/>
                <Route exact path="/user" render={()=><MyDetails/>}/>
                <Route exact path="/logout" />
                <Route exact path="/register" render={()=><Register/>}/>
                <Route exact path="/login" render={()=><Login/>}/>
                <Route exact path="/addproperty" render={(()=><Add/>)}/>
                <Route exact path="/myproperties/:id" render={()=><CardGrid {...authData}/>}/>
                <Route exact path="/properties/delete/:id"/>
                <Route exact path="/properties/edit/:id" render={(()=><Add/>)}/>
                <Route exact path="/properties/details/:id" render={(()=><Info {...authData}/>)}/>
                <Route exact path="/properties/:id/:id" render={(()=><Infopage {...authData}/>)}/>
                <Route exact path="/" render={()=><CardGrid {...authData}/>}/>
                <Route path="*" render={(()=>
                <div id="pageNotFound">404<br/>PAGE NOT FOUND</div>)}/>
             </Switch>
            </ErrorBoundary>
        </Router>
          <Footer/>
          </div>

        </div>
      </LoginContext.Provider>
  );
}

export default App;
