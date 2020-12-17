import React, { Component, Fragment } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../Blog/FullPost/FullPost";
import { Route } from "react-router-dom";

class Posts extends Component {
  state = {
    post: [],
  };

  getData() {
    axios.get("/posts").then((resp) => {
      const posts = resp.data.slice(0, 4);
      const updatedPosts = posts.map((e) => {
        return {
          ...e,
          author: "Sai Krishna Akula",
        };
      });
      this.setState({ post: updatedPosts });
    });
  }


  componentDidMount() {
    this.getData();
  }

 
  posteSelected = (id) => {
    this.props.history.push("/" + id);
  };

  render() {
    const posts = this.state.post.map((e) => {
      return (
        <Post
          key={e.id}
          clicked={() => {
            this.posteSelected(e.id);
          }}
          title={e.title}
          author={e.author}
        />
      );
    });
    return (
      <Fragment>
        <section
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            width: "80%",
            margin: "auto",
          }}
        >
          {posts}
        </section>
        <Route path="/:id" exact component={FullPost} />
      </Fragment>
    );
  }
}

export default Posts;
