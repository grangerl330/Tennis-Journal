import React, { Component } from 'react'
import { withRouter } from 'react-router';

class OpponentStatModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      strengths: "",
      weaknesses: "",
      id: ""
    }
  }

  componentDidMount(){
    if(this.props.opponent){
      this.setState({
        strengths: this.props.opponent.strengths,
        weaknesses: this.props.opponent.weaknesses,
        id: this.props.opponent.id
      })
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

    const opponent = this.state

    this.props.editOpponentInDatabase(opponent)
  }

  render() {
    return (
      <div className="modal fade mt-3" id={`opponent${this.props.type}Modal`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times fa-sm text-grey"></i>
              </button>
            </div>
            <div className="modal-body px-5">
              <h5 className="text-green mb-4">Edit {this.props.type}</h5>
              <form>
                <div className="row mt-3">
                  <div className="col-12">
                    <textarea className="form-control" rows="8" name={this.props.type.toLowerCase()} onChange={this.handleOnChange} value={this.state[`${this.props.type.toLowerCase()}`] || ''} />
                  </div>
                </div>
                <div className="form-group text-right mt-5 mb-4">
                  <button className="btn mr-4 text-grey" data-dismiss="modal">Cancel</button>
                  <button className="btn btn-green" data-dismiss="modal" onClick={this.handleOnSubmit}>Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(OpponentStatModal)
