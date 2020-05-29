import React, { Component } from "react";

class Upcoming extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: true,
    };
  }
  componentDidMount() {
    fetch(
      "https://api.rawg.io/api/games?dates=2020-06-10,2020-10-10&ordering=-added"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        this.setState({
          data: res.results,
          loading: false,
        });
      });
  }

  render() {
    const { data, loading } = this.state;
    console.log(data);
    while (loading) {
      return <div>loading</div>;
    }
    if (!loading) {
      return <div className="upcoming">{data.map((item) => {})}</div>;
    }
  }
}

export default Upcoming;
