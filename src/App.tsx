import { Button } from 'antd';
import * as React from 'react';
import Login from './pages/Login/index';
import { connect } from 'react-redux';

interface Props {
  name: string;
  enthusiasmLevel?: number;
  dispatch: any;
  loggedUserState: any;
}

class App extends React.Component<Props, any> {
  public onClick = () => {
    const { dispatch } = this.props;
    dispatch({
      info: {
        name: 'fucker',
        nickname: 'shitter'
      },
      type: 'SET_LOGGED_USER'
    })
  }
  public render() {
    const { loggedUserState } = this.props;
    console.log(loggedUserState);
    return (
      <div className="App">
      <Login/>
        <Button onClick={this.onClick}>asd</Button>
      </div>
    );
  }
}

function mapStateToProps(state: {loggedUserState: object}) {
  const { loggedUserState } = state;
  return {loggedUserState };
}

export default connect(mapStateToProps)(App);
