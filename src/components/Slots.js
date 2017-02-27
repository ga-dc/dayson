import React, {Component} from 'react'

import Slot from "./Slot"


class Slots extends Component {
  render(){
    let slots = this.props.slots.map(slot=>{
      return (
        <Slot
          week={slot.week}
          title={slot.title}
          time={slot.time}
          date={slot.date}
          sortDate={slot.sortDate}
          lead={slot.lead}
          support={slot.support}
          url={slot.url}
        />
      )
    })
    return (
      <div>
        {slots}
      </div>
    )
  }
}

export default Slots
