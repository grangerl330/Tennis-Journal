import React, { useState } from 'react';
import upArrow from '../../images/up-arrow-white.svg'
import downArrow from '../../images/down-arrow-white.svg'

const MatchStatRow = (props) => {
  const [border, setBorder] = useState('border-bottom');
  const [arrowIcon, setArrowIcon] = useState(upArrow)

  const toggleBorderAndArrow = () => {
    if(border === 'border-bottom') {
      setBorder("")
    } else if(border === '') {
      setBorder('border-bottom')
    }

    if(arrowIcon === upArrow) {
      setArrowIcon(downArrow)
    } else if(arrowIcon === downArrow) {
      setArrowIcon(upArrow)
    }
  }

  return (
    <div className="row justify-content-center">
      <div className={`col-1 ${border} text-left pl-0 py-3`}>
        <img src={arrowIcon} alt="edit" data-toggle="collapse" data-target={`#${props.expansionId}`} onClick={toggleBorderAndArrow}/>
      </div>
      <div className={`col-7 ${border} py-3 pl-0`}>
        <span className="text-white">{props.name}</span>
      </div>
      <div className={`col-1 ${border} pt-3`}>
        <span className="text-white">{props.value}</span>
      </div>
    </div>
  )
}

export default MatchStatRow
