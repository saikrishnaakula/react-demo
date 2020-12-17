import React, { Component } from "react";

import "./Blog.css";
import Posts from "../Posts/Posts";
import { Route, NavLink,Switch, Redirect } from "react-router-dom";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/" component={Posts} />
          <Route render={()=><h1>Page not found!!!</h1>}/>
          {/* <Redirect from="/post" to="/"></Redirect> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
