import React, {Component} from 'react'

class Slot extends Component {
  componentWillMount(){
    let instructors = (this.props.lead) ? `${this.props.lead}`:''
      + (this.props.support) ? ` & ${this.props.support}`:'';
    let url = (typeof this.props.url === "object") ? "/#" : this.props.url;
    this.setState({instructors, url})
  }
  render(){
    return (
      <div className='slot'>
        <p className='title'><a href={this.state.url}>{this.props.title}</a></p>
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
