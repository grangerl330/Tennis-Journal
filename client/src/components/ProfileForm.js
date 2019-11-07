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
      <div id="profile-form">
        <form onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="First Name">First Name:</label>
            <input className="form-control" type="text" name="first_name" value={this.state.first_name} onChange={this.handleOnChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="Last Name">Last Name:</label>
            <input className="form-control" type="text" name="last_name" value={this.state.last_name} onChange={this.handleOnChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email:</label>
            <input className="form-control" type="text" name="email" value={this.state.email} onChange={this.handleOnChange}/>
          </div>
          <button className="btn btn-primary btn-info mt-2">Update Profile</button>
        </form>
      </div>
    )
  }
}

// <div className={`form-window profile-form`}>
//   <NavLink className="close-window-button" to='/profile'>
//     <img src={closeWindowImg} alt="Close Window"/>
//   </NavLink>
//   <h2>Edit Profile</h2>
//   <form onSubmit={this.handleOnSubmit} className="form-text">
//     <p>
//       <label>First Name:</label>
//       <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleOnChange}/>
//     </p>
//     <p>
//       <label>Last Name:</label>
//       <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleOnChange}/>
//     </p>
//     <p>
//       <label>Email:</label>
//       <input type="text" name="email" value={this.state.email} onChange={this.handleOnChange}/>
//     </p>
//     <button>Save Profile</button>
//   </form>
// </div>

export default withRouter(ProfileForm)
