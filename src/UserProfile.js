import React, { Component } from 'react';
import FileInput from 'react-file-input';
import { storage, database } from './firebase';
import url from 'url';
import './UserProfile.css';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadProgress: null
    };

    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  handleFileUpload(event) {
    const file = event.target.files[0];
    const { uid } = this.props;

    const storageRef = storage.ref('user-images').child(uid).child(file.name);
    const userImageRef = database.ref('users').child(uid).child('image');

    const uploadTask = storageRef.put(file);

    uploadTask.on('state_changed', (snapshot) => {
      const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.setState({ uploadProgress });
    });

    uploadTask.then((snapshot) => {
      userImageRef.set(snapshot.downloadURL);
      this.setState({ uploadProgress: null });
    });
  }

  render() {
    const { photoURL, displayName, email, image } = this.props;
    const { uploadProgress } = this.state;

    return (
      <article className="UserProfile">
        { uploadProgress && <div>{ uploadProgress }%</div> }
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
