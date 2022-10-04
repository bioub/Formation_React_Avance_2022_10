import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Select from "./Select/Select";
import SelectFC from "./Select/SelectFC";

type Props = {
 
}

type State = {
  prenoms: string[];
  selectedPrenom: string;
}

class App extends Component<Props, State> {
  state = {
    prenoms: ["Jean", "Paul", "Eric"],
    selectedPrenom: "Jean",
  };
  render() {
    console.log("render Home");
    const { prenoms, selectedPrenom } = this.state;
    return (
      <div className="Home">
        <p>Vous avez sélectionné : {selectedPrenom}</p>
        <Select
          items={prenoms}
          selected={selectedPrenom}
          onSelected={(item) => this.setState({ selectedPrenom: item })}
        />
        <SelectFC
          selected={selectedPrenom}
          items={prenoms}
          onSelected={(item) => this.setState({ selectedPrenom: item })}
        />
      </div>
    );
  }
}

export default App;
