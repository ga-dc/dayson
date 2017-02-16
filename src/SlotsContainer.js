import React, {Component} from 'react'
import Slots from "./Slots"

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
