import React, { Component } from 'react'
import $ from 'jquery'
import classNames from 'classnames'
import { withRouter } from 'react-router';

class StatsOverviewModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      current_ranking: "",
      rankingIsValid: true,
      utr: "",
      id: "",
      formIsValid: false
    }
  }

  componentDidMount(){
    this.setState({
      current_ranking: this.props.currentUser.current_ranking,
      utr: this.props.currentUser.utr,
      id: this.props.currentUser.id
    })
  }

  formIsValid = () => {
    let isValid = true;

    if (this.state.current_ranking === "0") {
      this.setState({
        rankingIsValid: false
      })
      isValid = false
    }

    this.setState({
      formIsValid: isValid
    })

    return isValid
  }

  handleOnChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()

    if(this.formIsValid()) {
      const date = new Date()
      const month = date.getMonth()
      const year = date.getFullYear().toString()

      const user = this.state
      user.month = month
      user.year = year

      this.props.updateCurrentUserInDatabase(user)
      
      this.setState({
        rankingIsValid: true
      })

      $('#statsOverviewModal').modal('hide')
    }
  }

  render(){
    const rankingInputClass = classNames('form-control',
      { 'is-invalid': !this.state.rankingIsValid }
    );

    return(
      <div className="modal fade" id="statsOverviewModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times fa-sm text-grey"></i>
              </button>
            </div>
            <div className="modal-body px-5">
              <h5 className="text-green mb-4">Edit Your Stats</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="UTR">UTR</label>
                  <input className="form-control" type="text" name="utr" value={this.state.utr || ''} onChange={this.handleOnChange} placeholder="Enter your current UTR"/>
                </div>
                <div className="form-group">
                  <label htmlFor="Ranking">Ranking</label>
                  <input className={rankingInputClass} type="text" name="current_ranking" value={this.state.current_ranking || ''} onChange={this.handleOnChange} placeholder="Enter your current ranking"/>
                  <div className="invalid-feedback">
                    Ranking must be above 0
                  </div>
                </div>
                <div className="form-group text-right mt-5 mb-4">
                  <button className="btn mr-4 text-grey" data-dismiss="modal">Cancel</button>
                  <button className="btn btn-green" onClick={this.handleOnSubmit}>Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(StatsOverviewModal)
