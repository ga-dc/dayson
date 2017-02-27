import React, {Component} from 'react'
import Slots from "../components/Slots"

class SlotsContainer extends Component {
  constructor(){
    super()
    this.state = {
      slots: []
    }
  }
  render(){
    return (
      <div>
        SlotsContainer
        <Slots />
      </div>
    )
  }

}

export default SlotsContainer
