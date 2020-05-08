import React, { useEffect } from 'react'
import $ from 'jquery'
import BootstrapTable from 'react-bootstrap-table-next';
import upArrow from '../../images/up-arrow-gray.svg'
import downArrow from '../../images/down-arrow-gray.svg'
import hard from '../../images/hard.svg'
import clay from '../../images/clay.svg'
import grass from '../../images/grass.svg'
import carpet from '../../images/carpet.svg'
import { NavLink } from 'react-router-dom'
import moment from 'moment'

const TournamentsTable = (props) => {

  useEffect(() => {
    $('[data-toggle="tooltip"]').tooltip();
  })

  const surfaceFormatter = (cell, row) => {
    const surfaceImages = {
      Hard: hard,
      Clay: clay,
      Grass: grass,
      Carpet: carpet
    }

    let icon = surfaceImages[cell]

    return (
      <span data-toggle="tooltip" data-placement="top" title={cell}>
        <img src={icon} alt="surface" style={{width: "22px"}}/>
      </span>
    )
  }

  const titleFormatter = (cell, row) => {
    return (
      <NavLink className="text-green" to={`/tournaments/${row.id}`}>
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

  const createTournamentsData = () => {
    const result = []

    for(let tournament of props.tournaments) {
      tournament.dates = moment(tournament.start_date).format('M/D/YY') + " - " + moment(tournament.end_date).format('M/D/YY')
      result.push(tournament)
    }

    return result
  }

  const columns = () => {
    if(props.mobile) {
      return (
        [{
          dataField: 'title',
          text: 'Name',
          sort: true,
          sortCaret: customSortCaret,
          classes: 'text-grey',
          formatter: titleFormatter
        }, {
          dataField: 'dates',
          text: 'Dates',
          sort: true,
          sortCaret: customSortCaret
        }]
      )
    } else {
      return (
        [{
          dataField: 'title',
          text: 'Name',
          sort: true,
          sortCaret: customSortCaret,
          classes: 'text-grey',
          formatter: titleFormatter
        }, {
          dataField: 'dates',
          text: 'Dates',
          sort: true,
          sortCaret: customSortCaret
        }, {
          dataField: 'age_category',
          text: "Division",
          sort: true,
          sortCaret: customSortCaret
        }, {
          dataField: 'surface',
          text: "Surface",
          sort: true,
          sortCaret: customSortCaret,
          formatter: surfaceFormatter
        }, {
          dataField: 'draw_size',
          text: "Draw Size",
          sort: true,
          sortCaret: customSortCaret
        }, {
          dataField: 'points',
          text: "Points",
          sort: true,
          sortCaret: customSortCaret
        }]
      )
    }
  }

  return (
    <div className="col-12 text-center mx-auto">
      <BootstrapTable keyField="id" data={createTournamentsData()} columns={columns()} bootstrap4={true} bordered={false} classes="table-borderless" headerClasses="text-grey border-0" rowClasses="border-bottom" />
    </div>
  )
}

export default TournamentsTable
