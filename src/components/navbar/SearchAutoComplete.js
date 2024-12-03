import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import SuggestionList from "./SuggestionList";

const SearchAutoComplete = ({
  placeholder = "",
  staticData,
  dataKey = "",
  customloading = "Loading...",
  onSelect = () => {},
  onBlur = () => {},
  onFocus = () => {},
  onChange = () => {},
  customStyles = {},
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };
  const getSuggestions = async (inputValue) => {
    setError(null);
    setLoading(true);
    console.log(staticData)
   let result = staticData
      .filter((item) =>
        item[dataKey]?.toLowerCase().includes(inputValue.toLowerCase())
      )
      .map((item) => item[dataKey]); // Extract the `Team` string
    setSuggestions(result);
    console.log(suggestions)
  };

  useEffect(() => {
    if (inputValue.length > 1) {
        console.log("Input Value:", inputValue);

      getSuggestions(inputValue);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [inputValue]);

const handleSuggestionClick=(suggestion)=>{
  setInputValue(suggestion);
  onSelect(suggestion);
  setSuggestions([]);
}
  return (
    <div className="search-container">
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        style={customStyles}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleInputChange}
      />
       {suggestions?.length > 0 && (
        <ul className="suggestions-list" role="listbox">
          <SuggestionList
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
          />
        </ul>
      )}
     <Button variant="dark">Search</Button>
    </div>
  );
};

export default SearchAutoComplete;
