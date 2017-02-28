import React, {Component} from 'react'

class Search extends Component {
  constructor(){
    super()
    this.state = {search: ""}
  }
  search(evt){
    let searchText = evt.target.value;
    this.props.filterResults(searchText);
  }
  render(){
    return (
      <header>
        <input
          className='search'
          type='text'
          autoFocus={true}
          onChange={(evt)=>this.search(evt)}
          placeholder="Search/Filter"/>
        <p> <input className='option' type='checkbox'/> Current Week </p>
        <p> <input className='option' type='checkbox'/> Hide Staffless Items </p>
        <span className='search'> {this.props.results} </span>
        <span className='search-label'>results </span>
        <span className='search'> {this.props.leads} </span>
        <span className='search-label'>lead </span>
        <span className='search'> {this.props.supports} </span>
        <span className='search-label'>support </span>
      </header>
    )
  }
}

export default Search
