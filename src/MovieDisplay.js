import React from 'react';

export const MovieDisplay = ({title, description}) => {
  return (
    <li>
    Title: {title}
    <br/>
    Description {description}
    </li>
  )
}
