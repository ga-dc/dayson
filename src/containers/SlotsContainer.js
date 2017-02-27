import React, {Component} from 'react';
import Slots from '../components/Slots';
import SlotModel from '../models/SlotModel.js'

class SlotsContainer extends Component {
  constructor(){
    super()
    this.state = {
      slots: []
    }
  }
  componentDidMount(){
    this.getClasses();
  }
  getClasses(){
    SlotModel.all().then( res => this.setState({slots: res.data}) ).then(
      ()=>{console.log(this.state.slots)}
    )
  }
  render(){
    return (
        <Slots
          slots={this.state.slots}/>
    )
  }

}

export default SlotsContainer
