import { Component } from "react";
import Select from "../Select/Select";


class Home extends Component {
  state = {
    prenoms: ['Jean', 'Paul', 'Eric'],
    selectedPrenom: 'Jean',
  };
  render() {
    const { prenoms, selectedPrenom } = this.state;
    return (
      <div className="Home">
        <p>Vous avez sélectionné : {selectedPrenom}</p>
        <Select
          items={prenoms}
          selected={selectedPrenom}
          onSelected={(item) => this.setState({ selectedPrenom: item })}
        />
      </div>
    );
  }
}

export default Home;
