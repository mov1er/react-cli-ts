import { Button } from 'antd';
import * as React from 'react';
import Login from './pages/Login/index';
import { connect } from 'react-redux';

interface Props {
  name: string;
  enthusiasmLevel?: number;
  loggedUserState: any;
  dispatch(a: object);
}

class App extends React.Component<Props, any> {
  public state = {
    name: '123'
  }
  public onClick = (): void => {
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
    const { name } = this.state;
    console.log(loggedUserState);
    return (
      <div className="App">
      <Login/>
        <Button onClick={this.onClick}>{name}</Button>
      </div>
    );
  }
}

function mapStateToProps(state: {loggedUserState: object}) {
  const { loggedUserState } = state;
  return {loggedUserState };
}
export default connect(mapStateToProps)(App);
