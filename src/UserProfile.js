import React, { Component } from 'react';
import FileInput from 'react-file-input';
import { storage, database } from './firebase';
import './UserProfile.css';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadProgress: 0
    };

    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  handleFileUpload(event) {
    const file = event.target.files[0];
    const { user } = this.props;

    const storageRef = storage.ref(`user-images/${user.uid}/${file.name}`);
    const userImageRef = database.ref('users').child(user.uid).child('image');

    const uploadTask = storageRef.put(file);

    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`${progress}%`);
    });

    uploadTask.then((snapshot) => {
      userImageRef.set(snapshot.downloadURL);
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
                     placeholder={image || "Spirit Animal Image"}
                     className="UserProfile--upload"
                     onChange={this.handleFileUpload} />
        </div>
      </article>
    );
  }
}

export default UserProfile;
