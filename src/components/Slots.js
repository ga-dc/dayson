import React, {Component} from 'react'

import Slot from "./Slot"
import Search from './Search'



class Slots extends Component {
  constructor(){
    super()
    this.state = {
      slots: [],
      filter: ''
    }
  }
  filterResults(filter){
    let filtered = this.props.slots.filter( slot => {
      return Object.keys(slot).map( key => {
        if (typeof slot[key]==="string" && slot[key].includes(filter)){
          return true;
        }
      }).includes(true);
    })
    this.setState({slots: filtered}, _=>{console.log(`$$$$ ${filtered.length}`)})
  }
  componentWillMount(){
    this.setState({slots: this.props.slots}, _=>{
      console.log(`CMW: props: ${this.props.slots.length} state: ${this.state.slots.length}`);
    })
  }
  render(){
    console.log(`RNDR: props: ${this.props.slots.length} state: ${this.state.slots.length}`);
    let slots = this.state.slots.map( (slot, i) =>{
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
        <Search
          filterResults={ filter => this.filterResults(filter) }/>
        {slots}
      </div>
    )
  }
}

export default Slots
