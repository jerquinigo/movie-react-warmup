import React from 'react';

export const GrandChild = ({grandChildHairColor, handleChange}) => {
  return(
    <>
      GRAND CHLD! Hair Color: {grandChildHairColor}
      <br />
      <select value={grandChildHairColor} name="grandChildHairColor" onChange={handleChange}>]
        <option value="blue">blue</option>
        <option value="black">black</option>
        <option value="red">red</option>
        <option value="brown">brown</option>
        <option value="grey">grey</option>
      </select>
    </>
  )
}
