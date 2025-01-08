import React, { useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import teamData from "../../../assets/mockData/teamDataJson.json";
import "./styles.css";
import SelectedTeamDisplay from "./SelectedTeamDisplay";

const TypeheadSearch = () => {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]); // State to store selected team
  const [query, setQuery] = useState(""); // Track the user input for highlighting

  // Extract team names from mock JSON
  const teamOptions = teamData["Team and Age"].map((item) => item.Team);

  const handleSearch = (query) => {
    setQuery(query);
    const filteredOptions = teamOptions.filter((team) =>
      team.toString().toLowerCase().includes(query.toLowerCase())
    );
    setOptions(filteredOptions.slice(0, 10)); // Update options with filtered results
  };

  // Helper function to highlight matching text
  const highlightText = (text, query) => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // Bypass client-side filtering
  const filterBy = () => true;

  return (
    <div className="page-wrapper">
      <div className="search-container">
        <AsyncTypeahead
          id="team-search"
          filterBy={filterBy}
          labelKey={(option) => option} // Directly use option as string
          minLength={1}
          onSearch={handleSearch}
          search={query}
          options={options}
          placeholder="Search for a team..."
          onChange={(selectedOptions) => setSelected(selectedOptions)} // Update selected team
          renderMenuItemChildren={(option) => (
            <span>{highlightText(option, query)}</span>
          )}
          maxHeight={null}
          clearButton // Enable the built-in clear button
        />
        <SelectedTeamDisplay
          selectedTeam={selected.length > 0 ? selected[0] : null}
        />
      </div>
    </div>
  );
};

export default TypeheadSearch;
