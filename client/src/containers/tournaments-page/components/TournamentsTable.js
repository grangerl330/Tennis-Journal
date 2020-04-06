import React, { useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { NavLink } from 'react-router-dom'
import moment from 'moment'
import hardCourtCircle from '../../../images/hard.png'
import clayCourtCircle from '../../../images/clay.png'
import grassCourtCircle from '../../../images/grass.png'
import carpetCourtCircle from '../../../images/carpet.png'

const TournamentsTable = (props) => {

  const surfaceFormatter = (cell, row) => {
    if (cell === "Hard") {
      return (
        <img src={hardCourtCircle} alt="logo" />
      )
    } else if(cell === "Clay") {
      return (
        <img src={clayCourtCircle} alt="logo" />
      )
    } else if(cell === "Grass") {
      return (
        <img src={grassCourtCircle} alt="logo" />
      )
    } else if(cell === "Carpet") {
      return (
        <img src={carpetCourtCircle} alt="logo" />
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

//   const tournaments = [{
//     id: 1,
//     title: "Tournament 1",
//     dates: "1/1/20 - 1/5/20",
//     division: "Men's Division",
//     surface: "Hard",
//     drawSize: 128,
//     points: 500
//   }, {
//     id: 2,
//     title: "Tournament 2",
//     dates: "2/1/20 - 2/5/20",
//     division: "Men's Division",
//     surface: "Clay",
//     drawSize: 32,
//     points: 100
//   }, {
//     id: 3,
//     title: "Tournament 3",
//     dates: "3/1/20 - 3/5/20",
//     division: "Men's Division",
//     surface: "Grass",
//     drawSize: 64,
//     points: 200
//   }
// ]

  return (
    <div className="col-12 text-center mx-auto">
      <BootstrapTable keyField="id" data={createTournamentsData()} columns={columns} bootstrap4={true} bordered={false} classes="table-borderless" headerClasses="text-green border-0" rowClasses="border-bottom" />
    </div>
  )
}

export default TournamentsTable
