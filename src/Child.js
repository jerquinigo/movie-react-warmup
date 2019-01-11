import React from 'react';
import { GrandChild } from './GrandChild';

export const Child = ({name, handleChange, grandChildHairColor}) => {
    return(
      <>
      Child name: { name}
      <input type="text" name="childsName" value={name} onChange={handleChange}/>
      <br />
      <br />
      <GrandChild grandChildHairColor={grandChildHairColor}
       handleChange={handleChange} />
      </>
    )
}
