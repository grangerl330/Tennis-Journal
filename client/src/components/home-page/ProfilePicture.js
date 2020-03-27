import React, { Component } from 'react'
import defaultProfile from '../../images/Default-Profile.jpeg'

class ProfilePicture extends Component {
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    }, () => this.fileUploadHandler());
  };

  fileUploadHandler = () => {
    console.log("upload handler triggered")
    console.log(this.state.selectedFile)
  }

  render() {
    return(
      <div className="profile-pic">
		    <img src={defaultProfile} />
		    <div className="edit">
          <label htmlFor="myInput"><i className="fas fa-camera"></i></label>
          <input id="myInput" style={{display:'none'}} type={"file"} onChange={this.fileSelectedHandler} />
        </div>
	    </div>
    )
  }
}

export default ProfilePicture
