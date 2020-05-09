import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import TitleRow from '../components/TitleRow'
import ListContentRow from '../components/ListContentRow'
import TournamentModal from '../components/tournament-page/TournamentModal'

const ListPage = (props) => {
  useEffect(() => {
    $('[data-toggle="tooltip"]').tooltip();
  })

  const[search, setSearch] = useState("")

  const handleOnChange = event => {
    const {value} = event.target

    setSearch(value)
  }

  const filteredContent = () => {
    let content = props.content

    // To enable filter by Tournament Title in matches page
    if(props.title === "matches") {
      const matches = [];

      for(let match of props.content) {
        match.tournamentTitle = match.tournament.title

        matches.push(match)
      }

      content = matches
    }

    if(search === "") {
      return content
     } else {
      return (
        content.filter(obj =>
          Object.keys(obj).some(key => obj[key].toString().toLowerCase().includes(search.toLowerCase().trim()))
        )
      )
    }
  }

  return (
    <section id={`${props.title}-page`}>
      <div className="container-fluid p-0 background-light-grey">
        <TitleRow icon={props.icon} title={props.title} />
        <ListContentRow type={props.title} search={search} content={filteredContent()} onChange={handleOnChange} />
      </div>

      <TournamentModal addTournamentToDatabase={props.addTournamentToDatabase} type="Add" />
    </section>
  )
}

export default ListPage
