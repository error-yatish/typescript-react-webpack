import * as React from 'react';
import FunctionalComponent from './components/FunctionalComponent';

interface HelloProps {
  name: string;
}

interface State {
  isNameDisplay: boolean;
}

class Hello extends React.Component<HelloProps, State> {

  state: State = {
    isNameDisplay: false
  }

  render() {
    const { isNameDisplay } = this.state

    return <div className="alert">
      <p onClick={()=>this.setState(ps=>({isNameDisplay: !ps.isNameDisplay}))}>Hello,</p> {isNameDisplay ? this.props.name : ''}
      <FunctionalComponent enthusiasmLevel={2} firstName="yatish" />
    </div>;
  }
}

export default Hello;