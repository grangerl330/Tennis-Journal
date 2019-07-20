import React, { Component } from 'react'
import { withRouter } from 'react-router';

class ProfileForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      first_name: props.currentUser.first_name,
      last_name: props.currentUser.last_name,
      email: props.currentUser.email,
      id: props.currentUser.id
    }
  }

  handleOnChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()

    const user = this.state
    this.props.updateCurrentUserInDatabase(user)

    this.props.history.push('/profile')
  }

  render(){
    return(
      <div className={`form-window profile-form`}>
        <h2>Edit Profile</h2>
        <form onSubmit={this.handleOnSubmit} className="form-text">
          <p>
            <label>First Name:</label>
            <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleOnChange}/>
          </p>
          <p>
            <label>Last Name:</label>
            <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleOnChange}/>
          </p>
          <p>
            <label>Email:</label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleOnChange}/>
          </p>
          <button>Update Profile</button>
        </form>
      </div>
    )
  }
}

export default withRouter(ProfileForm)
