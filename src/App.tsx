import { Button } from 'antd';
import * as React from 'react';
import Login from './pages/Login/index';

class App extends React.Component {
  public componentDidMount() {
    console.log(123);
  }
  public render() {
    return (
      <div className="App">
      <Login/>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button>asd</Button>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
