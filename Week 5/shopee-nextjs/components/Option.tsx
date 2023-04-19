import React from 'react'
import { useState } from 'react';

const Option = ({handleToggle,toggle}:any) => {
  return (
    <>
      <button onClick={handleToggle} className='option__btn'>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z">
            </path>
          </svg>
          Create {toggle?"Product":"User"}
        </span>
      </button>
    </>
  )
}

export default Option