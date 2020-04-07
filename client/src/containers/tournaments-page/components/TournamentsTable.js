import React, { useEffect } from 'react'
import $ from 'jquery'
import BootstrapTable from 'react-bootstrap-table-next';
import { NavLink } from 'react-router-dom'
import moment from 'moment'

const TournamentsTable = (props) => {

  useEffect(() => {
    $('[data-toggle="tooltip"]').tooltip();
  })

  const surfaceFormatter = (cell, row) => {
    if (cell === "Hard") {
      return (
        <span data-toggle="tooltip" data-placement="top" title="Hard">
          <i className="fas fa-circle fa-lg hard-court"></i>
        </span>
      )
    } else if(cell === "Clay") {
      return (
        <span data-toggle="tooltip" data-placement="top" title="Clay">
          <i className="fas fa-circle fa-lg clay-court"></i>
        </span>
      )
    } else if(cell === "Grass") {
      return (
        <span data-toggle="tooltip" data-placement="top" title="Grass">
          <i className="fas fa-circle fa-lg grass-court"></i>
        </span>
      )
    } else if(cell === "Carpet") {
      return (
        <span data-toggle="tooltip" data-placement="top" title="Carpet">
          <i className="fas fa-circle fa-lg carpet-court"></i>
        </span>
      )
    }
  }

  const titleFormatter = (cell, row) => {
    return (
      <NavLink className="text-green" to={`/tournaments/${row.id}`}>
        {cell}
      </NavLink>
    )
  }

  const createTournamentsData = () => {
    const result = []

    for(let tournament of props.tournaments) {
      tournament.dates = moment(tournament.start_date).format('M/D/YY') + " - " + moment(tournament.end_date).format('M/D/YY')
      result.push(tournament)
    }

    return result
  }

  const columns = [{
    dataField: 'title',
    text: 'Name',
    sort: true,
    sortCaret: (order, column) => {
    if (!order) return (<span className="ml-3 text-green"><i className="fas fa-chevron-up"></i></span>);
      else if (order === 'asc') return (<span className="ml-3 text-green"><i className="fas fa-chevron-up"></i></span>);
      else if (order === 'desc') return (<span className="ml-3 text-green"><i className="fas fa-chevron-down"></i></span>);
      return null;
    },
    classes: 'text-green',
    formatter: titleFormatter
  }, {
    dataField: 'dates',
    text: 'Dates',
    sort: true,
    sortCaret: (order, column) => {
    if (!order) return (<span className="ml-3 text-green"><i className="fas fa-chevron-up"></i></span>);
      else if (order === 'asc') return (<span className="ml-3 text-green"><i className="fas fa-chevron-up"></i></span>);
      else if (order === 'desc') return (<span className="ml-3 text-green"><i className="fas fa-chevron-down"></i></span>);
      return null;
    }
  }, {
    dataField: 'age_category',
    text: "Division",
    sort: true,
    sortCaret: (order, column) => {
    if (!order) return (<span className="ml-3 text-green"><i className="fas fa-chevron-up"></i></span>);
      else if (order === 'asc') return (<span className="ml-3 text-green"><i className="fas fa-chevron-up"></i></span>);
      else if (order === 'desc') return (<span className="ml-3 text-green"><i className="fas fa-chevron-down"></i></span>);
      return null;
    }
  }, {
    dataField: 'surface',
    text: "Surface",
    sort: true,
    sortCaret: (order, column) => {
    if (!order) return (<span className="ml-3 text-green"><i className="fas fa-chevron-up"></i></span>);
      else if (order === 'asc') return (<span className="ml-3 text-green"><i className="fas fa-chevron-up"></i></span>);
      else if (order === 'desc') return (<span className="ml-3 text-green"><i className="fas fa-chevron-down"></i></span>);
      return null;
    },
    formatter: surfaceFormatter
  }, {
    dataField: 'draw_size',
    text: "Draw Size",
    sort: true,
    sortCaret: (order, column) => {
    if (!order) return (<span className="ml-3 text-green"><i className="fas fa-chevron-up"></i></span>);
      else if (order === 'asc') return (<span className="ml-3 text-green"><i className="fas fa-chevron-up"></i></span>);
      else if (order === 'desc') return (<span className="ml-3 text-green"><i className="fas fa-chevron-down"></i></span>);
      return null;
    }
  }, {
    dataField: 'points',
    text: "Points",
    sort: true,
    sortCaret: (order, column) => {
    if (!order) return (<span className="ml-3 text-green"><i className="fas fa-chevron-up"></i></span>);
      else if (order === 'asc') return (<span className="ml-3 text-green"><i className="fas fa-chevron-up"></i></span>);
      else if (order === 'desc') return (<span className="ml-3 text-green"><i className="fas fa-chevron-down"></i></span>);
      return null;
    }
  }];

  return (
    <div className="col-12 text-center mx-auto">
      <BootstrapTable keyField="id" data={createTournamentsData()} columns={columns} bootstrap4={true} bordered={false} classes="table-borderless" headerClasses="text-green border-0" rowClasses="border-bottom" />
    </div>
  )
}

export default TournamentsTable
