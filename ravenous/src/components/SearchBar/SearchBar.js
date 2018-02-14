import React from 'react';
import './SearchBar.css';


const sortByOptions={
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}
getSortByClass(sortByOption){
  if(sortByOption==this.state){
    return 'active';
  }else{
    return '';
  }
}

/*handleSortByChange(sortByOption){
  this.setState(sortBy);
}
handleTermChange(event){
  this.setState(sortBy);
}
handleLocationChange(event){

}*/
class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      term:'',
      location:'',
      sortBy:'best_match'
    };
    this.handleSortByChange= this.handleSortByChange.bind(this);
    this.handleTermChange= this.handleTermChange.bind(this);
    this.handleLocationChange= this.handleLocationChange.bind(this);
    this.handleSearch= this.handleSearch.bind(this);
  handleSortByChange(sortByOption){
    this.setState(sortBy);
  }
  handleTermChange(event){
    this.setState({term: event.target.value});
  }
  handleLocationChange(event){
    this.setState({location: event.target.value});
  }
  handleSearch(event){
    this.props.searchYelp(term,location,sortBy);
    event.preventDefault();
  }

  renderSortByOptions(){
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue= sortByOptions[sortByOption];
      return <li key={sortByOptionValue}
       className={getSortByClass(sortByOptionValue)}
       onClick=handleSortByChange.bind(this,sortByOptionValue)>
       {sortByOption}<
       /li>;
  });}
  render(){
    return (<div className="SearchBar" >
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
    <input placeholder="Where?" onChange={this.handleLocationChange}/>
  </div>
  <div className="SearchBar-submit" onClick={this.handleSearch}>
    <a>Lets Go</a>
  </div>
</div>);
  }
}

export default SearchBar
