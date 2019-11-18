import React, { Component } from 'react'
import { withRouter } from 'react-router';

class OpponentUTRModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      utr: "",
      id: ""
    }
  }

  componentDidMount(){
    this.setState({
      utr: this.props.opponent.utr,
      id: this.props.opponent.id
    })
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

    this.setState({
      utr: this.state.utr
    })

    this.props.history.push(`/opponents/${this.props.opponent.id}`)
  }

  render() {
    return (
      <div className="modal fade mt-3" id="opponentUTRModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit UTR</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Opponent UTR">UTR: </label>
                  <input className="form-control" name="utr" onChange={this.handleOnChange} value={this.state.utr} />
                </div>
                <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                  Update UTR
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(OpponentUTRModal)
