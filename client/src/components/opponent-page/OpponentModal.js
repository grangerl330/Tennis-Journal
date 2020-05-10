import React, { Component } from 'react'
import $ from 'jquery'
import classNames from 'classnames'
import { withRouter } from 'react-router';

class OpponentModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      first_name: "",
      firstNameIsValid: true,
      last_name: "",
      lastNameIsValid: true,
      age: "",
      handedness: "",
      utr: "",
      notes: "",
      id: "",
      formIsValid: false
    }
  }

  componentDidMount(){
    if(this.props.opponent) {
      this.setState({
        first_name: this.props.opponent.first_name,
        last_name: this.props.opponent.last_name,
        age: this.props.opponent.age,
        handedness: this.props.opponent.handedness,
        utr: this.props.opponent.utr,
        notes: this.props.opponent.notes,
        id: this.props.opponent.id
      })
    }
  }

  resetValidations = () => {
    this.setState({
      firstNameIsValid: true,
      lastNameIsValid: true,
      formIsValid: false,
    })
  }

  formIsValid = () => {
    let isValid = true;

    if (this.state.first_name === "") {
      this.setState({
        firstNameIsValid: false
      })
      isValid = false
    }

    if (this.state.last_name === "") {
      this.setState({
        lastNameIsValid: false
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

    const opponent = Object.assign({}, this.state)

    if(this.formIsValid()) {
      const match = this.state

      if(this.props.type === "Edit") {
        this.props.editOpponentInDatabase(match)
      } else {
        this.props.addOpponentToDatabase(match)
        this.props.history.push(`/opponents`)
      }

      $('#opponentModal').modal('hide')
    }
  }

  render() {
    const firstNameInputClass = classNames('form-control',
      { 'is-invalid': !this.state.firstNameIsValid }
    );

    const lastNameInputClass = classNames('form-control',
      { 'is-invalid': !this.state.lastNameIsValid }
    );

    return (
      <div className="modal fade mt-3" id="opponentModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times fa-sm text-grey"></i>
              </button>
            </div>
            <div className="modal-body px-5">
              <h5 className="text-green mb-4">{this.props.type} Opponent</h5>
              <form>
                <div className="row mt-3">
                  <div className="col-6">
                    <label htmlFor="First Name">First Name: </label>
                    <input className={firstNameInputClass} name="first_name" value={this.state.first_name} onChange={this.handleOnChange} />
                    <div className="invalid-feedback">
                      Please enter a First Name
                    </div>
                  </div>
                  <div className="col-6">
                    <label htmlFor="Last Name">Last Name: </label>
                    <input className={lastNameInputClass} name="last_name" value={this.state.last_name} onChange={this.handleOnChange} />
                    <div className="invalid-feedback">
                      Please enter a Last Name
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6">
                    <label htmlFor="Age">Age: </label>
                    <input className="form-control" name="age" value={this.state.age} onChange={this.handleOnChange} />
                  </div>
                  <div className="col-6">
                    <label htmlFor="Handedness">Plays: </label>
                    <select className="form-control" name="handedness" value={this.state.handedness} onChange={this.handleOnChange} >
                      <option disabled hidden></option>
                      <option value="Right Handed">Right Handed</option>
                      <option value="Left Handed">Left Handed</option>
                    </select>
                  </div>
                </div>
                <div className="row justify-content-center mt-3">
                  <div className="col-6">
                    <label htmlFor="UTR">UTR: </label>
                    <input className="form-control" name="utr" value={this.state.utr} onChange={this.handleOnChange} />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    <label htmlFor="Notes">Notes: </label>
                    <textarea className="form-control" rows="8" name="notes" value={this.state.notes} onChange={this.handleOnChange} />
                  </div>
                </div>
                <div className="form-group text-right mt-5 mb-4">
                  <button className="btn mr-4 text-grey" data-dismiss="modal">Cancel</button>
                  <button className="btn btn-green" onClick={this.handleOnSubmit}>{this.props.type === "Edit" ? "Update" : "Add"}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(OpponentModal)
