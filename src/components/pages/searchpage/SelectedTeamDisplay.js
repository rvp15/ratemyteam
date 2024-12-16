import React, { useState, useEffect } from "react";
import teamData from "../../../assets/mockData/teamDataJson.json";
import Table from "react-bootstrap/Table";

const SelectedTeamDisplay = ({ selectedTeam }) => {
  // Always call hooks unconditionally at the top of your component
  const [typedDescription, setTypedDescription] = useState("");
  const [isTyping, setIsTyping] = useState(false);

 
  const teamDetails = teamData["Team and Age"].find(
    (team) => team.Team === selectedTeam
  );
 const description = teamDetails?.Description || "No description available.";

 useEffect(() => {
  const typeDescription = () => {
    let index = -1;
    setTypedDescription(""); // Reset typed description when a new team is selected
    setIsTyping(true);

    const intervalId = setInterval(() => {
      setTypedDescription((prev) => prev + description.charAt(index)); // Use charAt to handle each character properly
      index += 1;
      if (index === description.length) {
        clearInterval(intervalId);
        setIsTyping(false);
      }
    }, 10); // Adjust speed here (ms per letter)
  };

  if (selectedTeam) {
    typeDescription();
  }

  return () => clearInterval(); // Clean up typing animation on component unmount
}, [selectedTeam, description]);

  // If selectedTeam is not passed, return null early, but hooks are already above
  if (!selectedTeam) return null;
  if (!teamDetails) return <p>Team data not found.</p>;

  return (
    <div className="table-container">
      <div className="selected-team-display">
        <h4>{selectedTeam}</h4>
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
              <td>{teamDetails.Year}</td>
              <td>{teamDetails.Wins}</td>
              <td>{teamDetails.Losses}</td>
              <td>{teamDetails.Ties}</td>
              <td>{(teamDetails.WinPercentage * 100).toFixed(2)}%</td>
              <td>{teamDetails.RunsScored}</td>
              <td>{teamDetails.RunsAllowed}</td>
              <td>{teamDetails.RunDifferential}</td>
            </tr>
          </tbody>
        </Table>

        <div className="team-description">
          <h5>About the Team:</h5>
          <p>{typedDescription}</p>
          {isTyping} {/* Show typing indicator while typing */}
        </div>
      </div>
    </div>
  );
};

export default SelectedTeamDisplay;
