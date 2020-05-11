import React from 'react';
import searchIcon from '../images/search.svg';

const SearchBarRow = (props) => {

  const renderRightColumn = () => {
    if(props.type === 'tournaments') {
      return (
        <div className="col-8 col-md-3 text-center text-md-right mx-auto mr-md-5 ml-md-auto order-first order-md-last">
          <button data-toggle="modal" data-target="#tournamentModal" className="text-white btn btn-green px-4">
            Add Tournament
          </button>
        </div>
      )
    } else {
      return (
        <div className="col-1 mr-5 ml-auto my-auto">
          <span data-toggle="tooltip" data-placement="top" title={renderTitle()}>
            <i className="fas fa-info-circle fa-lg text-green"></i>
          </span>
        </div>
      )
    }
  }

  const renderTitle = () => {
    if(props.type === 'matches') {
      return (
        "Add a new match on a tournament's view page"
      )
    } else if(props.type === 'opponents') {
      return (
        "Add a new opponent by adding a new match on a tournament's view page"
      )
    }
  }

  return (
    <div className="row mt-4 pt-3 justify-content-center">
      <div className="col-8 col-md-3 mt-md-4 ml-3 ml-md-5 mr-md-auto">
        <div className="input-group">
          <input className="search-input form-control py-2 pl-4 border-right-0 border" type="text" name="search" value={props.search} onChange={props.onChange} placeholder="Search"/>
          <span className="input-group-append">
            <div className="input-group-text search-input-addon bg-transparent"><img src={searchIcon} alt="search" /></div>
          </span>
        </div>
      </div>
      {renderRightColumn()}
    </div>
  )
}

export default SearchBarRow
