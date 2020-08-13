import React, { Component } from "react";
import "./gallery.css";

import { Link } from "react-router-dom";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    fetch("https://picsum.photos/v2/list?page=2&limit=5")
      .then((response) => {
        console.log({ response });
        return response.json();
      })
      .then((data) => {
        console.log({ data });
        this.setState({ list: data });
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Gallery</h1>
        {this.state.list.map((list) => (
          <div className="card">
            <div className="card-body">
              <a href={list.url}>
                <img
                  className="card-image"
                  src={list.download_url}
                  width={list.width / 10}
                />
              </a>
              <h4 className="card-author">AUTHOR : {list.author}</h4>
              <hr />
            </div>
          </div>
        ))}
        <Link to="/" className="home">
          RETURN TO HOME
        </Link>
      </div>
    );
  }
}
export default Gallery;
