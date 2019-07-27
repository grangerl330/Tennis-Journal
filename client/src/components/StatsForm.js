import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router';

class StatsForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      ranking: props.currentUser.ranking,
      utr: props.currentUser.utr,
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

    this.props.history.push('/stats')
  }

  render(){
    return(
      <div className={`form-window stats-form`}>
        <NavLink className="close-window-button" to='/stats'>x</NavLink>
        <h2>Edit Your Stats</h2>
        <form onSubmit={this.handleOnSubmit} className="form-text">
          <p>
            <label>Current Ranking:</label>
            <input type="text" name="ranking" value={this.state.ranking} onChange={this.handleOnChange}/>
          </p>
          <p>
            <label>UTR:</label>
            <input type="text" name="utr" value={this.state.utr} onChange={this.handleOnChange}/>
          </p>
          <button>Save Stats</button>
        </form>
      </div>
    )
  }
}

export default withRouter(StatsForm)
