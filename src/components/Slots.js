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
      return slot.title === filter || slot.lead === filter || slot.support === filter
    } )
    this.setState({slots: filtered})
  }
  componentWillMount(){
    this.setState({slots: this.props.slots}, _=>{
      console.log("ss cb in componentWillMount");
      console.log(`props: ${this.props.slots.length}`);
      console.log(`state: ${this.state.slots.length}`);
      console.log("ss cb in componentWillMount");
    })
  }
  render(){
    console.log("render");
    console.log(`props: ${this.props.slots.length}`);
    console.log(`state: ${this.state.slots.length}`);
    console.log("render");
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
