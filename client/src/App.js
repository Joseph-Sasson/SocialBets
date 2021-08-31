import React, { useState, useEffect } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/Home";
import Account from "./component/Account";
import MyBets from "./component/MyBets";

function App() {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [wagerForm, setWagerForm] = useState({
    wager: '',
    winnings: ""
  })
  
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogout() {
    if (window.confirm("Are you sure you want to logout?"))
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
  }

  const addHomeToSlip =(bet)=>{
    // console.log(bet.home_team, bet.home_odds)
  }

  const addAwayToSlip =(bet)=>{
    // console.log(bet.away_team, bet.away_odds)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (window.confirm("Are you sure you want to place this wager?"))
      console.log(wagerForm)
  };

  const mustLogin =(e)=>{
    alert("You must be logged in to place a bet!")
  }

  const mustLoginSubmit =(e)=>{
    e.preventDefault()
    alert("You must be logged in to place a bet!")
  }
  
  if (!user) {
    return (
      <Router>
        <div>
          <nav>
            <div>
              <Link to={"/"}>
                SocialBets
              </Link>
              <div>
                <ul>
                  <li>
                    <Link to={"/home"}>
                      Home
                    </Link>
                  </li>  
                  <li>
                    <Link to={"/login"}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to={"/signup"}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div>
            <div>
              <Switch>
                <Route
                  path="/home"
                  component={() => (<Home home={mustLogin} away={mustLogin} submit={mustLoginSubmit} wagerForm={wagerForm} setWagerForm={setWagerForm} />)}
                />
                <Route
                  path="/login"
                  component={() => <Login setUser={setUser} />}
                />
                <Route
                  path="/signup"
                  component={() => <Signup setUser={setUser} />}
                />
                <Route 
                  path="/"
                  component={() => <Login setUser={setUser} />}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <div>
        <nav>
          <div>
            <Link to={"/"}>
              SocialBets
            </Link>
            <div>
              <ul>
                <li>
                  <Link to={"/home"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/mybets"}>
                    My Bets
                  </Link>
                </li>
                <li>
                  <Link to={"/account"}>
                    My Account
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div>
          <div>
            <Switch>
              <Route
                path="/home"
                component={() => (<Home home={addHomeToSlip} away={addAwayToSlip} submit={handleSubmit} errors={errors} wagerForm={wagerForm} setWagerForm={setWagerForm} />)}
              />
              <Route
                path="/mybets"
                component={() => (<MyBets />)}
              />
              <Route
                path="/account"
                component={() => (<Account user={user} setUser={setUser} />)}
              />
              <Route
                path="/"
                component={() => (<Home home={addHomeToSlip} away={addAwayToSlip} submit={handleSubmit} errors={errors} wagerForm={wagerForm} setWagerForm={setWagerForm} />)}
              />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
