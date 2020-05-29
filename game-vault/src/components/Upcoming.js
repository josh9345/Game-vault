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
      return data.map((game) => {
        return (
          <div className="upcoming-game">
            <div className="image">
              <img
                className="upcoming-thumbnail"
                src={game.background_image}
                alt=""
              />
            </div>
            <p>{game.name}</p>
          </div>
        );
      });
    }
  }
}

export default Upcoming;
