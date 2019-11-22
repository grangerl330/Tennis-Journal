import React, { Component } from 'react'
import { withRouter } from 'react-router';

class WeaknessesModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      weaknesses: [],
      numberOfWeaknessInputs: 1,
      weakness1: "",
      id: props.currentUser.id
    }
  }

  componentDidMount(){
    this.setState({
      weaknesses: this.props.currentUser.weaknesses,
      numberOfWeaknessInputs: this.props.currentUser.weaknesses.length
    })

    this.props.currentUser.weaknesses.forEach((weakness, index) => {
      this.setState({
        [`weakness${index+1}`]: weakness
      })
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

    const user = Object.assign({}, this.state)

    user.weaknesses.length = 0

    for(let i=0; i < this.state.numberOfWeaknessInputs; i++) {
      if(!user.weaknesses.includes(this.state[`weakness${i+1}`]) && this.state[`weakness${i+1}`] !== undefined) {
        user.weaknesses.push(this.state[`weakness${i+1}`])
      }
    }

    this.props.updateCurrentUserInDatabase(user)

    this.props.history.push('/home')
  }

  renderWeaknessInputs = () => {
    let renderedInputs = []
    let numberOfExtraInputs = (this.state.numberOfWeaknessInputs - this.state.weaknesses.length)
    let totalInputs = numberOfExtraInputs + this.state.weaknesses.length
    let extraInputStartKey = this.state.weaknesses.length

    this.state.weaknesses.forEach((weakness, index) => {
      renderedInputs.push(
        <div className="input-group mt-1" key={index+1}>
          <div className="input-group-prepend">
            <span className="input-group-text">{index+1}</span>
          </div>
          <input className="form-control" type="text" name={`weakness${index+1}`} value={this.state[`weakness${index+1}`] || ''} onChange={this.handleOnChange} />
          <div className="input-group-append">
            <button onClick={this.removeWeakness} value={`weakness${index+1}`}><i className="fas fa-trash-alt text-secondary"></i></button>
          </div>
        </div>
      )
    })

    if(numberOfExtraInputs > 0) {
      for (let i=extraInputStartKey; i < totalInputs; i++) {
        renderedInputs.push(
          <div className="input-group mt-1" key={i+1}>
            <div className="input-group-prepend">
              <span className="input-group-text">{i+1}</span>
            </div>
            <input className="form-control" type="text" name={`weakness${i+1}`} value={this.state[`weakness${i+1}`] || ''} onChange={this.handleOnChange} />
            <div className="input-group-append">
              <button onClick={this.removeWeakness} value={`weakness${i+1}`}><i className="fas fa-trash-alt text-secondary"></i></button>
            </div>
          </div>
        )
      }
    }

    return renderedInputs
  }

  addWeaknessInput = (event) => {
    event.preventDefault()
    let newWeakness = `weakness${this.state.numberOfWeaknessInputs+1}`

    this.setState({[newWeakness]: ""})
    this.setState({numberOfWeaknessInputs: this.state.numberOfWeaknessInputs + 1})
  }

  removeWeaknessInput = (event) => {
    event.preventDefault()

    if(this.state.numberOfWeaknessInputs > this.state.weaknesses.length) {
      this.setState({numberOfWeaknessInputs: this.state.numberOfWeaknessInputs - 1})
    }
  }

  removeWeakness = (event) => {
    event.preventDefault()

    const updatedWeaknesses = this.state.weaknesses.slice(0,-1)

    this.setState({
      [event.target.value]: undefined,
      numberOfWeaknessInputs: this.state.numberOfWeaknessInputs -1,
      weaknesses: updatedWeaknesses
    })
  }


  render(){
    return(
      <div className="modal fade" id="weaknessesModal">
        <div className="modal-dialog modal-lg w-50">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Weaknesses</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                {this.renderWeaknessInputs()}
              </form>
            </div>
            <div className="row justify-content-center mb-3">
              <div className="col-2 d-flex justify-content-center">
                <button className="btn btn-info btn-block" onClick={this.addWeaknessInput}><i className="fas fa-plus"></i></button>
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <button className="btn btn-dark" data-dismiss="modal" onClick={this.handleOnSubmit}>Update Weaknesses</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(WeaknessesModal)
