import React, { Component } from 'react'
import { withRouter } from 'react-router';

class SkillsModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      strengths: [],
      numberOfStrengthInputs: 1,
      strength1: "",
      weaknesses: [],
      numberOfWeaknessInputs: 1,
      weakness1: "",
      id: props.currentUser.id
    }
  }

  componentDidMount(){
    this.setState({
      strengths: this.props.currentUser.strengths,
      numberOfStrengthInputs: this.props.currentUser.strengths.length,
      weaknesses: this.props.currentUser.weaknesses,
      numberOfWeaknessInputs: this.props.currentUser.weaknesses.length
    })

    this.props.currentUser.strengths.forEach((strength, index) => {
      this.setState({
        [`strength${index+1}`]: strength
      })
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

    user.strengths.length = 0
    user.weaknesses.length = 0

    for(let i=0; i < this.state.numberOfStrengthInputs; i++) {
      if(!user.strengths.includes(this.state[`strength${i+1}`]) && this.state[`strength${i+1}`] !== undefined) {
        user.strengths.push(this.state[`strength${i+1}`])
      }
    }

    for(let i=0; i < this.state.numberOfWeaknessInputs; i++) {
      if(!user.weaknesses.includes(this.state[`weakness${i+1}`]) && this.state[`weakness${i+1}`] !== undefined) {
        user.weaknesses.push(this.state[`weakness${i+1}`])
      }
    }

    this.props.updateCurrentUserInDatabase(user)

    this.props.history.push('/home')
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
            <div className="input-group-append">
              <button onClick={this.removeStrength} value={`strength${i+1}`}><i className="fas fa-trash-alt text-secondary"></i></button>
            </div>
          </div>
        )
      }
    }

    return renderedInputs
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

  addStrengthInput = (event) => {
    event.preventDefault()
    let newStrength = `strength${this.state.numberOfStrengthInputs+1}`

    this.setState({[newStrength]: ""})
    this.setState({numberOfStrengthInputs: this.state.numberOfStrengthInputs + 1})
  }

  addWeaknessInput = (event) => {
    event.preventDefault()
    let newWeakness = `weakness${this.state.numberOfWeaknessInputs+1}`

    this.setState({[newWeakness]: ""})
    this.setState({numberOfWeaknessInputs: this.state.numberOfWeaknessInputs + 1})
  }

  removeStrengthInput = (event) => {
    event.preventDefault()

    if(this.state.numberOfStrengthInputs > this.state.strengths.length) {
      this.setState({numberOfStrengthInputs: this.state.numberOfStrengthInputs - 1})
    }
  }

  removeWeaknessInput = (event) => {
    event.preventDefault()

    if(this.state.numberOfWeaknessInputs > this.state.weaknesses.length) {
      this.setState({numberOfWeaknessInputs: this.state.numberOfWeaknessInputs - 1})
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
      <div className="modal fade" id="skillsModal">
        <div className="modal-dialog modal-lg w-50">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Skills</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
              <div className="col-6">
                <div className="row justify-content-center">
                  <h3>Strengths</h3>
                  <form>
                    {this.renderStrengthInputs()}
                  </form>
                </div>
                <div className="row justify-content-center my-3">
                  <div className="col-3 d-flex justify-content-center">
                    <button className="btn btn-info btn-block" onClick={this.addStrengthInput}><i className="fas fa-plus"></i></button>
                  </div>
                </div>
              </div>
                <div className="col-6">
                  <div className="row justify-content-center">
                    <h3>Weaknesses</h3>
                    <form>
                      {this.renderWeaknessInputs()}
                    </form>
                  </div>
                  <div className="row justify-content-center my-3">
                    <div className="col-3 d-flex justify-content-center">
                      <button className="btn btn-info btn-block" onClick={this.addWeaknessInput}><i className="fas fa-plus"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <button className="btn btn-dark" data-dismiss="modal" onClick={this.handleOnSubmit}>Update Skills</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SkillsModal)
