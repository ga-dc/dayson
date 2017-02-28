import React, {Component} from 'react';
import Slots from '../components/Slots';
import SlotModel from '../models/SlotModel.js'

class SlotsContainer extends Component {
  constructor(){
    super()
    this.state = {
      slotsRes: []
    }
  }
  componentDidMount(){
    this.getClasses();
  }
  getClasses(){
    SlotModel.all().then( res => this.setState({slotsRes: res.data}) ).then(
      // ()=>{console.log(this.state.slotsRes)}
    )
  }

  render(){
    return (
          <Slots
            slots={this.state.slotsRes}/>
    )
  }

}

export default SlotsContainer
