import { Component } from 'react';
import Counter from '../Counter/Counter';
import LoadingButton from '../LoadingButton/LoadingButton';
import Select from '../Select/Select';
import SelectFC from '../Select/SelectFC';

class Home extends Component {
  state = {
    prenoms: ['Jean', 'Paul', 'Eric'],
    selectedPrenom: 'Jean',
  };
  render() {
    console.log('render Home');
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
          renderItem={(item) => item === selectedPrenom ? <b>{item}</b> : item}
        />

        <LoadingButton>
          <b>Text</b>
        </LoadingButton>

        <Counter renderValue={(count) => <b>{count}</b>}></Counter>
        <Counter>{(count) => <b>{count}</b>}</Counter>

        <Counter component={RenderCounterValue}></Counter>
      </div>
    );
  }
}

function RenderCounterValue({ value }) {
  return (
    <b className="Home">
      {value}
    </b>
  );
}

export default Home;

