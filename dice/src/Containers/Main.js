import React, {Component} from 'react'
import classes from './Main.css'


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      min: 1,
      max: 6,
      number: this.generateNumber(1, 6)
    }
  }

  generateNumber = (min, max) => {
    const newNumber = Math.floor(Math.random() * (max - min + 1) + min)
    this.setState({number: newNumber})
    return newNumber
  }

  getNumber = () => {
    let minTemp = this.state.min
    let maxTemp = this.state.max
    if (minTemp > maxTemp) {
      this.setState({
        min: maxTemp,
        max: minTemp
      }, () => this.generateNumber(this.state.min, this.state.max))
    } else {
      this.generateNumber(minTemp, maxTemp)
    }
  }

  render() {
    return (
      <div>
      <h1>Roll the Dice</h1>
      <p className={classes.Main}>{this.state.number}</p>
      <button onClick={this.getNumber}>Roll the Dice</button>
    </div>)
  }
}

export default Main
