import React, {Component} from 'react'

class Search extends Component {
  constructor(){
    super()
    this.state = {
      searchText: "",
      options: []
    }
  }
  search(){
    this.props.filterResults(this.state.searchText, this.state.options);
  }

  handleSearch(evt){
    let searchText = evt.target.value;
    this.setState({searchText}, _=>{this.search() });
  }
  handleToggle(evt){
    let options = this.state.options.slice();
    if (evt.target.checked){
      options.push(evt.target.name);
    } else {
      options.splice(options.indexOf(evt.target.name), 1)
    }

    this.setState({options}, _=>{this.search() });
  }
  render(){
    return (
      <header>
        <input
          className='search'
          type='text'
          autoFocus={true}
          onChange={(evt)=>this.handleSearch(evt)}
          placeholder="Search/Filter"/>
        <p>
          <input
            className='option'
            type='checkbox'
            name='week'
            onChange={ evt => this.handleToggle(evt) }/>
          <label htmlFor='week' className='search-label'>Current Week </label>
        </p>
        <p>
          <input
            className='option'
            type='checkbox'
            name='staffless'
            onChange={ evt => this.handleToggle(evt) }/>
          <label htmlFor='staffless' className='search-label'> Hide Staffless Items </label>
        </p>
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
