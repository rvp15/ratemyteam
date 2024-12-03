import React from "react";

const SuggestionList = ({
  suggestions = [],
  focusedIndex,
  onSuggestionClick,
}) => {
  return (
    <div>
      {suggestions?.map((suggestion, index) => (
        <li
          key={index}
          className={`suggestion-item ${
            index === focusedIndex ? "focused" : ""
          }`}
          onClick={() => onSuggestionClick(suggestion)}
          role="option"
          aria-selected={index === focusedIndex}
        >
          {suggestion}
        </li>
      ))}
    </div>
  );
};

export default SuggestionList;
