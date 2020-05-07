import React, { useState } from 'react';
import upArrow from '../../images/up-arrow-white.svg'
import downArrow from '../../images/down-arrow-white.svg'

const MatchStatRow = (props) => {
  const [arrowIcon, setArrowIcon] = useState(upArrow);

  const toggleArrow = () => {
    if(arrowIcon === upArrow) {
      setArrowIcon(downArrow)
    } else if(arrowIcon === downArrow) {
      setArrowIcon(upArrow)
    }
  }

  return (
    <div className="row justify-content-center">
      <div className={`col-1 border-top text-left py-3 pl-0`}>
        {!props.noIcon && (
          <img src={arrowIcon} alt="edit" data-toggle="collapse" data-target={`#${props.expansionId}`} onClick={toggleArrow}/>
          )}
      </div>
      <div className={`col-7 border-top py-3 pl-0`}>
        <span className="text-white">{props.name}</span>
      </div>
      <div className={`col-1 border-top pt-3`}>
        <span className="text-white">{props.value}</span>
      </div>
    </div>
  )
}

export default MatchStatRow
