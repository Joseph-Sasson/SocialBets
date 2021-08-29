import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  
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
                  path="/login"
                  // component={() => <Login />}
                />
                <Route
                  path="/signup"
                  // component={() => <Signup />}
                />
                <Route 
                  path="/"
                  // component={() => <Login />}
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
                  <Link to={"/profile"}>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
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
                // component={() => (<Home />)}
              />
              <Route
                path="/profile"
                // component={() => (<Profile />)}
              />
              <Route
                path="/"
                // component={() => (<Home />)}
              />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
