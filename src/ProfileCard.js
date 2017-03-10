import React, { Component, PropTypes } from 'react';
import FileInput from 'react-file-input';
import { storage, database } from './firebase';
import './ProfileCard.css';

class ProfileCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="ProfileCard">
      </article>
    );
  }
}

ProfileCard.propTypes = {
  displayName: PropTypes.string,
  email: PropTypes.string,
  imageName: PropTypes.string,
  imageURL: PropTypes.string,
  photoURL: PropTypes.string,
  uid: PropTypes.string
};

export default ProfileCard;
