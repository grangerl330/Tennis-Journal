import React from 'react'
import SearchBarRow from './SearchBarRow'
import TableRow from './TableRow'

const ListContentRow = (props) => {
  return (
    <div className="row pb-4 background-light-grey text-green">
      <div className="col-10 px-0 mx-auto bg-white shadow-light-green rounded">
        <SearchBarRow type={props.type} search={props.search} onChange={props.onChange} />
        <TableRow type={props.type} content={props.content} mobile={false}/>
        <TableRow type={props.type} content={props.content} mobile={true}/>
      </div>
    </div>
  )
}

export default ListContentRow
