import React, { Component } from 'react'
import { withRouter } from 'react-router';

class NotesModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      notes: props.currentUser.notes,
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

    this.props.history.push('/home')
  }

  render(){
    return(
      <div className="modal fade" id="notesModal">
        <div className="modal-dialog modal-lg w-50">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Notes</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Things To Improve">Notes</label>
                  <textarea className="form-control" type="text" rows="10" name="notes" value={this.state.notes || ''} onChange={this.handleOnChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer justify-content-center">
              <button className="btn btn-dark" data-dismiss="modal" onClick={this.handleOnSubmit}>Update Notes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(NotesModal)
