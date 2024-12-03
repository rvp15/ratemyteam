import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import SuggestionList from "./SuggestionList";

const SearchAutoComplete = ({
  placeholder = "",
  staticData,
  dataKey = "",
  customloading = "Loading...",
  onSelect = () => {},
  customStyles = {},
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    getSuggestions(inputValue)
  };

  const getSuggestions = async (inputValue) => {
    console.log(staticData)
   let result = staticData
      .filter((item) =>
        item[dataKey]?.toLowerCase().includes(inputValue.toLowerCase())
      )
      .map((item) => item[dataKey]); // Extract the `Team` string
    setSuggestions(result);
    setFocusedIndex(-1);
    console.log(suggestions)
  };

const handleSuggestionClick=(suggestion)=>{
  setInputValue(suggestion);
  setSuggestions([]);
  onSelect(suggestion);
}

const handleKeyDown = (e) => {
  console.log("Key pressed:", e.key); // Debugging
  if (suggestions.length === 0) return;

  switch (e.key) {
    case "ArrowDown":
      e.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
      );
      break;
    case "ArrowUp":
      e.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
      );
      break;
    case "Enter":
      e.preventDefault();
      if (focusedIndex >= 0 && focusedIndex < suggestions.length) {
        handleSuggestionClick(suggestions[focusedIndex]);
      }
      break;
    case "Escape":
      e.preventDefault();
      setSuggestions([]);
      break;
    default:
      break;
  }
};

  return (
    <div className="search-container">
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        style={customStyles}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} // Handle key presses
      />
       {suggestions?.length > 0 && (
        <ul className="suggestions-list" role="listbox">
          <SuggestionList
            suggestions={suggestions}
            focusedIndex={focusedIndex} 
            onSuggestionClick={handleSuggestionClick}
          />
        </ul>
      )}
     <Button variant="dark">Search</Button>
    </div>
  );
};

export default SearchAutoComplete;
