import React, { useEffect } from 'react'
import $ from 'jquery'
import BootstrapTable from 'react-bootstrap-table-next';
import { NavLink } from 'react-router-dom'
import moment from 'moment'

const MatchesTable = (props) => {

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

  const opponentFormatter = (cell, row) => {
    return (
      <NavLink className="text-black" to={`/opponents/${row.opponent.id}`}>
        {cell}
      </NavLink>
    )
  }

  const customSortCaret = (order, column) => {
    if (!order) {
      return (<span className="ml-3 text-green"><i className="fas fa-chevron-up"></i></span>);
    } else if (order === 'asc') {
      return (<span className="ml-3 text-green"><i className="fas fa-chevron-up"></i></span>);
    } else if (order === 'desc') {
      return (<span className="ml-3 text-green"><i className="fas fa-chevron-down"></i></span>);
    } else {
      return null;
    }
  }

  const createMatchesData = () => {
    const result = []

    for(let match of props.matches) {
      match.date = moment(match.date).format('M/D/YY')
      match.name = matchRoundDisplay(match)
      match.opponentName = match.opponent.first_name + " " + match.opponent.last_name
      result.push(match)
    }

    return result
  }

  const columns = [{
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
    sort: true,
    sortCaret: customSortCaret,
    formatter: tournamentFormatter
  }, {
    dataField: 'date',
    text: 'Date',
    sort: true,
    sortCaret: customSortCaret
  }, {
    dataField: 'result',
    text: "Result",
    sort: true,
    sortCaret: customSortCaret
  }, {
    dataField: 'opponentName',
    text: "Opponent",
    sort: true,
    sortCaret: customSortCaret,
    formatter: opponentFormatter
  }];

  return (
    <div className="col-12 text-center mx-auto">
      <BootstrapTable keyField="id" data={createMatchesData()} columns={columns} bootstrap4={true} bordered={false} classes="table-borderless" headerClasses="text-green border-0" rowClasses="border-bottom" />
    </div>
  )
}

export default MatchesTable
