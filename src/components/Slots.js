import React, {Component} from 'react'

import Slot from "./Slot"
import Search from './Search'



class Slots extends Component {
  constructor(){
    super()
    this.state = {
      slots: [],
      filter: '',
      results: 0,
      leads: 0,
      supports: 0
    }
  }
  filterResults(filter, options){
    console.log(filter, options);
    let {leads, supports} = {leads: 0, supports: 0};

    let filtered = this.props.slots.filter( slot => {
      return Object.keys(slot).map( key => {
        if (typeof slot[key]==="string" && slot[key].includes(filter)){
          if (key==="lead") { leads++ }
          if (key==="support") { supports++ }
          return true;
        }
      }).includes(true);
    })
    if (options) {
      options.forEach(option=>{
        console.log(option);
        switch (option){
          case "week":
            break;
          case "staffless":
            console.log("oh shit");
            filtered = filtered.filter(slot=>slot.lead||slot.support)
            break;
          default:
            break;
        }
      })
    }
    this.setState({
      slots: filtered,
      results: filtered.length,
      leads: leads,
      supports: supports
    })
  }
  componentWillMount(){
    this.setState({
      slots: this.props.slots,
      results: this.props.slots.length
    })
  }
  render(){
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
      <main>
        <Search
          filterResults={ (filter, options) => this.filterResults(filter, options) }
          results={this.state.results}
          leads={this.state.leads}
          supports={this.state.supports}/>
        <div className='container'>
          {slots}
        </div>
      </main>
    )
  }
}

export default Slots
