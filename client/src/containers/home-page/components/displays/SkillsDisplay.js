import React, { Component } from 'react'

class SkillsDisplay extends Component {
  constructor(props){
    super(props)

    this.state = {
      strengths: [],
      strength1: "",
      strengthCount: 0,
      strengthInputVisible: false,
      weaknesses: [],
      weakness1: "",
      weaknessCount: 0,
      weaknessInputVisible: false,
      id: props.currentUser.id
    }
  }

  componentDidMount(){
    this.setState({
      strengths: this.props.currentUser.strengths,
      strengthCount: this.props.currentUser.strengths.length,
      weaknesses: this.props.currentUser.weaknesses,
      weaknessCount: this.props.currentUser.weaknesses.length
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

  addStrengthChipInput = (event) => {
    event.preventDefault()
    let newStrength = `strength${this.state.strengthCount+1}`

    this.setState({
      [newStrength]: "",
      strengthCount: this.state.strengthCount + 1,
      strengthInputVisible: true
    })
  }

  addWeaknessChipInput = (event) => {
    event.preventDefault()
    let newWeakness = `weakness${this.state.weaknessCount+1}`

    this.setState({
      [newWeakness]: "",
      weaknessCount: this.state.weaknessCount + 1,
      weaknessInputVisible: true
    })
  }

  removeStrengthChipInput = event => {
    event.preventDefault()

    this.setState({
      strengthCount: this.state.strengthCount - 1,
      strengthInputVisible: false
    })
  }

  removeWeaknessChipInput = event => {
    event.preventDefault()

    this.setState({
      weaknessCount: this.state.weaknessCount - 1,
      weaknessInputVisible: false
    })
  }

  removeStrength = (event) => {
    event.preventDefault()

    const updatedStrengths = this.state.strengths.filter(strength => strength !== event.target.parentElement.previousElementSibling.textContent)

    const user = Object.assign({}, this.state)
    user.strengths = updatedStrengths
    this.props.updateCurrentUserInDatabase(user)

    this.setState({
      [event.target.dataset["foo"]]: undefined,
      strengthCount: this.state.strengthCount -1,
      strengths: [...this.state.strengths.filter(strength => strength !== event.target.parentElement.previousElementSibling.textContent)]
    })
  }

  removeWeakness = (event) => {
    event.preventDefault()

    const updatedWeaknesses = this.state.weaknesses.filter(weakness => weakness !== event.target.parentElement.previousElementSibling.textContent)

    const user = Object.assign({}, this.state)
    user.weaknesses = updatedWeaknesses
    this.props.updateCurrentUserInDatabase(user)

    this.setState({
      [event.target.value]: undefined,
      weaknessCount: this.state.weaknessCount -1,
      weaknesses: [...this.state.weaknesses.filter(weakness => weakness !== event.target.parentElement.previousElementSibling.textContent)]
    })
  }

  renderArrayDisplay = (array, removeFn, type) => {
    const result = []

    array.forEach((item, index) =>
      result.push(
        <li className="mt-2" key={index+1}>
          <div className="row skills-li hide-row">
            <div className="col-8 p-0 ml-auto">
              {item}
            </div>
            <div className="col-2 p-0 pr-1">
              <i className="fas fa-times fa-xs text-white hide" onClick={removeFn} data-foo={`${type}${index+1}`}></i>
            </div>
          </div>
        </li>
      )
    )

    return result
  }

  renderStrengthChipInput = () => {
    if(this.state.strengthInputVisible === true) {
      return (
        <li className="mt-2">
          <div className="row skills-li py-1">
            <div className="col-8 p-0 ml-auto">
              <form onSubmit={this.handleOnSubmit}>
                <input className="skills-li-input" type="text" name={`strength${this.state.strengthCount}`} value={this.state[`strength${this.state.strengthCount}`] || ''} onChange={this.handleOnChange} autoFocus="autofocus"/>
              </form>
            </div>
            <div className="col-2 p-0 pr-1">
              <i className="fas fa-times fa-xs text-white" onClick={this.removeStrengthChipInput}></i>
            </div>
          </div>
        </li>
      )
    }
  }

  renderWeaknessChipInput = () => {
    if(this.state.weaknessInputVisible === true) {
      return (
        <li className="mt-2">
          <div className="row skills-li py-1">
            <div className="col-8 p-0 ml-auto">
              <form onSubmit={this.handleOnSubmit}>
                <input className="skills-li-input" type="text" name={`weakness${this.state.weaknessCount}`} value={this.state[`weakness${this.state.weaknessCount}`] || ''} onChange={this.handleOnChange} autoFocus="autofocus"/>
              </form>
            </div>
            <div className="col-2 p-0 pr-1">
              <i className="fas fa-times fa-xs text-white" onClick={this.removeWeaknessChipInput}></i>
            </div>
          </div>
        </li>
      )
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

    const user = Object.assign({}, this.state)

    if(event.target.firstElementChild.name.includes("strength")){
      user.strengths.push(event.target.firstElementChild.value)
      this.setState({
        strengthInputVisible: false,
        strengths: user.strengths
      })
    } else if (event.target.firstElementChild.name.includes("weakness")){
      user.weaknesses.push(event.target.firstElementChild.value)
      this.setState({
        weaknessInputVisible: false,
        weaknesses: user.weaknesses
      })
    }

    this.props.updateCurrentUserInDatabase(user)
  }

  render() {
    return (
      <div id="Skills-Display" className="container border rounded shadow-light-green bg-white">
        <div className="row justify-content-center mt-3">
          <h4 className="text-green mx-auto">My Skills</h4>
        </div>
        <div className="row mt-2">
          <div className="col-6 text-center">
            <span className="mb-0">Strengths</span>
          </div>
          <div className="col-6 text-center">
            <span className="mb-0">Weaknesses</span>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-6 text-center">
            <div className="row justify-content-center">
              <div className="col-9">
                <ul className="p-0">
                  {this.renderArrayDisplay(this.state.strengths, this.removeStrength, "strength")}
                  {this.renderStrengthChipInput()}
                  <li>
                    <i className="fas fa-plus mt-2 fa-s text-green" onClick={this.addStrengthChipInput}></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6 text-center">
            <div className="row justify-content-center">
              <div className="col-9">
                <ul className="p-0">
                  {this.renderArrayDisplay(this.state.weaknesses, this.removeWeakness, "weakness")}
                  {this.renderWeaknessChipInput()}
                  <li>
                    <i className="fas fa-plus mt-2 fa-s text-green" onClick={this.addWeaknessChipInput}></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SkillsDisplay
