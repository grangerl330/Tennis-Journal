import React, { useEffect } from 'react'
import $ from 'jquery'
import upArrow from '../../images/up-arrow-gray.svg'
import downArrow from '../../images/down-arrow-gray.svg'
import BootstrapTable from 'react-bootstrap-table-next';
import { NavLink } from 'react-router-dom'
import moment from 'moment'

const OpponentMatchesTable = (props) => {

  useEffect(() => {
    $('[data-toggle="tooltip"]').tooltip();
  })

  const matchRoundDisplay = (match) => {
    if(match.round > 8){
      return `Round of ${match.round}`
    } else if(match.round === 8){
      return "Quarterfinal"
    } else if(match.round === 4){
      return "Semifinal"
    } else if(match.round === 2){
      return "Final"
    }
  }

  const nameFormatter = (cell, row) => {
    return (
      <NavLink className="text-green" to={`/matches/${row.id}`}>
        {cell}
      </NavLink>
    )
  }

  const tournamentFormatter = (cell, row) => {
    return (
      <NavLink className="text-black" to={`/tournaments/${row.tournament.id}`}>
        {cell}
      </NavLink>
    )
  }

  const customSortCaret = (order, column) => {
    if (!order) {
      return (<span className="ml-3"><img src={upArrow} alt="up arrow" /></span>);
    } else if (order === 'asc') {
      return (<span className="ml-3"><img src={upArrow} alt="up arrow" /></span>);
    } else if (order === 'desc') {
      return (<span className="ml-3"><img src={downArrow} alt="down arrow" /></span>);
    } else {
      return null;
    }
  }

  const createMatchesData = () => {
    const result = []

    for(let match of props.matches) {
      match.date = moment(match.date).format('M/D/YY')
      match.name = matchRoundDisplay(match)
      result.push(match)
    }

    return result
  }

  const columns = () => {
    if(props.mobile) {
      return (
        [{
          dataField: 'name',
          text: 'Name',
          sort: true,
          sortCaret: customSortCaret,
          classes: 'text-green',
          formatter: nameFormatter,
          sortValue: (cell, row) => row.round
        }, {
          dataField: 'tournament.title',
          text: 'Tournament',
          formatter: tournamentFormatter
        }]
      )
    } else {
      return (
        [{
          dataField: 'name',
          text: 'Name',
          sort: true,
          sortCaret: customSortCaret,
          classes: 'text-green',
          formatter: nameFormatter,
          sortValue: (cell, row) => row.round
        }, {
          dataField: 'tournament.title',
          text: 'Tournament',
          formatter: tournamentFormatter
        }, {
          dataField: 'date',
          text: 'Date'
        }, {
          dataField: 'result',
          text: "Result"
        }, {
          dataField: 'score',
          text: "Score"
        }]
      )
    }
  }

  return (
    <div className="col-12 px-0">
      <BootstrapTable id="opponent-matches-table" keyField="id" data={createMatchesData()} columns={columns()} bootstrap4={true} bordered={false} classes="table-borderless" headerClasses="text-grey border-0" rowClasses="border-bottom" />
    </div>
  )
}

export default OpponentMatchesTable
