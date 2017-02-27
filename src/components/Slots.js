import React, {Component} from 'react'

import Slot from "./Slot"


class Slots extends Component {
  render(){
    let slots = this.props.slots.map( (slot, i) =>{
      return (
        <Slot
          key={i}
          week={slot.week}
          title={slot.title}
          time={slot.time}
          date={slot.date}
          sortDate={slot.sortDate}
          classroom={slot.classroom}
          lead={slot.lead}
          support={slot.support}
          url={slot.url}
        />
      )
    })
    return (
      <div className='container'>
        {slots}
      </div>
    )
  }
}

export default Slots
