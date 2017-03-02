import React, { Component } from 'react';
import { auth, database } from './firebase';
import UserInfo from './UserInfo';
import SignIn from './SignIn';

class App extends Component {
  constructor(props) {
    super(props);
    this.usersRef = null;
    this.userRef = null;
    this.state = {
      user: null
    };
  }

  componentWillMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ user });
      this.usersRef = database.child('users');
      this.userRef = database.child('users').child(user.uid);
    });
  }

  render() {
    const { user } = this.state;

    return (
      <div className="App">
        <header className="App--header">
          <h1>Social Animals</h1>
        </header>
        { user
          ? <div>
              <UserInfo user={user} />
            </div>
          : <SignIn />
        }
      </div>
    );
  }
}

export default App;
