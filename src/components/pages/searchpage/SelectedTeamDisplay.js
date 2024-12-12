import React from 'react'

const SelectedTeamDisplay = ({selectedTeam}) => {
    if (!selectedTeam) return null;
  return (
    <div className="selected-team-display">
    <h4>Selected Team:</h4>
    <p>{selectedTeam}</p>
  </div>
  )
}

export default SelectedTeamDisplay
