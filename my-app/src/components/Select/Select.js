import { Component } from 'react';
import './Select.css';

class Select extends Component {
  state = {
    open: false,
  };

  handleClick = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  render() {
    const { items, selected, onSelected } = this.props;
    const { open } = this.state;

    return (
      <div className="Select" onClick={this.handleClick}>
        <div className="selected">{selected}</div>
        {open && (
          <div className="items">
            {items.map((item) => (
              <div className="item" key={item} onClick={() => onSelected(item)}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Select;
