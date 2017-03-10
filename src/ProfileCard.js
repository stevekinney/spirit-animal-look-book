import React, { Component, PropTypes } from 'react';
import FileInput from 'react-file-input';
import { storage, database } from './firebase';
import './ProfileCard.css';

class ProfileCard extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const file = event.target.files[0];
    console.log(file);
  }

  render() {
    const { displayName, photoURL } = this.props.user
    return (
      <article className="ProfileCard">
        <img
          className="ProfileCard--photo"
          src={ photoURL }
        />
        <h3>{ displayName }</h3>
        <FileInput
          accept=".png,.gif,.jpg"
          placeholder="Select an image"
          onChange={this.handleSubmit}
        />
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
