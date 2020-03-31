import React, { Component } from 'react'
import { withRouter } from 'react-router';

class ImprovementModal extends Component {
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
            <div className="modal-header border-0">
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times fa-sm text-grey"></i>
              </button>
            </div>
            <div className="modal-body">
              <h5 className="text-green mb-4">Edit Things To Improve</h5>
              <form>
                <div className="form-group">
                  <textarea className="form-control" type="text" rows="10" name="notes" value={this.state.notes || ''} onChange={this.handleOnChange} />
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

export default withRouter(ImprovementModal)
