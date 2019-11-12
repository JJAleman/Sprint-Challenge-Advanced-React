import React from "react";

class PlayerCard extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          players: res
        });
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  render() {
    return (
        <div>
            {this.state.players.map(player => (
                <div key={player.id}>
                <h1>{player.name}</h1>
                <h2>{player.country}</h2>
                <h2>{player.searches}</h2>
                </div>
            ))}
        </div>
    );
  }
}

export default PlayerCard;
