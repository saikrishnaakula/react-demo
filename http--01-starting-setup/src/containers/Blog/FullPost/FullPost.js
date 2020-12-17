import React, { Component } from "react";

import "./FullPost.css";
import axios from "axios";

class FullPost extends Component {
  state = { post: null };

  getData() {
    if (this.props.match.params.id) {
      if (
        !this.state.post ||
        +this.props.match.params.id !== this.state.post.id
      ) {
        axios.get("/posts/" + this.props.match.params.id).then((resp) => {
          this.setState({ post: resp.data });
        });
      }
    }
  }
  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    this.getData();
  }
  deletePost = () => {
    axios.delete("/posts/" + this.props.match.params.id).then((resp) => {
      console.log(resp);
    });
  };
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading post....</p>;
    }
    if (this.state.post) {
      post = (
        <div className="FullPost">
          <h1>{this.state.post.title}</h1>
          <p>{this.state.post.body}</p>
          <div className="Edit">
            <button onClick={this.deletePost} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
