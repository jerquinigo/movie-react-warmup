import React from 'react';

export const Child = ({name, changeMyName}) => {
    return(
      <>
      Child name: { name}
      <input type="text" value={name} onChange={changeMyName}/>
      </>
    )
}
