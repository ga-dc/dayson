import React, {Component} from 'react'

class Slot extends Component {
  render(){
    return (
      <div className="slot">
        <p>week: {this.props.week}</p>
        <p>title: {this.props.title}</p>
        <p>time: {this.props.time}</p>
        <p>date: {this.props.date}</p>
        <p>sortDate: {this.props.sortDate}</p>
        <p>lead: {this.props.lead}</p>
        <p>support: {this.props.support}</p>
        // this.props.url /p
      </div>
    )
  }
}

export default Slot
