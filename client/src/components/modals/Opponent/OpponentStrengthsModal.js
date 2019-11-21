import React, { Component } from 'react'
import { withRouter } from 'react-router';

class OpponentStrengthsModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      strengths: [],
      numberOfStrengthInputs: 1,
      strength1: "",
      id: props.opponent.id
    }
  }

  componentDidMount(){
    this.setState({
      strengths: this.props.opponent.strengths,
      numberOfStrengthInputs: this.props.opponent.strengths.length
    })

    this.props.opponent.strengths.forEach((strength, index) => {
      this.setState({
        [`strength${index+1}`]: strength
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

    const opponent = Object.assign({}, this.state)

    opponent.strengths.length = 0

    for(let i=0; i < this.state.numberOfStrengthInputs; i++) {
      if(!opponent.strengths.includes(this.state[`strength${i+1}`]) && this.state[`strength${i+1}`] !== undefined) {
        opponent.strengths.push(this.state[`strength${i+1}`])
      }
    }

    this.props.editOpponentInDatabase(opponent)

    this.props.history.push(`/opponents/${opponent.id}`)
  }

  renderStrengthInputs = () => {
    let renderedInputs = []
    let numberOfExtraInputs = (this.state.numberOfStrengthInputs - this.state.strengths.length)
    let totalInputs = numberOfExtraInputs + this.state.strengths.length
    let extraInputStartKey = this.state.strengths.length

    this.state.strengths.forEach((strength, index) => {
      renderedInputs.push(
        <div className="input-group mt-1" key={index+1}>
          <div className="input-group-prepend">
            <span className="input-group-text">{index+1}</span>
          </div>
          <input className="form-control" type="text" name={`strength${index+1}`} value={this.state[`strength${index+1}`] || ''} onChange={this.handleOnChange} />
          <div className="input-group-append">
            <button onClick={this.removeStrength} value={`strength${index+1}`}><i className="fas fa-trash-alt text-secondary"></i></button>
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
            <input className="form-control" type="text" name={`strength${i+1}`} value={this.state[`strength${i+1}`] || ''} onChange={this.handleOnChange} />
          </div>
        )
      }
    }

    return renderedInputs
  }

  addStrengthInput = (event) => {
    event.preventDefault()
    let newStrength = `strength${this.state.numberOfStrengthInputs+1}`

    this.setState({[newStrength]: ""})
    this.setState({numberOfStrengthInputs: this.state.numberOfStrengthInputs + 1})
  }

  removeStrengthInput = (event) => {
    event.preventDefault()

    if(this.state.numberOfStrengthInputs > this.state.strengths.length) {
      this.setState({numberOfStrengthInputs: this.state.numberOfStrengthInputs - 1})
    }
  }

  removeStrength = (event) => {
    event.preventDefault()

    const updatedStrengths = this.state.strengths.slice(0,-1)

    this.setState({
      [event.target.value]: undefined,
      numberOfStrengthInputs: this.state.numberOfStrengthInputs -1,
      strengths: updatedStrengths
    })
  }


  render(){
    return(
      <div className="modal fade" id="opponentStrengthsModal">
        <div className="modal-dialog modal-lg w-50">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Strengths</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                {this.renderStrengthInputs()}
              </form>
            </div>
            <div className="row justify-content-center mb-3">
              <div className="col-2 d-flex justify-content-center">
                <button className="btn btn-info btn-block" onClick={this.addStrengthInput}><i className="fas fa-plus"></i></button>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <button className="btn btn-info btn-block" onClick={this.removeStrengthInput}><i className="fas fa-minus"></i></button>
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <button className="btn btn-dark" data-dismiss="modal" onClick={this.handleOnSubmit}>Update Strengths</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(OpponentStrengthsModal)
