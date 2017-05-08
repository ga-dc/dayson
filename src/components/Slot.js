import React, {Component} from 'react'

class Slot extends Component {
  constructor(){
    super();
    this.state = {
      instructors: "-"
    }
  }
  componentWillMount(){
    // console.log(this.props);
    let instructors = '-'
    if (this.props.lead) {instructors = this.props.lead}
    if (this.props.support) {instructors += ` & ${this.props.support}`}
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
