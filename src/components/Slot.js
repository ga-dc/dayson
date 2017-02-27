import React, {Component} from 'react'

class Slot extends Component {
  componentWillMount(){
    // console.log(this.props);
    let instructors =
      (this.props.lead) ? `${this.props.lead}`:''
    instructors +=
      (this.props.support) ? ` & ${this.props.support}`:'';

    this.setState({instructors:instructors})
  }
  render(){
    return (
      <div className='slot'>
        <p className='title'>{this.props.title}</p>
        <div className='info'>
          <p className='info-item'>Week {this.props.week}</p>
          <p className='info-item'>{this.props.time}</p>
          <p className='info-item'>{this.props.date}</p>
        </div>
        <p className='instructors'>{this.state.instructors}</p>
      </div>
    )
  }
}

export default Slot
