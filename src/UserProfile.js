import React, { Component } from 'react';
import FileInput from 'react-file-input';
import { storage, database } from './firebase';
import './UserProfile.css';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const file = event.target.files[0];
    const { user } = this.props;

    storage.ref(`user-images/${user.uid}/${file.name}`).put(file).then((snapshot) => {
      database.ref('users').child(user.uid).child('image').set(snapshot.downloadURL);
    });
  }

  render() {
    const { photoURL, displayName, email, image } = this.props;

    return (
      <article className="UserProfile">
        <img
          className="UserProfile--photo"
          src={ image || photoURL }
          alt={ displayName }
        />
        <div className="UserProfile--identification">
          <h3 className="UserProfile--displayName">{ displayName }</h3>
          <p className="UserProfile--email">{ email }</p>
          <FileInput name="UserProfile--fileinput"
                     accept=".png,.gif,.jpg"
                     placeholder="Spirit Animal Image"
                     className="UserProfile--upload"
                     onChange={this.handleChange} />
        </div>
      </article>
    );
  }
}

export default UserProfile;
