// import { Component } from 'react';

import { useEffect, useState } from "react";

// export default class Clock extends Component {
//   constructor() {
//     super();
//     this.state = {
//       options: {
//         format: 'HH:mm:ss',
//       },
//       now: new Date(),
//     };
//   }
//   componentDidMount() {
//     this._interval = setInterval(() => {
//       // Object.assign() / shallow merge
//       this.setState({
//         options: {
//           ...this.state.options,
//           delay: 1000,
//         },
//         now: new Date(),
//       });
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this._interval);
//   }
//   render() {
//     // dans un composant stateful on manipule les props via this.props
//     return <div className="Clock">{this.state.now.toLocaleTimeString()}</div>;
//   }
// }

// function useClock() {
//   const [now, setNow] = useState(new Date());

//   useEffect(() => {
//     setInterval(() => {
//       setNow(new Date());
//     }, 2000);
//   }, [])

//   return now;
// }

function Clock() {
  // const now = useClock()
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 2000);
  }, [])

  return <div className="Clock">{now.toLocaleTimeString()}</div>;
}

export default Clock;
