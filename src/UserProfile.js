import React, { Component, PropTypes } from 'react';
import FileInput from 'react-file-input';
import { storage, database } from './firebase';
import './UserProfile.css';

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="UserProfile">
      </article>
    );
  }
}

UserProfile.propTypes = {
  displayName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  imageName: PropTypes.string,
  imageURL: PropTypes.string,
  photoURL: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired
};

export default UserProfile;
