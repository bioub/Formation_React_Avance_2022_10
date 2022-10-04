class Component<P = {}, S = {}> {
  state!: S;
}

type Props = {}
type State = {
  name: string;
}

class MyComponent extends Component<Props, State> {
  state = {
    name: 'Romain'
  };
}
