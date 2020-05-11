import React from 'react';
import TitleRow from '../components/TitleRow';
import BackButtonRow from '../components/BackButtonRow';
import ItemTitleRow from '../components/ItemTitleRow';
import ItemAttributeRow from '../components/ItemAttributeRow';
import NotesRow from '../components/NotesRow';
import OpponentModal from '../components/opponent-page/OpponentModal';
import OpponentStatModal from '../components/opponent-page/OpponentStatModal'
import OpponentStatDisplay from '../components/OpponentStatDisplay';
import OpponentMatchesList from '../components/opponent-page/OpponentMatchesList';
import NotFound from './NotFound.js';
import opponentsIcon from '../images/opponents-icon.svg';
import { withRouter } from 'react-router';

const OpponentPage = (props) => {
  var opponentId = parseInt(props.id)
  var opponent = props.currentOpponent(opponentId)

  if(opponent) {
    return (
      <section id="opponent-view-page">
        <div className="container-fluid p-0 background-light-grey">
          <TitleRow icon={opponentsIcon} title="Opponents" page="opponent" />
          <div className="row pb-4 background-light-grey text-green">
            <div className="col-10 px-0 mx-auto bg-white shadow-light-green rounded">
              <BackButtonRow goBack={props.history.goBack} />
              <div className="row h-100">
                <div id="tournament-page-left" className="col-12 col-md-8">
                  <ItemTitleRow title={`${opponent.first_name} ${opponent.last_name}`} page="opponent" />
                  <ItemAttributeRow name="UTR" value={opponent.utr} />
                  <ItemAttributeRow name="Age" value={opponent.age} />
                  <ItemAttributeRow name="Plays" value={`${opponent.handedness} Handed`} />
                  <NotesRow name="Notes" value={opponent.notes} />
                  <div className="row mt-3 ml-3 ml-md-5 pr-0 justify-content-start">
                    <div className="col-11">
                      <hr className="light-grey-line" />
                    </div>
                  </div>
                  <OpponentMatchesList matches={[opponent.match]} opponent={opponent}/>
                </div>
                <div id="tournament-page-right" className="col-12 col-md-4 pl-0 h-md-100">
                  <OpponentStatDisplay opponent={opponent}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <OpponentModal opponent={opponent} editOpponentInDatabase={props.editOpponentInDatabase} type="Edit"/>
        <OpponentStatModal opponent={opponent} editOpponentInDatabase={props.editOpponentInDatabase} type="Strengths"/>
        <OpponentStatModal opponent={opponent} editOpponentInDatabase={props.editOpponentInDatabase} type="Weaknesses"/>
      </section>
    )
  } else {
    return <NotFound />
  }
}

export default withRouter(OpponentPage)
