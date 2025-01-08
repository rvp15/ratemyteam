import React from "react";
import teamData from "../../../assets/mockData/teamDataJson.json";
import Table from "react-bootstrap/Table";
import "./styles.css";

const SelectedTeamDisplay = ({ selectedTeam }) => {
  // Find the details of the selected team from the team data
  const teamDetails = teamData["Team and Age"].find(
    (team) => team.Team === selectedTeam
  );

  // If no details are found, display this fallback description
  const description = teamDetails?.Description || "No description available.";

  return (
    <div className="table-container">
      {selectedTeam ? ( // Render only when a team is selected
        <div className="selected-team-display">
          <h4>{selectedTeam}</h4>
          <div className="table-responsive">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Wins</th>
                  <th>Losses</th>
                  <th>Ties</th>
                  <th>Win %</th>
                  <th>Runs Scored</th>
                  <th>Runs Allowed</th>
                  <th>Run Differential</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{teamDetails?.Year}</td>
                  <td>{teamDetails?.Wins}</td>
                  <td>{teamDetails?.Losses}</td>
                  <td>{teamDetails?.Ties}</td>
                  <td> {teamDetails?.WinPercentage}</td>
                  <td>{teamDetails?.RunsScored}</td>
                  <td>{teamDetails?.RunsAllowed}</td>
                  <td>{teamDetails?.RunDifferential}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="team-description">
            <h5>About the Team:</h5>
            {description}
          </div>
        </div>
      ) : null
      }
    </div>
  );
};

export default SelectedTeamDisplay;
