//import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Gallery from "./pages/Gallery/Gallery";
import User from "./pages/User/User";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/gallery" component={Gallery} />
//         </Switch>
//       </BrowserRouter>
//       <div>
//         <link to="/gallery"></link>
//       </div>
//       <div>User</div>
//     </div>
//   );
// }
import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <div className="link-wrapper">
            <Link to={`/gallery`} className="main-gallery">
              GALLERY
            </Link>
            <Link to={`/user`} className="main-user">
              EMPLOYEE DETAIL
            </Link>
          </div>
          <Switch>
            <Route exact path="/gallery" component={Gallery} />

            <Route exact path="/user" component={User} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
