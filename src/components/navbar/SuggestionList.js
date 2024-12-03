import React from 'react'

const SuggestionList = ({suggestions =[],highlight,dataKey,onSuggestionClick}) => {
  return (
    <div>
      {suggestions?.map((suggestion,i)=>
        (<li 
        key={i}
        onClick={()=>onSuggestionClick(suggestion)}
        className='suggestion-item'>{suggestion}</li>))}
    </div>
  )
}

export default SuggestionList
